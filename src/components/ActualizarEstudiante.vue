<template>
  <div class="container">
    <div class="formulario">
      <header>Datos Estudiante</header>
      <section>
        <div class="form">
          <p type="Nombre">
            <input v-model="nombre" type="text" />
          </p>
          <p type="Apellido">
            <input v-model="apellido" type="text" />
          </p>
          <p type="Cédula">
            <input v-model="cedula" type="text" />
          </p>
          <p type="Género">
            <input v-model="genero" type="text" />
          </p>
          <p type="Fecha de Nacimiento">
            <input v-model="fecha" type="datetime-local" />
          </p>
          <div class="botonBuscar">
            <button @click="consultar">Buscar</button>
          </div>
          <div class="botonActualizar">
            <button @click="actualizar">Actualizar</button>
          </div>
        </div>
      </section>
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
      fecha: null,
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
      this.fecha = data.fecha;
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

button {
  width: 100px;
  padding: 10px 20px;
  background-color: #8b42d8;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  border: none;
}
.botonBuscar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 25px;
  padding: 12px;
}
</style>