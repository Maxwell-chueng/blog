<template>
	<div class="myLog">
        <div class="main">
			<div class="info">
				<img src="../../../static/images/m5.jpg" alt="">
				<div class="contentBox">
					<h1>奇闻轶事</h1>
					<p>分享身边的奇闻轶事</p>
				</div>
			</div>
			<ul class="content">
				<li v-for="(item,index) in myLog" class="item">
					<div class="icon">
						<img :src="item.imgSrc" alt="">
					</div>
					<div class="itemContent">
						<p class="title" @click="goArticleDetail(item.id,item.category_id)">{{item.title}}</p>
						<p class="intro">{{item.introduce}}</p>
                        <div class="detail">
                        	<div class="time">
								<img src="../../../static/images/date.png" alt="">               		
								<p>{{item.createtime}}</p>
                        	</div>
                        	<div class="look">
								<img src="../../../static/images/view.png" alt="">
								<p>{{item.browse}}人浏览</p>       		
                        	</div>
                        	<div class="like">
									<img src="../../../static/images/爱心.png" alt="">
									<p>{{item.love}}人喜欢</p>
                        	</div>
                        </div>
					</div>
				</li>
			</ul>
        </div>
		<div class="sidebar">
			<blog-sidebar />
		</div>
	</div>
</template>

<script>
	import sidebar from "../../components/front/sidebar.vue"
	export default{
		name:"news",
		created(){
			this.getMyLog();
		},
		data(){
			return{
                 myLog:""
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
			},
			async getMyLog(){
				let logData = await this.axios.post("/api/partOne/",{
					name:"奇闻轶事"
				})
				this.myLog = logData.data;
			}
		},
		components:{
			"blog-sidebar":sidebar
		}
	}
</script>

<style lang="less" scoped>
	.myLog{
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: flex-start;
	    width: 76%;
	    margin: 0px auto;
		.sidebar{
			flex: 2.2;
		}
		.main{
			flex: 7;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			margin-left: -20px;
			.info{
				width: 830px;
				height: 200px;
				box-sizing: border-box;
				padding: 20px;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: flex-start;
				img{
					width: 150px;
					height: 160px;
					flex: 2;
				}
				.contentBox{
					flex: 8;
					box-sizing: border-box;
					padding: 10px;
					display: flex;
					justify-content: flex-start;
					flex-direction: column;
					align-items: flex-start;
                    h1{
                      font-size: 20px;
                      color: #1487f4;
                      font-weight: 600;	
                    }
                    p{
                      color: #888;
                      font-size: 14px;
                      margin-top: 20px;
                    }
				}
			}
			.content{
				width: 100%;
				height: 100%;
				display: flex;
				margin-top: 26px;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				.item{
                     display: flex;
                     justify-content: flex-start;
                     flex-direction: row;
                     align-items: flex-start;
                     background-color: #fff;
                     width: 830px;
                     box-sizing: border-box;
                     padding: 20px;
                     margin-top: 16px;
					.icon{
						width: 170px;
						height: 124px;
						overflow: hidden;
						transition: all .3s;
						&:hover img{
							transform: scale(1.2);
						}
						img{
							width: 170px;
							height: 124px;
							transition: all .3s;
						}
					}
					.itemContent{
						display: flex;
						justify-content: center;
						align-items: flex-start;
						flex-direction: column;
						margin-left: 40px;
                        .title{
                        	font-size: 16px;
                        	color: #1487f4;
                        	margin-top: 10px;
                        	font-weight: 600;
                        	cursor: pointer;
                        	width: 600px;
                        	text-align: left;
                        	transition: all .3s;
                        	&:hover{
                        		color: #000;
                        	}
                        }
                        .intro{
                        	line-height: 20px;
                        	font-size: 14px;
                        	color: #b0b0b0;
                        	text-align: left;
                        	margin-top: 20px;
                        	width: 550px;
                        	height: 41px;
                    	    overflow: hidden;
							text-overflow: ellipsis;
							-webkit-box-orient: vertical;
							display: -webkit-box;
							-webkit-line-clamp: 3;
                        }
                        .detail{
                        	display: flex;
                        	justify-content: flex-end;
                        	flex-direction: row;
                        	align-items: flex-end;
                        	position: relative;
                        	width: 100%;
                        	margin-top: 16px;
                        	.time{
                               display: flex;
                               justify-content: center;
                               flex-direction: row;
                               align-items: center;
                                	img{
                                		width: 16px;
                                		height: 16px;
                                		margin-right: 16px;
                                }
                        	}
                        	.look{
                               display: flex;
                               justify-content: center;
                               flex-direction: row;
                               align-items: center;
                                	img{
                                		width: 16px;
                                		height: 16px;
                                		margin-right: 16px;
                                	}
                        	}
                        	.like{
                               display: flex;
                               justify-content: center;
                               flex-direction: row;
                               align-items: center;
                                	img{
                                		width: 16px;
                                		height: 16px;
                                		margin-right: 16px;
                                	}
                        	}
                        }
                        .detail>*{
                        	margin-right: 40px;
                        }
					}
				}
			}
		}
	}
</style>