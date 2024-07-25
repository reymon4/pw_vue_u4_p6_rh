import { createRouter, createWebHashHistory } from "vue-router";

import ActualizarEstudiante from "../components/ActualizarEstudiante.vue";
import GuardarEstudiante from "../components/GuardarEstudiante.vue";
import EliminarEstudiante from "../components/EliminarEstudiante.vue";
import Welcome from "../pages/Welcome.vue";
const routes = [
  {
    path: "/actualizar-estudiante",
   component: ActualizarEstudiante,
  },
  {
    path: "/guardar-estudiante",
   component: GuardarEstudiante,
  },
  {
    path: "/eliminar-estudiante",
   component: EliminarEstudiante,
  },
    {
        path: "/",
       component: Welcome,
    },
];

const router = createRouter({
  history: createWebHashHistory(),
    routes,
});
export default router;
