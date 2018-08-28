<template>
  <div class="login-container">
    <div class="login-content">
      <input class="input" placeholder="Email" type="email" v-model="email_val"/> 
      <input class="input" placeholder="Password" type="password" v-model="password_val"/> 
    </div>
    <button type="success" @click="login()">Login</button>
  </div>
</template>

<script>
import axios from '../../../Helper/axios.js'
export default {
  data () {
    return {
      email_val: '',
      password_val: '',
      statusError: ''
    }
  },
  methods: {
    login () {
      if (this.email_val === '' || this.password_val === '') {
        this.showError('Username and Password can not empty !')
      } else {
        axios('POST', '/login', {email: this.email_val, password: this.password_val})
          .then(response => {
            if (response.data === 'success') {
              window.localStorage.setItem('token', response.data.token)
              window.location.reload()
            } else {
              this.showError(response.message)
            }
          })
      }
    }

    // showError (message) {
    //   this.statusError
    // }
  }
}
</script>

<style>
.login-content{
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
}
.input{
  padding: 2%;
  margin-bottom: 2%;
}
</style>
