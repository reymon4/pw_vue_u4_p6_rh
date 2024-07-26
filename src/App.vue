<template>

<NavBarVue></NavBarVue>
<router-view></router-view>
</template>

<script>
import NavBarVue from './components/NavBar.vue'
import Welcome from './pages/Welcome.vue'


export default {
  name: 'App',
  components: {
    Welcome,
    NavBarVue
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

}
</style>
