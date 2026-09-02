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
const studentPendingDeletion = ref(null)
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

function deleteStudent(student) {
  studentPendingDeletion.value = student
}

function cancelDelete() {
  studentPendingDeletion.value = null
}

function confirmDelete() {
  if (!studentPendingDeletion.value) return

  const { id } = studentPendingDeletion.value

  students.value = students.value.filter(
    student => student.id !== id
  )

  saveStudents()
  studentPendingDeletion.value = null

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

    <div
      v-if="studentPendingDeletion"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      @click.self="cancelDelete"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        class="w-full max-w-md rounded-2xl border border-rose-500/60 bg-slate-950 p-6 text-white shadow-2xl shadow-rose-950/60"
      >
        <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-600/20 text-2xl text-rose-400 ring-4 ring-rose-600/10">
          &#9888;
        </div>

        <h2 id="delete-dialog-title" class="text-center text-xl font-bold">
          Delete Student Record
        </h2>
        <p class="mt-2 text-center text-sm leading-6 text-slate-300">
          Are you sure you want to remove this student record? This action is permanent and cannot be undone.
        </p>

        <div class="mt-5 rounded-xl border border-slate-700 bg-black/30 p-4">
          <p class="font-semibold">{{ studentPendingDeletion.name }}</p>
          <p class="mt-1 text-sm text-slate-400">
            Student Number: {{ studentPendingDeletion.studentNumber }}
          </p>
          <div class="mt-3 flex flex-wrap gap-2 text-xs font-medium">
            <span class="rounded bg-slate-700 px-2 py-1">{{ studentPendingDeletion.program }}</span>
            <span class="rounded bg-slate-700 px-2 py-1">{{ studentPendingDeletion.yearLevel }}</span>
          </div>
        </div>

        <div class="mt-5 flex justify-end gap-3">
          <button
            type="button"
            @click="cancelDelete"
            class="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            type="button"
            @click="confirmDelete"
            class="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            Delete Record
          </button>
        </div>
      </section>
    </div>

  </div>
</template>
