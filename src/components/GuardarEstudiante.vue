<template>
   <div class="container">
   
      <header>Ingresar datos</header>
       <div class="form">
      <div class="form-group">
        <label for="cedula">Cédula</label>
        <input v-model="cedula" type="text" id="cedula" />
      </div>
      <div class="form-group">
        <label  for="nombre">Nombre</label>
        <input  v-model="nombre"  type="text" id="nombre" />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" v-model="apellido"/>
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento</label>
        <input v-model="fechaNacimiento" type="datetime-local" id="fechaNacimiento" />
      </div>
      <div class="form-group">
        <label for="genero">Género</label>
        <input type="text" v-model="genero" id="genero" />
      </div>
      <div class="form-buttons">
        <button @click="crear">Guardar</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import {guardarFachada} from '../helpers/clienteEstudiante';
export default {
  data() {
    return {
      nombre: null,
      cedula: null,
      genero: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async crear() {
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
        cedula: this.cedula,
      };
      console.log(bodyEstudiante);
      const data = await guardarFachada(bodyEstudiante);
      console.log(data);
    },
  },
};
</script>
  <style>

</style>