<template>
    <Header />
    <h1>Hello {{name}}, Welcome to the home page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in company" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button class="delete-button" v-on:click="deleteCompany(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: 'Home',
    data(){
        return {
            name: '',
            company: [],
        }

    },
    components:{
        Header
    },
    methods:{
        async deleteCompany(id)
        {
            let result = await axios.delete("http://localhost:3000/company/"+id);
            console.warn(result)
            if(result.status == 200)
            {
                this.loadData();
            }
        },
        async loadData()
        {
            let user = (localStorage.getItem("user-info"));        
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/company");
        console.warn(result)
        this.company = result.data;
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
    width: 160px;
     height: 40px;
}
.delete-button {
    border: 1px solid black;  /* Slightly darker shade than plum */
    background: red;  /* Lighter than palevioletred for a slight variation */
    color: white;
    cursor: pointer;
    transition: background 0.3s;  /* Smooth transition for hover effect */
}

.delete-button:hover {
    background: #c76378;  /* Darker shade for hover effect */
}

</style>