# Module 8 – Software Testing

## Test Plan – Student Management System

### 1. Test Plan Overview

**System:** Student Management System
**Module:** Module 8 – Software Testing
**Testing Type:** Manual and Automated Testing
**Application:** Vue.js Student Management System

---

### 2. Objectives

The main objective of testing is to verify and validate that the Student Management System works according to its requirements and intended functions.

The testing will specifically verify that the system can:

* Add student records.
* View and display student records.
* Edit existing student records.
* Delete student records.
* Search for student records.
* Validate required and invalid input.
* Maintain student records after refreshing the browser.
* Display the interface properly on different screen sizes.
* Provide appropriate feedback to the user.

---

### 3. Scope

The testing will cover the main functions of the Student Management System developed in Module 7.

The scope includes:

* Student record creation.
* Student record viewing.
* Student record updating.
* Student record deletion.
* Student record searching.
* Input validation.
* Delete confirmation and cancellation.
* Record persistence after browser refresh.
* Record count or feedback messages.
* Responsive interface behavior.
* Automated testing using Vitest.

---

### 4. Items to Test

The following features will be tested:

| Item                 | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| Add Student          | Verify that valid student information can be added.                    |
| View Students        | Verify that student records are displayed correctly.                   |
| Edit Student         | Verify that existing student information can be updated.               |
| Delete Student       | Verify that a selected student can be deleted.                         |
| Delete Confirmation  | Verify that cancellation keeps the student record.                     |
| Search               | Verify that existing and missing student records can be searched.      |
| Validation           | Verify that invalid or incomplete information is rejected.             |
| Persistence          | Verify that saved records remain after refreshing the browser.         |
| Responsive Interface | Verify that the system remains readable and usable on a narrow screen. |
| Automated Tests      | Verify selected system logic using Vitest.                             |

---

### 5. Items Not Tested

The following items are outside the main testing scope of this activity:

* Production server deployment.
* Real-world school database integration.
* Large-scale performance testing.
* Advanced security penetration testing.
* Multiple-user concurrent access.
* External third-party system integration.

These items are not part of the main Module 8 testing activity for the Vue.js prototype.

---

### 6. Test Environment

The tests will be performed using the following environment:

**Operating System:** Windows
**Application:** Vue.js Student Management System
**Development Tool:** Visual Studio Code
**Runtime:** Node.js
**Package Manager:** npm
**Development Server:** Vite
**Browser:** Microsoft Edge / Google Chrome
**Automated Testing Tool:** Vitest
**Component Testing Tool:** Vue Test Utils
**Test Environment:** jsdom
**Version Control:** Git and GitHub

---

### 7. Responsibilities

| Responsibility             | Person/Role              |
| -------------------------- | ------------------------ |
| Test planning              | Student Developer/Tester |
| Manual test execution      | Student Tester           |
| Automated test development | Student Developer/Tester |
| Defect documentation       | Student Tester           |
| Defect correction          | Student Developer        |
| Retesting                  | Student Tester           |
| Regression testing         | Student Tester           |
| GitHub and CI verification | Student Developer/Tester |
| Documentation and evidence | Student Developer/Tester |

---

### 8. Risks

| Risk                       | Possible Impact                                                 | Mitigation                                              |
| -------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| Validation defects         | Invalid student information may be saved.                       | Perform invalid and boundary-value testing.             |
| CRUD errors                | Student records may not be added, edited, or deleted correctly. | Execute CRUD test cases.                                |
| Data persistence problems  | Records may disappear after refresh.                            | Test record persistence using browser refresh.          |
| Search problems            | Correct records may not be displayed.                           | Test both existing and missing search values.           |
| Responsive layout problems | Interface may become difficult to use on smaller screens.       | Test the interface at a narrow browser width.           |
| Automated test failures    | Changes may introduce new defects.                              | Run Vitest and regression tests before pushing changes. |

---

### 9. Entry Criteria

Testing can begin when:

* The Module 7 Student Management System is available.
* The Vue.js project can run successfully.
* Required dependencies are installed.
* The main student management features are accessible.
* The test cases have been prepared.
* The testing environment is ready.

---

### 10. Exit Criteria

Testing can be considered complete when:

* At least 10 manual test cases have been executed.
* Expected and actual results are recorded.
* Each executed test has a Pass, Fail, or appropriate status.
* At least one defect has been documented.
* The identified defect has been corrected.
* The failed test has been retested.
* Related regression tests have been performed.
* At least two meaningful Vitest tests pass.
* `npm run test:run` succeeds.
* `npm run build` succeeds.
* GitHub Actions successfully runs the tests and build.

---

### 11. Deliverables

The following testing outputs will be prepared:

1. Test Plan
2. At least 10 Manual Test Cases
3. Test Execution Results
4. At least 1 Defect Report
5. Defect Correction Evidence
6. Retesting and Regression Results
7. At least 2 Automated Vitest Tests
8. Successful Test and Build Results
9. Updated GitHub Actions Workflow
10. Updated README.md
11. Required Screenshots
12. PDF Testing Report
13. Public GitHub Repository Link

---

### 12. Test Completion Summary

The testing activity will provide evidence that the Student Management System's major functions have been tested manually and automatically. Defects discovered during testing will be documented, corrected, retested, and followed by regression testing before the final submission.
