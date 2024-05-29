import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ViewStudent = ({ navigation }) => {
    const [studentsByClass, setStudentsByClass] = useState({});
    const [ageReport, setAgeReport] = useState(null);

    const calculateAge = (dateOfBirth) => {
        const dob = dateOfBirth.toDate();
        const today = new Date();
        const diff = Math.abs(today - dob);
        const ageYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const ageMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        return { years: ageYears, months: ageMonths };
    };

    const generateAgeReport = (students) => {
        const ageMap = new Map();

        students.forEach(student => {
            const age = calculateAge(student.dateOfBirth);
            const key = `${age.years} years ${age.months} months`;

            if (ageMap.has(key)) {
                const count = ageMap.get(key);
                ageMap.set(key, {
                    count: count.count + 1,
                    boys: count.boys + (student.gender.toLowerCase() === 'male' ? 1 : 0),
                    girls: count.girls + (student.gender.toLowerCase() === 'female' ? 1 : 0)
                });
            } else {
                ageMap.set(key, {
                    count: 1,
                    boys: student.gender.toLowerCase() === 'male' ? 1 : 0,
                    girls: student.gender.toLowerCase() === 'female' ? 1 : 0
                });
            }
        });

        return ageMap;
    };

    const fetchStudentsByClass = async () => {
        try {
            const studentsQuerySnapshot = await firestore().collection('Students').get();

            if (studentsQuerySnapshot.empty) {
                Alert.alert('Not Found', 'No students found');
                setStudentsByClass({});
            } else {
                const studentsData = studentsQuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                const groupedStudents = {};
                studentsData.forEach(student => {
                    if (!groupedStudents[student.admissionClass]) {
                        groupedStudents[student.admissionClass] = [];
                    }
                    groupedStudents[student.admissionClass].push(student);
                });

                setStudentsByClass(groupedStudents);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    useEffect(() => {
        fetchStudentsByClass();
    }, []);

    useEffect(() => {
        if (studentsByClass) {
            const allStudents = Object.values(studentsByClass).flat();
            const report = generateAgeReport(allStudents);
            setAgeReport(report);
        }
    }, [studentsByClass]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.tableContainer}>
                <Text style={styles.listHeader}>Student Age Record Report for All Classes</Text>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <Text style={styles.header}>Class</Text>
                        <Text style={styles.header}>Registration No</Text>
                        <Text style={styles.header}>Student Name</Text>
                        <Text style={styles.header}>Father Name</Text>
                        <Text style={styles.header}>Date of Birth</Text>
                        <Text style={styles.header}>Age (Years & Months)</Text>
                    </View>
                    {Object.entries(studentsByClass).map(([classKey, students]) => (
                        <React.Fragment key={classKey}>
                            <View style={styles.row}>
                                <Text style={styles.classHeader} colSpan={6}>{classKey}</Text>
                            </View>
                            {students.map((student, index) => (
                                <View key={index} style={styles.row}>
                                    <Text style={styles.data}>{student.admissionClass}</Text>
                                    <Text style={styles.data}>{student.registrationNumber}</Text>
                                    <Text style={styles.data}>{student.name}</Text>
                                    <Text style={styles.data}>{student.fatherDetails.fatherName}</Text>
                                    <Text style={styles.data}>{new Date(student.dateOfBirth.seconds * 1000).toDateString()}</Text>
                                    <Text style={styles.data}>{calculateAge(student.dateOfBirth).years} years {calculateAge(student.dateOfBirth).months} months</Text>
                                </View>
                            ))}
                        </React.Fragment>
                    ))}
                </View>
            </View>

            {/* Age Report */}
            <View style={styles.tableContainer}>
                <Text style={styles.listHeader}>Age Distribution</Text>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <Text style={styles.header}>Age</Text>
                        <Text style={styles.header}>Number</Text>
                        <Text style={styles.header}>Boys</Text>
                        <Text style={styles.header}>Girls</Text>
                    </View>
                    {ageReport && Array.from(ageReport.entries()).map(([key, value], index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.data}>{key}</Text>
                            <Text style={styles.data}>{value.count}</Text>
                            <Text style={styles.data}>{value.boys}</Text>
                            <Text style={styles.data}>{value.girls}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    tableContainer: {
        marginBottom: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5,
    },
    header: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    classHeader: {
        flex: 6,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    data: {
        flex: 1,
        textAlign: 'center',
    },
    listHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ViewStudent;
