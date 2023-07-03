<template>
    <div>
        <Head>
            <Title>Error {{ error.statusCode }}</Title>
            <Meta name="description" :content="error.message" />
        </Head>

        <!-- ... -->
    </div>
</template>

<script setup>
    defineProps(["error"]);
    // https://nuxt.com/docs/api/utils/clear-error
</script>

<style lang="scss" scoped>

</style>