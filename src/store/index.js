import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre:'',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload);
    },
    cargar(state, payload) {
      state.tareas = payload;
    },
    delete(state, id) {

      const newTareas = state.tareas.filter(tarea => tarea.id !== id);
      state.tareas = newTareas;

    },
    view(state, id) {

      if(!state.tareas.find( tarea => tarea.id === id)) {
        router.push('/');
        return 
      }
      const viewTarea = state.tareas.find( tarea => tarea.id === id);
      state.tarea = viewTarea;

    }
    
  },
  actions: {
    async setTarea({commit}, tarea) {

      // Se agrega el tarea.id en el URL por que usamos el metodo PUT y este por defecto no genera un id si usamos el POST si lo generá pero tendríamos información redundante.

      const URL = `https://api-rest-firebase-438aa-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`;

      try {
        
        const res = await fetch(URL, {
          method: 'PUT',
          body: JSON.stringify(tarea),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const dataDB = await res.json();
        commit('set', dataDB);

      } catch (error) {
        console.log(error);
      }

      
    },
    async deleteTarea({commit}, id) {

      const URL = `https://api-rest-firebase-438aa-default-rtdb.firebaseio.com/tareas/${id}.json`;

      try {

        await fetch(URL, {
          method: 'DELETE'
        });
        commit('delete', id);
        
      } catch (error) {

        console.log(error);

      }
      
    },
    viewTarea({commit}, id) {
      commit('view', id)
    },
    async updateTarea({commit}, tarea) {

      const URL = `https://api-rest-firebase-438aa-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`;

      try {
        
        const res = await fetch(URL, {
          method: 'PATCH',
          body: JSON.stringify(tarea),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const dataDB = await res.json();
        // console.log(dataDB);

      } catch (error) {

        console.log(error);

      }

      router.push('/');
    },
    async leerDatos({commit}) {
      
      const URL = "https://api-rest-firebase-438aa-default-rtdb.firebaseio.com/tareas.json";

      try {
        
        const res = await fetch(URL);
        const dataDB = await res.json();

        let newTareas = [];
        for (const id in dataDB) {

          newTareas = [...newTareas, dataDB[id]];
          
        }
        commit('cargar', newTareas);

      } catch (error) {

        console.log(error);
      }
    }
  },
  modules: {
  }
})
