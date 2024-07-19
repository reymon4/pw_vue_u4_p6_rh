<template>
<insertar-estudiante/>
<eliminar-estudiante/>
</template>

<script>
import InsertarEstudiante from './pages/InsertarEstudiante.vue'
import EliminarEstudiante from './pages/EliminarEstudiante.vue'
export default {
  name: 'App',
  components: {
    InsertarEstudiante,
    EliminarEstudiante
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
