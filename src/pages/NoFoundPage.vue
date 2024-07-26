<template>
    <div class="container">
        <h1>404</h1>
        <h2>Page not found :p</h2>
       
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXp5d3kxYXBkeGJoc2VrYTNzcGs5bDJjdm9pcmwzaDI3N3RzbTc1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pM4wEZkik8Kr85CHlH/giphy.webp" alt="Cannot load image!">
    <button @click="move">Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        move() {
            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
button{
    margin:2% 0%;
}
</style>