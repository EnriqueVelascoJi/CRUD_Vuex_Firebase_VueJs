<template>
  <h1 class="mb-5 mt-5">Editar Tarea {{tarea.id}}</h1>
  <form @submit.prevent="updateTarea(tarea)"> 
    <Input :tarea="tarea" tituloBtn="Editar Tarea"/>
  </form>
</template>

<script>
import Input from '../components/Input.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['viewTarea', 'updateTarea'])
    },
    created() {
        const id = this.$route.params.id;
        this.viewTarea(id);
    }

}
</script>

<style>

</style>