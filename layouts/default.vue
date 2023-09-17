<template>
  <div>
    <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
    <NuxtLoadingIndicator />
  </div>

  <div class="min-h-full">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
// https://nuxt.com/docs/getting-started/transitions
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
