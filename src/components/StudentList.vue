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
  <section class="bg-white rounded-xl shadow-md p-6">

    <div class="flex justify-between items-center mb-5">
      <h2 class="text-xl font-bold text-gray-800">
        Student Records
      </h2>

      <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        {{ students.length }} student(s)
      </span>
    </div>

    <div v-if="students.length === 0" class="text-center py-10 text-gray-500">
      No student records found.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse">

        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-3 border-b">Student Number</th>
            <th class="p-3 border-b">Name</th>
            <th class="p-3 border-b">Program</th>
            <th class="p-3 border-b">Year Level</th>
            <th class="p-3 border-b text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="student in students"
            :key="student.id"
            class="hover:bg-gray-50"
          >
            <td class="p-3 border-b">
              {{ student.studentNumber }}
            </td>

            <td class="p-3 border-b">
              {{ student.name }}
            </td>

            <td class="p-3 border-b">
              {{ student.program }}
            </td>

            <td class="p-3 border-b">
              {{ student.yearLevel }}
            </td>

            <td class="p-3 border-b">
              <div class="flex justify-center gap-2">

                <button
                  @click="emit('edit', student)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  @click="emit('delete', student)"
                  class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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
