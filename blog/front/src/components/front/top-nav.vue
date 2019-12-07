<template>
	<div class="nav">
		<div  class="top">
			<img class="logo" src="../../../static/images/logo.png" alt="">
            <div class="content">
            	<h2 @click="goHome" class="title">叶子</h2>
			    <p class="info">坚持做有温度的原创博客网站  好玩有价值</p>
            </div>
		</div>
        <div class="list">
	        <div class="navList">
				<router-link v-if="index<=10" v-for="(data,index) in navData" class="item" :to="data.path"    :key=index>{{data.name}}</router-link>
			<a class="item" href="http://120.76.245.251:9999/">我的简历</a>
			</div>
        </div>
	</div>
</template>

<script>
	export default{
		name:"top-nav",
		created(){
               this.getNavList();
		},
		data(){
			return{
               navData:"",
               linkData:[{path:"myHome"},{path:"myLog"},{path:"/news"},{path:"/js"},{path:"/myself"},{path:"/node"},{path:"/jquery"}]
			}
		},
		methods:{
			goHome(){
				this.$router.push({
					path:"/"
				});
			},
            async getNavList(){
               let a = await this.axios("/api/");
               console.log(a)
               let result = await this.axios("/api/back/category/getCategory");
               result = result.data;
               for(let i=0;i<result.length;i++){
                    result[i].path = this.linkData[i].path;
               }
               this.navData = result;
            }
		}
	}
</script>

<style lang="less" scoped>
    .router-link-active{
      background: rgb(9, 118, 220);
    }
	.nav{
		.top{
			box-sizing: border-box;
			width: 76%;
			margin: 0 auto;
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			align-items: center;
			padding: 10px 0;
			cursor: pointer;
			.logo{
				width: 70px;
				height: 70px;
			}
            .content{
            	display: flex;
            	justify-content: center;
            	flex-direction: column;
            	align-items: flex-start;
            	margin-left: 10px;
            	box-sizing: border-box;
            	.title{
					font-size: 28px;
					color: #1487f4;
					font-weight: 600;
				}
				.info{
					color: #888;
				}
            }
            .content>*{
            	padding: 5px 0;
            }
		}
		.list{
			width: 100%;
			background-color: #1487f4;
			.navList{
                width: 76%;
                margin: 0 auto;
                display: flex;
                justify-content: flex-start;
                flex-direction: row;
                align-items: center;

                .item{
                     width: 100px;
                     height: 50px;
                     text-align: center;
                     line-height: 50px;
                     cursor: pointer;
                     transition: all .3s;
                     color: #fff;
                     font-size: 16px;
                     &:hover{
                     	background: rgb(9, 118, 220);
                     }
                }
			}
		}
	}
</style>