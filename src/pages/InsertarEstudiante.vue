<template>
  <div class="container">
    <h2>Datos del Estudiante</h2>
    <form>
      <div class="form-group">
        <label for="cedula">Cédula</label>
        <input type="text" id="cedula" />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" />
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento</label>
        <input type="date" id="fechaNacimiento" />
      </div>
      <div class="form-group">
        <label for="genero">Género</label>
        <input type="text" id="genero" />
      </div>
      <div class="form-buttons">
        <button type="submit">Guardar</button>
        <button type="submit">Actualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
