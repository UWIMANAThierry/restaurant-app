<template>
  <HeaderPage />

    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table table="2">
      <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
      </tr>
    </table>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios';
export default {
    name : 'HomePage',
    data(){
      return {
        name:'',
        restaurant:[]
      }
    },
    components: {
        HeaderPage
    },

    async mounted() {
    let user = localStorage.getItem("user-info");
    this.name= JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result)
    this.restaurant = result.data;

  }
}

</script>