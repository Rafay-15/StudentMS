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

- Node.js (>= 20.x)
-change the NDK version according to your installed version in android -> app -> build.gradle
- npm (>= 6.x) or yarn (>= 1.x)
- Expo CLI (>= 4.x)
- Firebase account

## Installation

1. Clone the repository:

```sh
git clone https://github.com/Rafay-15/StudentMS.git
cd school-system-lms
```

2. Install the dependencies:

```sh
npm install
# or
yarn install
```

3. Certainly! If you want to provide instructions for starting the React Native project using both Expo and React Native CLI, you can update the README to include both sets of instructions.

### Updated README

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

#### Admin Collection

```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

#### AgeRecords Collection

```json
{
  "data": {
    "students": [
      {
        "age": "14 years 4 months",
        "fatherName": "Richard Doe",
        "name": "John Doe",
        "registrationNumber": 101,
        "totalBoys": 30,
        "totalGirls": 25
      }
    ],
    "generatedAt": "2024-05-20T10:00:00Z",
    "reportId": "report1",
    "reportType": "Student Age Record"
  }
}
```

#### Students Collection

```json
{
  "admissionClass": "class2",
  "classId": "class2",
  "dateOfAdmission": "April 2, 2024 at 3:47:00 PM UTC+5",
  "dateOfBirth": "March 22, 2024 at 3:47:00 PM UTC+5",
  "docId": "0Lne2XesSPfOf73oooO2",
  "email": "umer@gmail.com",
  "fatherDetails": {
    "caste": "Raan",
    "fatherName": "Hamza Malik",
    "occupation": "Doctor",
    "residence": "I8"
  },
  "gender": "male",
  "name": "Umer",
  "password": "12345678",
  "registrationNumber": 3,
  "remarks": ""
}
```

#### Classes Collection

```json
{
  "classId": "123",
  "className": "xyz",
  "subjects": ["English",  "Math", "Science"],
  "syllabus": "https://example.com/syllabus/nursery.png",
  "timetable": "https://example.com/timetable/nursery.png"
}
```

#### FeeStatus Collection

```json
{
  "amountDue": 2500,
  "amountPaid": 500,
  "lateFees": false,
  "payableAmount": 2000,
  "paymentDate": "2024-05-27",
  "registrationNumber": 3,
  "remarks": "Late fee",
  "studentName": "Jhon doe"
}
```

#### Marks Collection
```json
{
  "classId": "class1",
  "marksObtained": "47",
  "registrationNumber": "3",
  "subjectName": "English",
  "term": "final"
}
```

#### ResultReports Collection

```json
{
  "data": {
    "classResults": [
      {
        "className": "8",
        "students": [
          {
            "marks": {
              "Math": {
                "Final Term": 90,
                "First Term": 85,
                "Mid Term": 88
              },
              "Science": {
                "Final Term": 85,
                "First Term": 78,
                "Mid Term": 82
              }
            },
            "name": "John Doe",
            "registrationNumber": 101
          }
        ]
      }
    ],
    "generatedAt": "timestapm",
    "reportId": "report2",
    "reportType": "Result Sheet"
  }
}
```

#### Teachers Collection

```json
{
  "assignedclass": "class1",
  "email": "teacher@gmail.com",
  "name": "name",
  "password": "hashedPassword",
  "teacherId": "T123"
}
```

#### Users Collection

```json
{
  "email": "teacher@gmail.com",
  "role": "teacher"
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


