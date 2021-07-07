import Vue from "vue";
import swal from "sweetalert2";

// SweetAlert2
export default {
  install: (Vue) => {

    // 添加全局方法,通过Vue.swal使用
    Vue.swal = swal;

    // 添加实例方法,通过this.$swal使用
    Vue.prototype.$swal = swal;
  }
}
