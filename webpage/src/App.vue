<script setup>
import SignUp from './components/SignUp.vue'
import router from './routers';
</script>

<template>
<router-view />
</template>

<style>
body{
  padding:0;
  margin:0;
}
.nav a{
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover{
  background: #ddd;
  color: #333;
}
.Head1{
    text-align: center;
}
.logo{
    margin-left: auto;
    margin-right: auto;
    width: 20%;
}
.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid plum;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid plum;
    background: palevioletred;
    color: white;
    cursor: pointer;
}
/*  
.header {
  text-align: center;
  margin-top: 50px;
  color: #495057;
  font-size: 24px;
  font-weight: 600;
}

/* Form box 
.box {
  background-color: #ffffff;
  padding: 20px;
  margin: 50px auto;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Input fields 
.register input, .login input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.register input:focus, .login input:focus {
  border-color: #495057;
  box-shadow: 0 0 0 0.2rem rgba(73, 80, 87, 0.25);
}

/* Button styles 
.register button, .login button  {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #495057;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #343a40;
}

/* Utility styles 
.m-auto {
  margin: auto;
}

.text-center {
  text-align: center;
}*/

</style>
