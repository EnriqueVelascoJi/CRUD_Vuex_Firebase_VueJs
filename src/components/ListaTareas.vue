<template>
  <table class="table table-hover text-center">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Herramienta</th>
            <th scope="col">Estado</th>
            <th scope="col">Número</th>
            <th scope="col">Acción</th>
        </tr>
    </thead>
  <tbody>
    <tr v-for="tarea in tareas" :key="tarea.id">
      <th scope="row">{{ tarea.id }}</th>
      <td>{{ tarea.nombre }}</td>
      <td>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(categoria, index) in tarea.categorias" :key="index">{{categoria}}</li>
          </ul>
      </td>
      <td>{{ tarea.estado }}</td>
      <td>{{ tarea.numero }}</td>
      <td>
          <div class="row justify-content-center">
              <div class="col-md-3">
                  
                    <router-link 
                    class="btn btn-warning"
                    :to="{
                      name: 'Editar',
                      params: {
                        id: tarea.id
                      }
                    }">
                    Editar
                    </router-link>
                  
              </div>
              <div class="col-md-3">
                  <button class="btn btn-danger" @click="deleteTarea(tarea.id)">Eliminar</button>
              </div>
          </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTarea'])
    }

}
</script>

<style>

</style>