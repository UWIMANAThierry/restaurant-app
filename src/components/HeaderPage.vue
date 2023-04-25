<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <router-link to="/">Contact Us</router-link>
        <router-link to="/">About Us</router-link>
    <a v-on:click ="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default{
    name: 'HeaderPage',
    methods:{
        logout()
        {
           localStorage.clear(),
           this.$router.push({name:'LogIn'})

        }
    }
}
</script>
<style>
.nav{
    background:#0b4e85;
    overflow: hidden,
}
.nav a {
    float:left;
    color:#000000f2;
    padding: 14px 16px;
    text-align: center;
    font-size:17px;
    text-decoration: none;
    margin-right: 5px;
    margin-left: 10px;
    margin-top: auto;
}
.nav a:hover{
    background: #0b4e85;
    color: beige;
}
</style>