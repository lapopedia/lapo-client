<template>
  <div class="login-container">
    <div class="login-content">
      <input class="input" placeholder="Fullname" type="text" v-model="fullname_val"/> 
      <input class="input" placeholder="Username" type="email" v-model="username_val"/> 
      <input class="input" placeholder="Email" type="email" v-model="email_val"/> 
      <input class="input" placeholder="Password" type="password" v-model="password_val"/> 
      <input class="input" placeholder="Confirm Password" type="password" v-model="confirm_password_val"/> 
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
      fullname_val: '',
      username_val: '',
      email_val: '',
      password_val: '',
      confirm_password_val: '',
      statusError: ''
    }
  },
  methods: {
    register () {
      if (this.fullname_val === '' || this.username_val === '' || this.email_val === '' || this.password_val === '' || this.confirm_password_val === '') {
        this.statusError = 'Data Register Cannot be Empty'
      } else if (this.password_val !== this.confirm_password_val) {
        this.statusError = 'Your Password Not Match'
      } else {
        axios('POST', '/auth', { fullname: this.fullname_val, username: this.username_val, email: this.email_val, password: this.password_val })
          .then(response => {
            console.log(response)
            if (response.data.message === 'Register successfully') {
              window.localStorage.setItem('token', response.data.token)
              window.location.reload()
            } else {
              this.statusError = 'Something Gone Wrong'
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
