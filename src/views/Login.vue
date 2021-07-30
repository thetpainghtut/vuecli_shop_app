<template>
  <div class="login container">
    
    <div class="row">
      <div class="col-md-4 mx-auto">
        <form method="" action="" @submit.prevent="Login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    
  </div>
</template>
<script type="text/javascript">
  const axios = require('axios');

  export default{
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods:{
      Login(){
        let user = {
          email: this.email,
          password: this.password
        }

        axios.post('http://localhost:8000/api/login',user)
              .then(res=>{
                // console.log(res.data)
                this.$store.dispatch('makeAuth',res.data.token)
                this.$route.push('/')
              })
              .catch(err=>{
                console.log(err)
              })
      }
    }
  }
</script>
