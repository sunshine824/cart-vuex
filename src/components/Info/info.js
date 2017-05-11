/**
 * Created by Gatsby on 2017/5/11.
 */
module.exports={
  name:'shop-info',
  computed:{
    cartInfos(){
      return this.$store.getters.getInfos;
    }
  },
  methods:{
    clear_db(){
      this.$store.dispatch('clear_db')
    }
  }
}
