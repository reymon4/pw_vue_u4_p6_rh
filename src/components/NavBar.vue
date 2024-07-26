<template>
  <div class="navbar">
    <!--El href se usa en paginas web tradicionales, por lo tanto lo cambiaremos para que sea un SPA  -->

    
    <!--<a href="">Ingresar nuevo estudiante</a>  -->
    <router-link to="/">Home</router-link>
    <router-link to="/guardar-estudiante">Ingresar nuevo estudiante</router-link>
    <router-link to="/actualizar-estudiante">Actualizar estudiante</router-link>
    <router-link to="/eliminar-estudiante">Eliminar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
 
  padding: 10px;
}
.navbar img {
  width: 1rem;
  height: 1rem;
}
.navbar a {
  color: white;
  text-decoration: none;
   background-color:  #6bb7ee;
   border-radius: 4rem;
    padding: 1.5vh;
}
</style>