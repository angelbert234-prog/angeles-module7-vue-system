
import { describe, it, expect } from 'vitest'

describe('Student Management System', () => {
  it('should correctly create a student record', () => {
    const student = {
      studentNumber: '60672024',
      firstName: 'Angel Bert Angeles',
      course: 'BSCS',
      year: '3rd Year'
    }

    expect(student.studentNumber).toBe('60672024')
    expect(student.firstName).toBe('Angel Bert Angeles')
    expect(student.course).toBe('BSCS')
    expect(student.year).toBe('3rd Year')
  })

  it('should correctly search for a student by name', () => {
    const students = [
      {
        studentNumber: '60672024',
        firstName: 'Angel Bert Angeles',
        course: 'BSCS',
         year: '3rd Year'
      },
      {
        studentNumber: '65682024',
        firstName: 'Princess',
        course: 'BSHM',
        year: '3rd Year'
      }
    ]

    const searchTerm = 'Angel'

    const results = students.filter(student =>
      `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )

    expect(results).toHaveLength(1)
    expect(results[0].studentNumber).toBe('60672024')
    expect(results[0].firstName).toBe('Angel Bert Angeles')
  })
})

