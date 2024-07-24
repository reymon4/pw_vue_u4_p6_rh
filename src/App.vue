<template>
<estudiante-vue></estudiante-vue>
</template>

<script>
import EstudianteVue from './pages/Estudiante.vue'

export default {
  name: 'App',
  components: {
    EstudianteVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
