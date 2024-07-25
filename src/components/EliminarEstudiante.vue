<template>
 <div class="container">
        <header>Eliminar Estudiante</header>
         <div class="form">
        <div class="form-group">
            <label for="cedula">Cédula</label>
            <input type="text" id="cedula" />
        </div>
        <div class="form-buttons">
            <button @click="eliminar">Eliminar</button>
        </div>
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