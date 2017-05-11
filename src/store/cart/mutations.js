/**
 * Created by Gatsby on 2017/5/11.
 */
import * as types from './mutations_types'

export default {
  [types.ADD_DB](state){
    console.log(state)
    state.cartList[state.curIndex].num=parseInt(state.cartList[state.curIndex].num);
    state.cartList[state.curIndex].num++;
  },
  [types.CREATE_DB](state,shop){
    state.cartList.push(shop)
  },
  [types.CHECK_DB](state,{id}){
    state.curIndex=-1;
    var list=state.cartList;
    if(list.length){
      for(var i=0;i<list.length;i++){
        if(list[i].id==id){
          state.curIndex=i;
          break;
        }
      }
    }
  },
  [types.REDUCE_DB](state){
    state.cartList[state.curIndex].num=parseInt(state.cartList[state.curIndex].num);
    state.cartList[state.curIndex].num--;

    if(state.cartList[state.curIndex].num==0){
      state.cartList.splice(state.curIndex,1)
    }
  },
  [types.DELETE_DB](state){
    if(state.curIndex>=0){
      state.cartList[state.curIndex].num=0
      state.cartList.splice(state.curIndex,1)
    }
  },
  [types.UPDATE_CUR_SHOP_STATUS](state,{index}){
    state.curIndex=index;
  },
  [types.CLEAR_LOCAL](state){
    state.cartList.forEach(function(item){
      item.num=0
    })
    state.cartList=[];
  }
}
