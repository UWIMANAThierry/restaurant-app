<template>
  <HeaderPage  />
  
    <h1>Hello {{name}}, Welcome Add Restaurant Page</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
    name : 'AddPage',
    data(){
      return {
        name:''
      }
    },
    components: {
        HeaderPage
    },

    mounted() {
    let user = localStorage.getItem("user-info");
     this.name= JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  }
}

</script>