<template>
    <Header />
    <h1>Hey User! You can upload your files here!</h1>
    <form class="upload">
        <input type="text" name="name" placeholder="Enter Name" v-model="company.name" />
        <button type="button" v-on:click="addCompany">Add</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: 'Add',
    components:{
        Header
    },
    data()
    {
        return {
            company :{
                name: '',
                address: '',
                contact: ''
            }
        }
    }
}
</script>