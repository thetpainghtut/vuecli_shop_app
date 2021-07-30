<template>
  <div class="cart container">
    <section v-if="mycart.length>0">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in mycart" :key="index">
            <td>{{++index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.qty}}</td>
            <td>{{item.price*item.qty}}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section v-else>
      <h1 class="text-danger">Your Cart is Empty!</h1>
    </section>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        mycart: []
      }
    },
    mounted(){
      this.mycart = this.$store.state.cart
    },
    methods:{
      
    }
  }
</script>
