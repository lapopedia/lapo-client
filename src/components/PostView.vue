<template>
  <div class="waiting">
    <input placeholder="Title" type="text" v-model="title_val"/>
    <input placeholder="Content" type="text" v-model="content_val"/>
    <button v-on:click="postQuestion">Submit</button>
  </div>
</template>
<script>
import axios from '../Helper/axios.js'
export default {
  data () {
    return {
      title_val: '',
      content_val: ''
    }
  },
  methods: {
    postQuestion () {
      axios('POST', '/questions/ask/1', {content: this.content_val, title: this.title_val})
        .then(response => {
          if (response.data.message === 'Successfully create new questions') {
            alert('question posted')
            window.location.reload()
          } else {
            alert('something gone wrong')
          }
        })
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