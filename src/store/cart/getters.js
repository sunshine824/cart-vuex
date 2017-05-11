/**
 * Created by Gatsby on 2017/5/11.
 */
module.exports={
  //获取购物车列表
  getCartList(state){
    return state.cartList;
  },
  //计算购物车总数量和总金额
  getInfos(state){
    state.cartInfos.total_price=0;
    state.cartInfos.total_nums=0;
    var list=state.cartList;
    for(var i=0;i<list.length;i++){
      var price=parseInt(list[i].price),
          num=parseInt(list[i].num);

      state.cartInfos.total_price+=price*num;
      state.cartInfos.total_nums+=num;
    }
    return state.cartInfos;
  }
}
