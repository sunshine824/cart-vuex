/**
 * Created by Gatsby on 2017/5/11.
 */
module.exports={
  //购物车列表
  cartList:[],

  //当前购物车信息
  cartInfos:{
    total_price:0,
    total_nums:0
  },

  //当前菜品是否在购物车的状态。在则是对应其索引，不在则是-1
  curIndex:-1
}
