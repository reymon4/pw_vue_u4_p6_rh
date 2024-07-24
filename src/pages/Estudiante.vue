<template>
  
  <h1>Estudiante</h1>
  <div class="container">
  <GuardarEstudianteVue></GuardarEstudianteVue>
  <ActualizarEstudianteVue></ActualizarEstudianteVue>
  <EliminarEstudianteVue></EliminarEstudianteVue>
  </div>


</template>

<script>
import ActualizarEstudianteVue from '@/components/ActualizarEstudiante.vue'
import EliminarEstudianteVue from '@/components/EliminarEstudiante.vue'
import GuardarEstudianteVue from '@/components/GuardarEstudiante.vue'
export default {
    components: {
    ActualizarEstudianteVue,
    EliminarEstudianteVue,
    GuardarEstudianteVue
    }
  }
   
</script>

<style>
.container {
  display: flex;
  justify-content: center;
 flex-direction: row;

}
</style>