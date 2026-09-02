# Module 8 – Manual Test Cases

## Student Management System

---

### TC-01 – Add a Valid Student

**Requirement/Feature:** Create Student Record

**Objective:** Verify that the system can successfully add a student with complete and valid information.

**Preconditions:**

* Student Management System is running.
* Add Student form is available.

**Test Data:**

* Student Name: Juan Dela Cruz
* Student Number: 2026-001
* Course: BSCS
* Section: 3A

**Test Steps:**

1. Open the Student Management System.
2. Open the Add Student form.
3. Enter valid student information.
4. Click the Add/Save button.
5. Check the student list.

**Expected Result:**
The student record is successfully saved and displayed in the student list.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-001-valid-add.png`

---

### TC-02 – Reject Missing Required Field

**Requirement/Feature:** Input Validation

**Objective:** Verify that the system prevents a student record from being saved when a required field is empty.

**Preconditions:**

* Student Management System is running.
* Add Student form is available.

**Test Data:**

* Student Name: Leave empty
* Student Number: 60682024
* Course: BSHM
* Year: 4th Year

**Test Steps:**

1. Open the Add Student form.
2. Leave the Student Name field empty.
3. Enter the other required information.
4. Click Add/Save.
5. Observe the result.

**Expected Result:**
The record is not saved and a validation message is displayed.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-002-empty-fields.png`

---

### TC-03 – Reject Invalid or Boundary Value

**Requirement/Feature:** Input Validation

**Objective:** Verify that the system handles invalid or boundary input correctly.

**Preconditions:**

* Student Management System is running.
* Add Student form is available.

**Test Data:**

* Enter an invalid value in a required student field according to the system's validation rules.

**Test Steps:**

1. Open the Add Student form.
2. Enter the invalid or boundary value.
3. Complete the other required fields.
4. Click Add/Save.
5. Observe the system response.

**Expected Result:**
The system rejects the invalid input or displays appropriate validation feedback.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-003-invalid-data.png`

---

### TC-04 – Display Multiple Student Records

**Requirement/Feature:** View Student Records

**Objective:** Verify that the system can display multiple student records correctly.

**Preconditions:**

* Student Management System is running.

**Test Data:**

* Student 1: Angel Bert Angeles
* Student 2: Princess   
* Student 3: Rochelle
* Student 3: hfehesfjsd
* Student 3: fsjfsjdf


**Test Steps:**

1. Add the first valid student.
2. Add the second valid student.
3. Add the third valid student.
4. View the student list.

**Expected Result:**
All successfully added student records are displayed correctly.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-004-multiple-records.png`

---

### TC-05 – Edit an Existing Student

**Requirement/Feature:** Update Student Record

**Objective:** Verify that an existing student record can be edited and saved.

**Preconditions:**

* At least one student record exists.

**Test Data:**

* Select an existing student.
* Change one or more student information fields.

**Test Steps:**

1. Open the Student Management System.
2. Select an existing student.
3. Click Edit.
4. Change the student's information.
5. Click Save/Update.
6. Check the student list.

**Expected Result:**
The updated information replaces the previous information and is displayed correctly.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-005-edit-records.png`

---

### TC-06 – Cancel Student Deletion

**Requirement/Feature:** Delete Confirmation

**Objective:** Verify that canceling the delete operation keeps the student record.

**Preconditions:**

* At least one student record exists.

**Test Steps:**

1. Select an existing student.
2. Click Delete.
3. When the confirmation appears, click Cancel.
4. Check the student list.

**Expected Result:**
The student record remains in the system and is not deleted.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-006-cancel-record.png`

---

### TC-07 – Confirm Student Deletion

**Requirement/Feature:** Delete Student Record

**Objective:** Verify that a student record is removed after confirming deletion.

**Preconditions:**

* At least one student record exists.

**Test Steps:**

1. Select an existing student.
2. Click Delete.
3. When the confirmation appears, click Confirm/Delete.
4. Check the student list.

**Expected Result:**
The selected student record is removed from the student list.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-007-confirm-delete.png`

---

### TC-08 – Search for an Existing Student

**Requirement/Feature:** Search Student Records

**Objective:** Verify that the search function can find an existing student record.

**Preconditions:**

* At least one student record exists.

**Test Data:**

* Search keyword: `Juan`

**Test Steps:**

1. Open the Student Management System.
2. Locate the Search field.
3. Enter the name or other valid search information of an existing student.
4. Observe the displayed records.

**Expected Result:**
The matching student record is displayed.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-008-search-existing.png`

---

### TC-09 – Search for a Missing Student

**Requirement/Feature:** Search Student Records

**Objective:** Verify that the system properly handles a search that has no matching record.

**Preconditions:**

* Student Management System is running.

**Test Data:**

* Search keyword: `Mendoza`

**Test Steps:**

1. Open the Student Management System.
2. Locate the Search field.
3. Enter a keyword that does not exist.
4. Observe the results.

**Expected Result:**
No matching student records are displayed and an appropriate no-results state or message appears.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-009-search-missing.png`

---

### TC-10 – Verify Student Record Persistence After Refresh

**Requirement/Feature:** Data Persistence

**Objective:** Verify that a saved student record remains available after refreshing the browser.

**Preconditions:**

* Student Management System is running.
* A student record has been successfully saved.

**Test Data:**

* Student Name: Angel Bert Angeles
* Student Number: 60672024

**Test Steps:**

1. Add a valid student record.
2. Verify that the record appears in the student list.
3. Refresh the browser.
4. Check the student list again.

**Expected Result:**
The previously saved student record remains available after the browser is refreshed.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-0010-local-storage.png`

---

## TC-11 – Responsive Interface (Recommended)

**Requirement/Feature:** Responsive Interface

**Objective:** Verify that the Student Management System remains readable and usable on a narrow screen.

**Preconditions:**

* Student Management System is running.

**Test Steps:**

1. Open the system in the browser.
2. Resize the browser window to a narrow width.
3. Check the student form and student list.
4. Try to use the available controls.

**Expected Result:**
The content remains readable and the main controls remain usable without inappropriate layout problems.

**Actual Result:** ______________________________

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-0011-responsive-layout.png`

### TC-12 – Verify Record Count Feedback

**Requirement/Feature:** Record Count Feedback

**Objective:** Verify that the system displays the correct number of student records after adding or deleting records.

**Preconditions:**

* Student Management System is running.
* Student records can be added and deleted.
* The student list displays record-count information.

**Test Data:**

* Student 1: Angel Bert Angeles
* Student 2: Rochelle 
* Student 3: Princess

**Test Steps:**

1. Open the Student Management System.
2. Check the current number of student records displayed.
3. Add a valid student record.
4. Check the record count after adding the student.
5. Delete one student record.
6. Check the record count again.

**Expected Result:**

The system displays accurate record-count feedback. The count increases when a student is successfully added and decreases when a student is successfully deleted.

**Actual Result:**

---

**Status:** PASS / FAIL / BLOCKED / NOT RUN

**Evidence Filename:** `TC-0012-record-count-feedback.png`

---
