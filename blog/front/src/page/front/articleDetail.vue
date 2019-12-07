<template>
	<div class="articleDetail">
		<blog-nav />
		<div class="container">
            <div class="content">
				<div class="articleContent" v-for="(item,index) in articleData">
					<div class="location">
	            		<div class="leftLocation">
	            			<span @click="goChild">{{categoryName}}</span>
	            		</div>
	            		<div class="rightLocation">
	            			<span>您现在的位置是:</span>
	            			<span @click="gohome" class="home">首页</span>
	            			<span>></span>
	            			<span  @click="goChild" class="category">{{categoryName}}</span>
	            		</div>
            	    </div>	
					<div class="title">{{item.title}}</div>
            	    <div class="info">
            	    	<img src="../../../static/images/date.png" alt="">
            	    	<span>{{item.createtime}}</span>
            	    	<span>{{categoryName}}</span>
            	    	<img src="../../../static/images/view.png" alt="">
            	    	<span>{{item.browse}}</span>
            	    	<img src="../../../static/images/爱心.png" alt="">
            	    	<span>{{item.love}}</span>
            	    </div>
					<div class="intro">{{item.introduce}}</div>
					<div class="icon"><img :src="item.img_src" alt=""></div>
					<div class="detail">{{item.detail}}</div>
					<div class="like" @click="golike(item.blog_id)">很赞哦！ ({{item.love}})</div>
				</div>
				<div class="sidebar">
						<blog-sidebar v-if="isSidebarShow" />
				</div>
            </div>
		</div>
		<blog-footer v-if="isFooterShow" />
	</div>
</template>

<script>
	import nav from "../../components/front/top-nav.vue"
	import sidebar from "../../components/front/sidebar.vue"
	import footer from "../../components/front/footer.vue" 
	export default{
		name:"articleDetail",
		created(){
			this.getArticleData();
			setTimeout(()=>{
				this.isSidebarShow = true;
			},100);
			setTimeout(()=>{
				this.isFooterShow = true;
			},200);
		},
		data(){
			return{
                articleData:"",
                categoryName:"",
                categoryId:"",
                isFirstLove:0,
                isSidebarShow:false,
                isFooterShow:false
			}
		},
		methods:{
			async golike(id){
				if(this.isFirstLove >=1){
                    this.$message('感谢您的点赞');
				}else{
					await this.axios.post("/api/articleDetail/addLike",{
						id:id
					});
					this.getArticleData();
			        this.isFirstLove ++;		
				}
			},
			gohome(){
				this.$router.push({
					path:"/myHome"
				})
			},
			goChild(){
				let path = "";
				if(this.categoryId == 8){
                    path = "/jquery"
				}else if(this.categoryId == 9){
					path = "/node"
				}else if(this.categoryId == 10){
					path = "/myself"
				}else if(this.categoryId == 16){
					path = "/myLog"
				}else if(this.categoryId == 14){
					path = "/js"
				}else if(this.categoryId == 15){
					path = "news"
				}else{
					path = "/myHome"
				}

				this.$router.push({
					path:path
				})
			},
			async getArticleData(){
				let id = this.$route.query.id;
				this.categoryId = this.$route.query.category;
				let categoryName = await this.axios.post("/api/articleDetail/getCategory",{
					id:this.categoryId
				})
				let result = await this.axios.post("/api/articleDetail",{
					id:id
				});
				await this.axios.post("/api/articleDetail/addBrowse",{
					id:id
				});
				this.categoryName = categoryName.data[0].name;
				this.articleData = result.data;
			}
		},
		computed:{

		},
		components:{
            "blog-nav":nav,
            "blog-sidebar":sidebar,
            "blog-footer":footer
		}
	}
</script>

<style lang="less" scoped>
	.articleDetail{
		.container{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			align-items: flex-start;
			margin: 0px auto;
			background-color: #f5f5f5;
			.content{
				width: 76%;
				height: 100%;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				flex-direction: row;
				align-items: flex-start;
				box-sizing: border-box;

				.location{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    box-sizing: border-box;
                    border-bottom: #e4e3e3 1px solid;
                    box-sizing: border-box;
                    padding-bottom: 6px ;
                    .leftLocation{
                    	// padding-bottom: 20px;
                    	text-align: center;
                    	line-height: 30px;
                    	span{
                    		width: 100%;
	                    	border-bottom: 2px solid #1487f4;
	                    	box-sizing: border-box;
	                    	padding-bottom: 10px;
	                    	color: #1487f4;
	                    	cursor: pointer;
	                    	transition: all .3s;
	                    	&:hover{
	                    		color: #000;
	                    	}
                    	}
                    }
                    .rightLocation{
                        color: #000;
                        font-size: 16px;
                        .home{
                        	transition: all .3s;
                        	margin:0 5px;
                        	&:hover{
                        		color: #1487f4;
                        		cursor: pointer;
                        	}
                        }
                        .category{
                        	transition: all .3s;
                        	margin: 0 5px;	 
                        	&:hover{
                        		color: #1487f4;
                        		cursor: pointer;
                        	}
                        }   
                    }

				}
				.sidebar{
					flex: 2.5;
					margin-top: 10px;
					margin-left: 16px;
				}
				.articleContent{
					flex: 6.8;
					margin-top: 20px;
					background-color: #fff;
					margin-left: 10px;
					box-sizing: border-box;
					padding: 20px;
					.title{
						font-weight: 800;
						font-size: 22px;
						margin-top: 30px;
						text-align: left;
					}
					.info{
						display: flex;
						justify-content: flex-start;
						flex-direction: row;
						align-items: center;
						margin-top: 20px;
						text-align: left;
						color: #888;
                        img{
                        	width: 16px;
                        	height: 16px;
                        	margin-right: 3px;
                        }
                        span{
                        	margin-right: 16px;
                        }
					}
					.intro{
						margin-top: 20px;
						text-align: left;
						box-sizing: border-box;
						padding: 20px 20px;
						font-size: 15px;
						color: #888;
						background-color: #f1f1f1;
						line-height: 22px;
					}
					.icon{
                        img{
	                        width: 750px;
	                        height: 550px;
	                        margin-top: 50px;
                        }
					}
					.detail{
						color: #000;
						margin-top: 36px;
						text-align: left;
						line-height: 30px;
						box-sizing: border-box;
						padding: 20px;
					}
					.like{
						width: 150px;
						height: 40px;
						background-color: #ff6700;
						color: #fff;
						text-align: center;
						line-height: 40px;
						border-radius: 4px;
						margin: 20px auto;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>