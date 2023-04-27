<template>
  <HeaderPage />
  
  <h1>Hello {{name}}, Welcome on Update Restaurant Page</h1>
  <form class ="add">
  <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
  <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
  <input type="text" name="city" placeholder="Enter city" v-model="restaurant.city">
  <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import axios from 'axios'
export default {
    name : 'UpdatePage',
    
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
    methods:{
      async updateRestaurant()
      {
        console.warn(this.restaurant)
        const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
          city:this.restaurant.city
        });
        if(result.status==200)
        {
          this.$router.push({name:'HomePage'});
        }

      }
    },

    
   async mounted() {
    let user = localStorage.getItem("user-info");
     this.name= JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
    //console.warn(this.$route.params.id)

    console.warn(result.data)
    this.restaurant = result.data
  }
}

</script>