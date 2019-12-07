<template>
   <div class="home">
      <div class="public">
            <blog-nav />
      </div>
      <div class="content">
          <div class="sidebar">
             <blog-sidebar />
          </div>
          <div class="main">
             <router-view></router-view>
          </div>
      </div>
   </div>
</template>

<script>
import nav from "../../components/back/nav.vue"
import sidebar from "../../components//back/sidebar.vue"
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'home',
  created(){
      this.getLogin();
      this.getLoginState();
  },
  data () {
    return {
      
    }
  },
  methods:{
    ...mapActions(["getLogin"]),
    getLoginState(){
        if(this.isLogin){
          
        }else if(this.isLogin == false || this.isLogin == "" || this.isLogin == null || this.isLogin == undefined){
          this.$router.replace({
            name:"login"
          })
        }
    }
  },
  computed:{
    ...mapGetters(["isLogin"])
  },
  components:{
    "blog-nav":nav,
    "blog-sidebar":sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
      .home{
        .content{
           display: flex;
           justify-content: center;
           flex-direction: row;
           align-items: flex-start;
           .sidebar{
            flex: 2;
           }
           .main{
            flex: 12;
            width: 100%;
            height: 100%;
            // background-color: orange;
           }
        }
      }
</style>
