<template>
    <Header />
    <h1>Hello User, Welcome to the update page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="company.name" />
        <input type="text" name="name" placeholder="Enter Address" v-model="company.address"/>
        <input type="text" name="name" placeholder="Enter Contact" v-model="company.contact"/>
        <button type="button" v-on:click="updateCompany">Update</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: 'Update',
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
        async updateCompany()
        {
            console.warn(this.company)
            const result = await axios.put("http://localhost:3000/company/"+this.$route.params.id,{
                name:this.company.name,
                address:this.company.address,
                contact:this.company.contact
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'})
            }
        }
    },
    async mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }

        const result = await axios.get('http://localhost:3000/company/'+this.$route.params.id)
        this.company=result.data
    }
}
</script>