/**
 * Created by Gatsby on 2017/5/11.
 */
module.exports={
  name:'shop-list',
  data(){
    return {
      shop_list: [{
        id: 1,
        name: '鱼香肉丝',
        price: 12
      }, {
        id: 2,
        name: '宫保鸡丁',
        price: 14
      }, {
        id: 3,
        name: '土豆丝',
        price: 10
      }, {
        id: 4,
        name: '米饭',
        price: 2
      }]
    }
  },
  mounted(){
    var list=this.$store.state.cart.cartList
    for(var i=0;i<this.shop_list.length;i++){
      for(var j=0;j<list.length;j++){
        if(list[j].id==this.shop_list[i].id){
          //通过直接赋值对象，造成对象引用，从而改变state时，达到自动同步列表数据目的
          this.$set(this.shop_list,i,list[j])
          break;
        }
      }
    }
  },
  methods:{
    //点击菜品列表中的加号
    add_db(shop){
      var id=shop.id;

      //检测是否存在购物车中，如果存在修改state.curState为true,并设置state.curIndex为当前菜品在购物车中的索引
      this.$store.dispatch('check_db',{id});

      //如果存在，先自增当前菜品中的num，在设置购物车的数量
      if(this.$store.state.cart.curIndex!=-1){
        console.log('add_db')
        this.$store.dispatch('add_db')
      }else{
        console.log('create_db')
        this.$set(shop,'num',1);
        this.$store.dispatch('create_db',{shop});
      }
    },

    //点击菜品列表中的减号
    reduce_db(shop){
      var id=shop.id;

      this.$store.dispatch('check_db',{id});
      this.$store.dispatch('reduce_db')
    }
  }
}
