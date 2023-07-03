<template>
    <div class="text-center">
        <Head>
            <Title>Error {{ error.statusCode }}</Title>
            <Meta name="description" :content="error.message" />
        </Head>

        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-xl">{{ error.message }}</p>
        <button @click="handleClearError" class="mt-7 underline">Go back</button>
    </div>
</template>

<script setup>
    defineProps(["error"]);

    const handleClearError = () => clearError({ redirect: "/"});
</script>

<style lang="scss" scoped>

</style>