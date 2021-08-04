<template>
  <h1 class="mb-5 mt-5">CRUD - Vuex</h1>
  <form @submit.prevent="procesarFormulario"> 
    <Input :tarea="tarea" tituloBtn="Registrar Tarea"/>
  </form>
  <hr>
  <ListaTareas/>
</template>

<script>
// @ is an alias to /src
import Input from '../components/Input.vue'
import ListaTareas from '../components/ListaTareas.vue'
import { mapActions } from 'vuex'

const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre:'',
        categorias: [],
        estado: '',
        numero: 0
      },
      disable: true
    }

  },
  methods: {
    ...mapActions(['setTarea', 'leerDatos']),
    procesarFormulario() {

      //Generar Id
      const id = shortid.generate();
      this.tarea.id = id;

      //Agregamos la tarea
      this.setTarea(this.tarea);

      //Limpiampos la tarea
      this.limpiarTarea();
      
    },
    limpiarTarea() {
      this.tarea = {
        id: '',
        nombre:'',
        categorias: [],
        estado: '',
        numero: 0
      };
    }
  },
  created() {
    
    this.leerDatos();
  }
  
}
</script>
