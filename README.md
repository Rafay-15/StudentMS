# School System LMS

This is a Learning Management System (LMS) for a school, built using React Native. The system includes functionalities for managing students, teachers, classes, fees, and reports. This document provides instructions on how to set up and run the project locally.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Firebase Database Setup](#firebase-database-setup)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Getting Started

To get a local copy up and running follow these simple steps.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- Firebase account

### For Expo Users

- Expo CLI (>= 4.x)

### For React Native CLI Users

- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/school-system-lms.git
cd school-system-lms
```

2. Install the dependencies:

```sh
npm install
# or
yarn install
```

### For Expo Users

3. Install Expo CLI globally if you haven't already:

```sh
npm install -g expo-cli
```

## Running the Project

### Using Expo

1. Start the Expo development server:

```sh
expo start
```

2. Use the Expo app on your phone to scan the QR code provided by the Expo CLI, or run the app on an emulator/simulator.

### Using React Native CLI

1. Start the Metro Bundler:

```sh
npx react-native start
```

2. In another terminal, run the following command to start the app on an Android device/emulator:

```sh
npx react-native run-android
```

3. Or run the following command to start the app on an iOS device/simulator (requires Xcode):

```sh
npx react-native run-ios
```

## Firebase Database Setup

### 1. Create a Firebase Project

- Go to the [Firebase Console](https://console.firebase.google.com/)
- Click on "Add project" and follow the instructions to create a new project

### 2. Add Firebase to Your Project

- In the Firebase Console, go to "Project settings"
- Under "Your apps", click on the web icon (</>) to create a new web app
- Follow the instructions to register your app and get your Firebase configuration

### 3. Update Firebase Configuration

- Create a file named `firebaseConfig.js` in the `src` directory of your project
- Add your Firebase configuration to this file:

```js
// src/firebaseConfig.js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Database Schema

Use the following structure to set up your Firestore database collections and documents.

### Admin Collection
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

### AgeRecords Collection
```json
{
  "data": {
    "students": [
      {
        "age": "age_placeholder",
        "fatherName": "father_name_placeholder",
        "name": "student_name_placeholder",
        "registrationNumber": registration_number_placeholder,
        "totalBoys": total_boys_placeholder,
        "totalGirls": total_girls_placeholder
      }
    ],
    "generatedAt": "timestamp_placeholder",
    "reportId": "report_id_placeholder",
    "reportType": "report_type_placeholder"
  }
}
```

### Students Collection
```json
{
  "admissionClass": "admission_class_placeholder",
  "classId": "class_id_placeholder",
  "dateOfAdmission": "date_of_admission_placeholder",
  "dateOfBirth": "date_of_birth_placeholder",
  "docId": "document_id_placeholder",
  "email": "student_email_placeholder",
  "fatherDetails": {
    "caste": "caste_placeholder",
    "fatherName": "father_name_placeholder",
    "occupation": "occupation_placeholder",
    "residence": "residence_placeholder"
  },
  "gender": "gender_placeholder",
  "name": "student_name_placeholder",
  "password": "password_placeholder",
  "registrationNumber": registration_number_placeholder,
  "remarks": "remarks_placeholder"
}
```

### Classes Collection
```json
{
  "classId": "class_id_placeholder",
  "className": "class_name_placeholder",
  "subjects": ["subject1_placeholder", "subject2_placeholder", "subject3_placeholder"],
  "syllabus": "syllabus_url_placeholder",
  "timetable": "timetable_url_placeholder"
}
```

### FeeStatus Collection
```json
{
  "amountDue": amount_due_placeholder,
  "amountPaid": amount_paid_placeholder,
  "lateFees": late_fees_placeholder,
  "payableAmount": payable_amount_placeholder,
  "paymentDate": "payment_date_placeholder",
  "registrationNumber": registration_number_placeholder,
  "remarks": "remarks_placeholder",
  "studentName": "student_name_placeholder"
}
```

### Marks Collection
```json
{
  "classId": "class_id_placeholder",
  "marksObtained": "marks_obtained_placeholder",
  "registrationNumber": "registration_number_placeholder",
  "subjectName": "subject_name_placeholder",
  "term": "term_placeholder"
}
```

### ResultReports Collection
```json
{
  "data": {
    "classResults": [
      {
        "className": "class_name_placeholder",
        "students": [
          {
            "marks": {
              "Subject1": {
                "Final Term": final_term_marks_placeholder,
                "First Term": first_term_marks_placeholder,
                "Mid Term": mid_term_marks_placeholder
              },
              "Subject2": {
                "Final Term": final_term_marks_placeholder,
                "First Term": first_term_marks_placeholder,
                "Mid Term": mid_term_marks_placeholder
              }
            },
            "name": "student_name_placeholder",
            "registrationNumber": registration_number_placeholder
          }
        ]
      }
    ],
    "generatedAt": "timestamp_placeholder",
    "reportId": "report_id_placeholder",
    "reportType": "report_type_placeholder"
  }
}
```

### Teachers Collection
```json
{
  "assignedclass": "assigned_class_placeholder",
  "email": "teacher_email_placeholder",
  "name": "teacher_name_placeholder",
  "password": "hashed_password_placeholder",
  "teacherId": "teacher_id_placeholder"
}
```

### Users Collection
```json
{
  "email": "user_email_placeholder",
  "role": "user_role_placeholder"
}
```

## Project Structure

- `/src`: Contains the source code for the React Native app
- `/assets`: Contains static assets like images and fonts
- `firebaseConfig.js`: Contains Firebase configuration

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

### .gitignore

Create a `.gitignore` file in the root of your project and add the following lines to exclude the database link and other sensitive files:

```gitignore
# Firebase config
src/firebaseConfig.js

# Node modules
node_modules/

# Expo
.expo/
.expo-shared/
```


