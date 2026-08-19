<script setup>
defineProps({
  students: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors duration-300">

    <div class="flex justify-between items-center mb-5">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">
        Student Records
      </h2>

      <span class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
        {{ students.length }} student(s)
      </span>
    </div>

    <div v-if="students.length === 0" class="text-center py-10 text-gray-500 dark:text-gray-400">
      No student records found.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse">

        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700 text-left">
            <th class="p-3 border-b dark:border-gray-600 dark:text-white">Student Number</th>
            <th class="p-3 border-b dark:border-gray-600 dark:text-white">Name</th>
            <th class="p-3 border-b dark:border-gray-600 dark:text-white">Program</th>
            <th class="p-3 border-b dark:border-gray-600 dark:text-white">Year Level</th>
            <th class="p-3 border-b dark:border-gray-600 dark:text-white text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="student in students"
            :key="student.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-600 transition-colors"
          >
            <td class="p-3 dark:text-gray-200">
              {{ student.studentNumber }}
            </td>

            <td class="p-3 dark:text-gray-200">
              {{ student.name }}
            </td>

            <td class="p-3 dark:text-gray-200">
              {{ student.program }}
            </td>

            <td class="p-3 dark:text-gray-200">
              {{ student.yearLevel }}
            </td>

            <td class="p-3">
              <div class="flex justify-center gap-2">

                <button
                  @click="emit('edit', student)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors"
                >
                  Edit
                </button>

                <button
                  @click="emit('delete', student.id)"
                  class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
                >
                  Delete
                </button>

              </div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </section>
</template>