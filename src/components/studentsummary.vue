<script setup>
import { computed } from 'vue'

const props = defineProps({
  students: {
    type: Array,
    default: () => []
  }
})

const yearCounts = computed(() => {
  const counts = {
    firstYear: 0,
    secondYear: 0,
    thirdYear: 0,
    fourthYear: 0
  }

  props.students.forEach(student => {
    if (student.yearLevel === '1st Year') {
      counts.firstYear++
    } else if (student.yearLevel === '2nd Year') {
      counts.secondYear++
    } else if (student.yearLevel === '3rd Year') {
      counts.thirdYear++
    } else if (student.yearLevel === '4th Year') {
      counts.fourthYear++
    }
  })

  return counts
})

const totalStudents = computed(() => {
  return yearCounts.value.firstYear + yearCounts.value.secondYear + yearCounts.value.thirdYear + yearCounts.value.fourthYear
})
</script>

<template>
  <section class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 mb-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Student Summary by Year Level</h2>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
        <p class="text-gray-600 text-sm font-semibold">1st Year</p>
        <p class="text-3xl font-bold text-blue-600">{{ yearCounts.firstYear }}</p>
      </div>

      <div class="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
        <p class="text-gray-600 text-sm font-semibold">2nd Year</p>
        <p class="text-3xl font-bold text-green-600">{{ yearCounts.secondYear }}</p>
      </div>

      <div class="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
        <p class="text-gray-600 text-sm font-semibold">3rd Year</p>
        <p class="text-3xl font-bold text-yellow-600">{{ yearCounts.thirdYear }}</p>
      </div>

      <div class="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
        <p class="text-gray-600 text-sm font-semibold">4th Year</p>
        <p class="text-3xl font-bold text-purple-600">{{ yearCounts.fourthYear }}</p>
      </div>
    </div>

    <div class="bg-indigo-100 rounded-lg p-4 border-l-4 border-indigo-600">
      <p class="text-gray-700 font-semibold">Total Students</p>
      <p class="text-4xl font-bold text-indigo-700">{{ totalStudents }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 20px 0;
}
</style>
