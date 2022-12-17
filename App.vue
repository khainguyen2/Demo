<template>
  <div>
    <Navbar />
    <router-view />
  </div>
  </template>
  
  <script>
  import Navbar from './router/index'
  
  export default{
    name: 'App',
    componets:{
      Navbar
    }
  }
  </script>
  
  <style >
  #app{
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>