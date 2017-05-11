<template>
  <div class="shop-list">
    <h4>购物车信息</h4>
    <table class="table table-hover table-shop">
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>总价</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(cart,index) in cartList">
        <td>{{cart.id}}</td>
        <td>{{cart.name}}</td>
        <td>{{cart.price}}</td>
        <td>{{cart.num}}</td>
        <td>{{cart.price*cart.num}}</td>
        <td>
          <div class="btn btn-info" @click="action_db(index,'add_db')">+</div>
          <div class="btn btn-warning" @click="action_db(index,'reduce_db')">-</div>
          <div class="btn btn-danger" title='删除' @click="action_db(index,'delete_db')">x</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import CartJs from './cart.js'
  export default CartJs
</script>
<style scoped lang="less">
  .table-shop{
    th{
      text-align: center;
    }
  }
</style>
