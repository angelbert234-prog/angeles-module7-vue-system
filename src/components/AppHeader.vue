<script setup>
defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-theme'])
</script>

<template>
  <header :class="isDarkMode ? 'bg-gray-800' : 'bg-blue-700'" class="text-white shadow-md transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold">
          Student Management System
        </h1>

        <p :class="isDarkMode ? 'text-gray-300' : 'text-blue-100'" class="mt-1">
          Software Engineering 1 - Module 7
        </p>
      </div>

      <button
        @click="emit('toggle-theme')"
        :class="isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-600 hover:bg-gray-700'"
        class="ml-4 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
      >
        <span v-if="isDarkMode" text-lg>☀️</span>
        <span v-else text-lg>🌙</span>
        {{ isDarkMode ? 'Light' : 'Dark' }}
      </button>
    </div>
  </header>
</template>