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
      <td>Actions</td>
     
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td> {{ item.id }} </td>
        <td> {{item.name}} </td>
        <td> {{item.address}} </td>
        <td> {{item.contact}} </td>
        <td> {{item.city}} </td>
        <td><router-link :to="'/update/'+item.id">Update</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
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
    methods:{
    async  deleteRestaurant(id)
      {
       
        let result =await axios.delete("http://localhost:3000/restaurant/"+id);
        console.warn(result)
        if(result.status==200)
        {
          this.loadData

        }

      },
     async loadData(){
        let user = localStorage.getItem("user-info");
    this.name= JSON.parse(user).name;
    if (!user) 
    {
      this.$router.push({ name:"SignUp"});
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result)
    this.restaurant = result.data;
      }

    },
    async mounted()
     {
       this.loadData();
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