/**
 * Created by Gatsby on 2017/5/11.
 */
module.exports={
  name:'cart-list',
  computed:{
    cartList(){
      console.log(this.$store.getters.getCartList)
      return this.$store.getters.getCartList;
    }
  },
  methods:{
    /**
     * 购物车加减删操作
     * @param  {number} index 当前操作的索引
     * @param  {string} type  对应的mutations值
     * @param  {string} type=add_db  增加
     * @param  {string} type=reduce_db  减少
     * @param  {string} type=delete_db  删除
     */
    action_db(index,type){

      this.$store.dispatch('update_cur_shop_status',{index})

      this.$store.dispatch(type)
    }
  }
}
