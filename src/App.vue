<script setup>
import { ref, computed, onMounted } from 'vue'

import AppHeader from './components/AppHeader.vue'
import StudentForm from './components/StudentForm.vue'
import StudentList from './components/StudentList.vue'
import AppFooter from './components/AppFooter.vue'
import studentsummary from './components/studentsummary.vue'

const students = ref([])
const searchTerm = ref('')
const editingId = ref(null)
const studentToEdit = ref(null)
const message = ref('')

onMounted(() => {
  const saved = localStorage.getItem('student-management-records')

  students.value = saved ? JSON.parse(saved) : []
})

function saveStudents() {
  localStorage.setItem(
    'student-management-records',
    JSON.stringify(students.value)
  )
}

function addStudent(newStudent) {
  students.value.push({
    id: Date.now(),
    ...newStudent
  })

  saveStudents()

  message.value = 'Student successfully added!'

  setTimeout(() => {
    message.value = ''
  }, 3000)
}

function startEdit(student) {
  editingId.value = student.id
  studentToEdit.value = { ...student }
}

function updateStudent(updatedStudent) {
  const index = students.value.findIndex(
    student => student.id === editingId.value
  )

  if (index !== -1) {
    students.value[index] = {
      id: editingId.value,
      ...updatedStudent
    }
  }

  saveStudents()

  editingId.value = null
  studentToEdit.value = null

  message.value = 'Student successfully updated!'

  setTimeout(() => {
    message.value = ''
  }, 3000)
}

function cancelEdit() {
  editingId.value = null
  studentToEdit.value = null
}

function saveStudent(student) {
  if (editingId.value !== null) {
    updateStudent(student)
  } else {
    addStudent(student)
  }
}

function deleteStudent(id) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this student?'
  )

  if (!confirmed) {
    return
  }

  students.value = students.value.filter(
    student => student.id !== id
  )

  saveStudents()

  message.value = 'Student successfully deleted!'

  setTimeout(() => {
    message.value = ''
  }, 3000)
}

const filteredStudents = computed(() => {
  const keyword = searchTerm.value.toLowerCase().trim()

  if (!keyword) {
    return students.value
  }

  return students.value.filter(student =>
    student.name.toLowerCase().includes(keyword) ||
    student.studentNumber.toLowerCase().includes(keyword)
  )
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">

    <AppHeader />

    <main class="max-w-6xl mx-auto px-4 py-8">

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800">
          Student Records
        </h2>

        <p class="text-gray-600 mt-2">
          Manage student information using a simple CRUD system.
        </p>
      </div>

      <studentsummary :students="students" />

      <div
        v-if="message"
        class="bg-green-100 border border-green-300 text-green-700 rounded-lg p-4 mb-6"
      >
        {{ message }}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div>
          <StudentForm
            :student-to-edit="studentToEdit"
            @save="saveStudent"
            @cancel="cancelEdit"
          />
        </div>

        <div class="lg:col-span-2">

          <div class="bg-white rounded-xl shadow-md p-6 mb-6">

            <label class="block text-sm font-medium text-gray-700 mb-2">
              Search Student
            </label>

            <input
              v-model="searchTerm"
              type="text"
              placeholder="Search by name or student number..."
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <StudentList
            :students="filteredStudents"
            @edit="startEdit"
            @delete="deleteStudent"
          />

        </div>

      </div>

    </main>

    <AppFooter />

  </div>
</template>