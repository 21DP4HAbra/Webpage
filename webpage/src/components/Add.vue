<template>
    <Header />
    <h1>Hello User, Welcome to the Add page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="company.name" />
        <input type="text" name="name" placeholder="Enter Address" v-model="company.address"/>
        <input type="text" name="name" placeholder="Enter Contact" v-model="company.contact"/>
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
    },
    methods:{
        async addCompany()
        {
            console.warn(this.company)
            const result = await axios.post("http://localhost:3000/company",{
                name:this.company.name,
                address:this.company.address,
                contact:this.company.contact
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'})
            }
            console.warn("result", result)
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>