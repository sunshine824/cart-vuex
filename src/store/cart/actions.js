/**
 * Created by Gatsby on 2017/5/11.
 */
import * as types from './mutations_types';

export default {
  create_db:({commit},{shop})=>{
    commit(types.CREATE_DB,shop);
  },
  add_db:({commit})=>{
    commit(types.ADD_DB);
  },
  check_db:({commit},obj)=>{
    commit(types.CHECK_DB,obj);
  },
  reduce_db:({commit})=>{
    commit(types.REDUCE_DB)
  },
  delete_db:({commit})=>{
    commit(types.DELETE_DB)
  },
  update_cur_shop_status:({commit},obj)=>{
    commit(types.UPDATE_CUR_SHOP_STATUS,obj)
  },
  clear_db:({commit})=>{
    commit(types.CLEAR_LOCAL)
  }
}
