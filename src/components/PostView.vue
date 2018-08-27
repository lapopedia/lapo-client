<template>
  <div class="waiting">
    <input type="text" v-model="input_val"/>
    <button v-on:click="showAlert">Submit</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input_val: ''
    }
  },
  methods: {
    showAlert () {
      alert('tess')
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>