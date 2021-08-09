<template>
  <input
      type="text"
      class="form-control my-2"
      placeholder="Ingrese el nombre"
      v-model.trim="tarea.nombre"
    >
    <div class="form-check form-check-inline">
      <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox1"
      v-model="tarea.categorias"
      value="JavaScript">
      <label class="form-check-label" for="inlineCheckbox1">JavaScript</label>
    </div>

    <div class="form-check form-check-inline">
      <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox2"
      v-model="tarea.categorias"
      value="NodeJs">
      <label class="form-check-label" for="inlineCheckbox2">NodeJs</label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="urgente"
        v-model="tarea.estado"
        >
        <label class="form-check-label" for="inlineRadio1">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="relax"
        v-model="tarea.estado"
        >
        <label class="form-check-label" for="inlineRadio1">Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input
      type="number"
      class="form-check"
      v-model.number="tarea.numero">
    </div>

    <button type="submit" class="btn btn-success btn-block mt-5" :disabled="habilitarBtn">{{tituloBtn}}</button>
</template>

<script>
export default {
    name: 'Input',
    props: {
        tarea: Object,
        tituloBtn: String
    },
    computed: {
        habilitarBtn() {
        const { nombre, categorias, estado, numero } = this.tarea;
        return !nombre || !categorias.length || !estado || !numero
    }
  }
}
</script>
