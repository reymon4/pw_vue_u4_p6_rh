<template>
  <div class="container">
    
      <header>Actualizar datos</header>
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
        <button @click="consultar">Guardar</button>
        <button @click="actualizar">Actualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from '../helpers/clienteEstudiante';
export default {
  data() {
    return {
      cedula: null,
      genero: null,
      apellido: null,
      fechaNacimiento: null,
      nombre: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);

      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
      console.log(data.nombre);
      console.log(data.apellido);
      this.genero = data.genero;
      this.apellido = data.apellido;
      this.nombre = data.nombre;
      this.fechaNacimiento = data.fechaNacimiento;
    },

    //1998-08-31T00:00:00
    async actualizar() {

      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento:this.fechaNacimiento,
        genero: this.genero,
        cedula: this.cedula,
      };
      //necesita dos argumentos cedula y el objeto estudiante
      const data = await actualizarFachada(this.cedula, bodyEstudiante);
      console.log(data);
    },
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  width: 100px;
  padding: 10px 20px;
  background-color: #6bb7ee;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 8%;
  text-align: left;
}
.form-buttons {
  display: flex;
  justify-content: space-around;
}
</style>