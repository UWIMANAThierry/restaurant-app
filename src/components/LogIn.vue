<template>
  <img class="logo" src="../assets/logo.jpg" />
  <h1>Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button>Sign In</button>
    <p>
      Don't you have an account?
      <router-link to="/sign-up">Sign Up </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LogIn'
}
</script>
