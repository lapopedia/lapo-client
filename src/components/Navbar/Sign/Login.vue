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
export default {
  data () {
    return {
      email_val: '',
      password_val: ''
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
