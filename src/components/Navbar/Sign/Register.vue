<template>
  <div class="login-container">
    <div class="login-content">
      <input class="input" placeholder="Email" type="email" v-model="newUser.email_val"/> 
      <input class="input" placeholder="Password" type="password" v-model="newUser.password_val"/> 
      <input class="input" placeholder="Confirm Password" type="password" v-model="newUser.confirm_password_val"/> 
      <label>{{this.statusError}}</label>
    </div>
    <button type="success" @click="register()">Register</button>
  </div>
</template>

<script>
import axios from '../../../Helper/axios.js'
export default {
  data () {
    return {
      newUser: {
        email_val: '',
        password_val: '',
        confirm_password_val: ''
      },
      statusError: ''
    }
  },
  methods: {
    register () {
      if (this.newUser.email_val === '' || this.newUser.password_val === '') {
        this.statusError = 'Username and Password can not empty !'
      } else if (this.newUser.password_val !== this.newUser.confirm_password_val) {
        this.statusError = 'Your Password Not Match'
      } else {
        axios('POST', '/register', {payload: this.newUser})
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
