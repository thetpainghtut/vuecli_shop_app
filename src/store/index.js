import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    token: '',
    auth: false
  },
  mutations: {
    commitCartState(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    commitSaveCart(state,payload){
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    },
    commitSaveStorage(state){
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    commitSaveToken(state,payload){
      state.token = payload;
    },
    commitSaveStorageToken(state){
      localStorage.setItem('token', state.token);
    },
    commitTokenState(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token');
        state.auth = true
      }else{
        state.token = '';
        state.auth = false
      }
    },
  },
  actions: {
    cartState({commit}){
      commit('commitCartState')
    },
    addToCart({commit},payload){
      commit('commitSaveCart',payload)
      commit('commitSaveStorage')
    },
    makeAuth({commit},payload){
      commit('commitSaveToken',payload)
      commit('commitSaveStorageToken')
    },
    tokenState({commit}){
      commit('commitTokenState')
    },
  },
  modules: {
  }
})
