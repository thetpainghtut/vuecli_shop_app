<template>
  <div id="app">
    <div id="nav" class="mb-3 text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/cart">Cart ({{cartNoti}})</router-link> | 
      <span v-if="auth">
        <span>{{authUser.name}}</span>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> 
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  const axios = require('axios');

  export default{
    data(){
      return{
        auth: false,
        authUser:{
          name: 'mgmg'
        }
      }
    },
    mounted(){
      this.$store.dispatch('cartState')
      this.$store.dispatch('tokenState')
      this.getAuthUser();
    },
    methods:{
      getAuthUser(){
        if (this.$store.state.auth == true) {
          this.auth = this.$store.state.auth
          let header_val = `Bearer ${this.$store.state.token}`

          axios.defaults.headers.common['Authorization'] = header_val;
          axios.get('http://localhost:8000/api/user').then(res => {
            this.authUser = res.data
          }).catch(err =>{
            console.log(err)
          })
        }
      }
    },
    computed:{
      cartNoti(){
        if (this.$store.state.cart.length > 0) {
          return this.$store.state.cart.reduce((a, c) => (a + c.qty),0)
        }else{
          return 0
        }
      },
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
