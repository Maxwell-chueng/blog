<template>
  <div class="home">
    <top-nav />
    <div class="main">
      <router-view></router-view>
    </div>
    <blog-footer v-if="isFooterShow"/>
  </div>
</template>

<script>
import nav from "../../components/front/top-nav.vue"
import footer from "../../components/front/footer.vue"
export default {
  name: 'home',
  data () {
    return {
       isFooterShow:true
    }
  },
  components:{
    "top-nav":nav,
    "blog-footer":footer
  },
  methods:{
    isShow(){
      this.isFooterShow = false;
      setTimeout(()=>{
        this.isFooterShow = true;
      },100)
    }
  },
  watch:{
  $route(to,from){
      this.isShow();
  }
}
}
</script>


<style lang="less" scoped>
    .main{
      // margin-top: 16px;
      // box-sizing: border-box;
      padding-top: 16px;
      background-color: #f5f5f5;
    }
</style>
