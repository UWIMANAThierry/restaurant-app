<template>
  <HeaderPage />
  <h1>Hello {{name}}, Welcome on Home Page</h1>
  <center><table table="5">
  <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>City</td>
     
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td> {{ item.id }} </td>
        <td> {{item.name}} </td>
        <td> {{item.address}} </td>
        <td> {{item.contact}} </td>
        <td> {{item.city}} </td>
    </tr>
    </table>
    </center>
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
      this.$router.push({ name:"SignUp"});
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result)
    this.restaurant = result.data;
  }
}

</script>
<style>
td{

  width:160;
  height: 40px;
}
tr {
  border-bottom: 1px solid #0c0c4b;
}
tr:hover {
  background-color: #D6EEEE;
}
tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

th:nth-child(even),td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

</style>