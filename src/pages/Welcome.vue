<template>
  <h1>Welcome to my site</h1>
  <button @click="move">Nav</button>
</template>

<script>
export default {
    methods: {
        move() {
            this.$router.push('/guardar-estudiante')
        }
    }

}
</script>

<style>

</style>