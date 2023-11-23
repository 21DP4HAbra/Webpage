<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add</router-link>
        <router-link to="/upload-files">Upload Files</router-link>
        <a v-on:click="logout" href="#">Logout</a>

    </div>

</template>

<script>
export default {
    name:'Header',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style>
.nav{
    background-color:#333;
    overflow: hidden;
}
</style>