<template>
  <div class="h-screen flex items-center justify-center">
    <div
      ref="editor"
      class="w-full h-full p-4 text-2xl bg-background text-primary outline-none"
      contenteditable="true"
      @input="updateText"
    ></div>
    <Palette v-if="palette" />
  </div>
</template>

<script setup>
let palette = false;
// TODO: Command palette
</script>

<style scoped></style>
