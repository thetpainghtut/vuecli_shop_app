<template>
  <div class="home">
    <div class="container">
      <div class="row">

        <div class="col-md-3" v-for="(item,index) in items" :key="index">
          <div class="card">
            <img :src="item.item_photo" class="card-img-top">
            <div class="card-body">
              {{item.item_name}}
              <span class="font-weight-bold">{{item.item_price}}</span> Ks
            </div>
            <div class="card-footer">
              <input type="number" name="qty" v-model="qty">
              <button class="btn btn-warning" @click="addToCart(item)">AddToCart</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  const axios = require('axios');

  export default{
    data(){
      return{
        items: null,
        qty:1,
      }
    },
    mounted(){
      axios.get('http://localhost:8000/api/items').then(res =>{
        this.items = res.data
      })
    },
    methods:{
      addToCart(item){

        let cartItem = {
          id: item.item_id,
          name: item.item_name,
          price: item.item_price,
          description: item.item_description,
          qty: Number(this.qty)
        }
        
        this.$store.dispatch('addToCart',cartItem)
      }
    }
  }
</script>
