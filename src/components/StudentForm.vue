<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  studentToEdit: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel'])

const studentNumber = ref('')
const name = ref('')
const program = ref('')
const yearLevel = ref('')

const errorMessage = ref('')

watch(
  () => props.studentToEdit,
  (student) => {
    if (student) {
      studentNumber.value = student.studentNumber
      name.value = student.name
      program.value = student.program
      yearLevel.value = student.yearLevel
    } else {
      clearForm()
    }
  },
  { immediate: true }
)

function submitForm() {
  errorMessage.value = ''

  if (
    !studentNumber.value.trim() ||
    !name.value.trim() ||
    !program.value.trim() ||
    !yearLevel.value.trim()
  ) {
    errorMessage.value = 'Please complete all required fields.'
    return
  }

  if (!/^\d{8}$/.test(studentNumber.value.trim())) {
    errorMessage.value = 'Student number must contain exactly 8 digits.'
    return
  }

  emit('save', {
    studentNumber: studentNumber.value.trim(),
    name: name.value.trim(),
    program: program.value.trim(),
    yearLevel: yearLevel.value.trim()
  })

  clearForm()
}

function clearForm() {
  studentNumber.value = ''
  name.value = ''
  program.value = ''
  yearLevel.value = ''
  errorMessage.value = ''
}
</script>

<template>
  <section class="bg-white rounded-xl shadow-md p-6">
    <h2 class="text-xl font-bold text-gray-800 mb-5">
      {{ studentToEdit ? 'Edit Student' : 'Add Student' }}
    </h2>

    <div
      v-if="errorMessage"
      class="bg-red-100 text-red-700 border border-red-300 rounded-lg p-3 mb-4"
    >
      {{ errorMessage }}
    </div>

    <form @submit.prevent="submitForm" class="space-y-4">

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Student Number
        </label>

        <input
          v-model="studentNumber"
          type="text"
          placeholder="Enter student number"
          inputmode="numeric"
          pattern="[0-9]{8}"
          maxlength="8"
          title="Student number must contain exactly 8 digits"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Student Name
        </label>

        <input
          v-model="name"
          type="text"
          placeholder="Enter student name"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Program
        </label>

        <input
          v-model="program"
          type="text"
          placeholder="Example: BSCS"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Year Level
        </label>

        <select
          v-model="yearLevel"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select year level</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
      </div>

      <div class="flex gap-3">
        <button
          type="submit"
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          {{ studentToEdit ? 'Update Student' : 'Add Student' }}
        </button>

        <button
          v-if="studentToEdit"
          type="button"
          @click="emit('cancel')"
          class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
      </div>

    </form>
  </section>
</template>
