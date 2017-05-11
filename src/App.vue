<template>
  <div id="app">
    <h3>vuex购物车</h3>
    <cart-list></cart-list>
    <cart></cart>
    <cart-info></cart-info>
  </div>
</template>

<script>
import list from './components/List/list.vue'
import cart from './components/Cart/cart.vue'
import info from './components/Info/info.vue'

export default {
  name: 'app',
  components: {
    CartList:list,
    Cart:cart,
    CartInfo:info,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
