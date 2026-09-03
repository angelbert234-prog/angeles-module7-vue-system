# Module 8 – Defect Report

## Defect ID: DEF-001

**Defect Title:** Record Count Does Not Update After Deleting a Student

**Related Test Case:** TC-12 – Verify Record Count Feedback

**Environment:**

* Operating System: Windows 10/11
* Browser: Microsoft Edge
* Application: Student Management System
* Application URL: Localhost
* Test Type: Manual Testing

**Severity:** Medium

**Priority:** Medium

### Steps to Reproduce

1. Open the Student Management System.
2. Add two or more student records.
3. Check the displayed student record count.
4. Delete one student record.
5. Check the record count again.

### Expected Result

The record count should automatically update after a student is deleted. For example, if there are 3 records before deletion, the count should change to 2 after deletion.

### Actual Result

The student record is deleted successfully, but the displayed record count does not update correctly.

### Evidence

**Screenshot Filename:** `TC-006-cancel-record.png`
**Screenshot Filename:** `TC-007-confirm-delete.png`


The screenshot should show the student list and the incorrect record count after the deletion.

### Status

**Open**

### Notes

The defect affects the accuracy of feedback shown to the user because the displayed record count does not match the actual number of student records.
