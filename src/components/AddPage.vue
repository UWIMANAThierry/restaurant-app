<template>
<HeaderPage/>  
<h1> Hello {{name}}, Welcome Add Restaurant Page </h1>
<form class ="add">
  <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
  <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
  <input type="text" name="city" placeholder="Enter city" v-model="restaurant.city">
  <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
</form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
    name : 'AddPage',
    components: {
        HeaderPage
    },
    data (){
      return{
        restaurant : {
          name:'',
          address:'',
          contact:'',
          city:''
        }

      }
    },
    methods :{
      addRestaurant(){
        this.$emit('addRestaurant',this.restaurant);
      }
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