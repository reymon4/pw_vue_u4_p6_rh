<template>
    <div class="container">
      <div class="formulario">
        <header>Borrar</header>
        <section>
          <form class="form">
            <p type="Cédula">
              <input type="text" v-model="cedula" />
            </p>
            <div class="botonEliminar">
              <button @click="eliminar">Borrar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import{eliminarFachada} from '../helpers/clienteEstudiante';
  export default{
    data(){
      return{
        cedula:null
      }
    },
    methods:{
      async eliminar(){
        const data=await eliminarFachada(this.cedula);
        console.log(data);
      }
    }
  }
  </script>
  <style>
   
  </style>