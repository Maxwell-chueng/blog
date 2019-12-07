<template>
	<ul class="sidebar">
		<li class="head">奇闻轶事</li>
		<li  class="side" v-show="index == 0" v-for="(side,index) in sideData" @click="goArticleDetail(side.id , side.category_id)">
			<div class="imgs">
				<img v-show="index == 0" :src="side.imgSrc" alt="">
			</div>
			<p :class="{active:index == 0}">{{side.title}}</p>
		</li>
		<li  class="side2" v-show="index>0"  v-for="(side,index) in sideData" @click="goArticleDetail(side.id , side.category_id)">
			<div class="imgs2">
				<img :src="side.imgSrc" alt="">
			</div>
			<p :class="{active:index == 0}">{{side.title}}</p>
		</li>
		<li class="last"></li>
	</ul>
</template>

<script>
	export default{
		name:"sidebar",
		created(){
			this.getSideData();
		},
		data(){
			return{
              sideData:""
			}
		},
		methods:{
			async goArticleDetail(id,categoryId){
				this.$router.push({
					path:"/articleDetail",
					query:{
						id:id,
						category:categoryId
					}
				});
				 this.$router.go(0);   
			},
			async getSideData(){
				let result = await this.axios.post("/api/partOne",{
					name: "奇闻轶事"
				});
				this.sideData = result.data; 
			}
		}
	}
</script>

<style lang="less" scoped>
    .active{
    	position: absolute;
        top: 50%;
        left: 5%;
		font-size: 16px;
		font-weight: 600;
		// margin-left: 40px;
		color: #fff;
		width: 100%;
    }
	.sidebar{
		background-color: #fff;
		.head{
			width: 80%;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 12px;
			text-align: left;
		    color: #000;
			border-bottom: 1px solid #b0b0b0;
		}
		.side{
			width: 80%;
			margin: 16px auto;
			position: relative;
			cursor: pointer;
			&:hover img{
			    transition: all .3s;
                transform: scale(1.2);
			} 
            .imgs{
            	width: 100%;
            	height: 100%;
            	overflow: hidden;
				img{
					width: 100%;
					height: 100%;
					transition: all .3s;
				}
            }
			p{
               text-align: left;
			}
		}
		.side2{
			width: 80%;
			margin: 16px auto;
			position: relative;
			cursor: pointer;
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			align-items: flex-start;
			&:hover img{
			    transition: all .3s;
                transform: scale(1.2);
			}
			&:hover p{
                color: #1487f4;
			}
			.imgs2{
            	width: 70px;
            	height: 70px;
            	overflow: hidden;
            	img{
					width: 70px;
					height: 70px;
					transition: all .3s;            		
            	}				
			}
			p{
               margin-top: 10px;
               margin-left: 10px;
               transition: all .3s;
               width: 60%;
	       	   overflow: hidden;
			   text-overflow: ellipsis;
			   -webkit-box-orient: vertical;
			   display: -webkit-box;
			   -webkit-line-clamp: 1;
			   color: #000;
			   font-weight: 600;
			} 
		}
		.last{
			width: 100%;
			height: 30px;
		}
	}
</style>