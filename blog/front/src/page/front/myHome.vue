<template>
	<div class="myHome">
		<header>
            <div class="carousel">
	              <el-carousel   height="340px" arrow="hover">
				    <el-carousel-item v-for="(item,index) in carouselData" :key=index>
				      <img @click="goArticleDetail(item.blog_id,item.category_id)" style="width: 100%;height: 100%;" :src="item.img_src" alt="">
				    </el-carousel-item>
				  </el-carousel>
	        </div>
            <ul class="head">
            	<li  v-for="(head,index) in headData" v-if="index<6">
            		<p v-if="index == 0" class="mark">头条</p>
            		<p class="title" style="width: 200px;
		            		overflow: hidden;
		            		text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 1;"
                            @click="goArticleDetail(head.id,head.category_id)"
						    >{{head.title}}</p>
            		<p class="introduce" v-if="index == 0">{{head.introduce}}</p>
            	</li>
            </ul>
		</header>
		<div class="content">
			<div class="categoryPartOne">
				<ul class="tag">
					<li class="item"  @click="changeIndex(index)" v-for="(tag,index) in tags">{{tag}} 
						<i class="indicate" :class="{active:index == currentIndex}"></i> 
					</li>
					
				</ul>
				<ul class="indent">
					<li @click="goArticleDetail(one.id,one.category_id)" v-for="(one,index) in partOne[mark]" v-if="index<9">
						<img class="imgSrc" style="width: 100px;height: 60px" :src="one.imgSrc" alt="">
                        <div class="indentContent">
							<h3 class="title">{{one.title}}</h3>
							<p class="introduce">{{one.introduce}}</p>
                        </div>
					</li>
				</ul>
			</div>
			<div class="categoryPartTwo">
				<ul class="tag">
					<li class="item"  @click="changeIndex2(index)" v-for="(tag,index) in tags2">{{tag}} 
						<i class="indicate" :class="{active:index == currentIndex2}"></i> 
					</li>
					
				</ul>
				<ul class="indent">
					<li v-for="(one,index) in partTwo[mark2]" v-if="index<9">
						<img class="imgSrc" style="width: 100px;height: 60px" :src="one.imgSrc" alt="">
                        <div class="indentContent">
							<h3 style="text-align: left;" @click="goArticleDetail(one.id,one.category_id)" class="title">{{one.title}}</h3>
							<p class="introduce">{{one.introduce}}</p>
                        </div>
					</li>
				</ul>
			</div>
			<div class="categoryPartThree">
				<ul class="tag">
					<li class="item"  @click="changeIndex3(index)" v-for="(tag,index) in tags3">{{tag}} 
						<i class="indicate" :class="{active:index == currentIndex3}"></i> 
					</li>
					
				</ul>
				<ul class="indent">
					<li  @click="goArticleDetail(one.id,one.category_id)" v-for="(one,index) in partTwo[mark3]" v-if="index<7">
						<div class="img">
							<img class="imgSrc" :src="one.imgSrc" alt="">
						</div>
                        <div class="indentContent">
							<h3 class="title">{{one.title}}</h3>
                        </div>
					</li>
				</ul>
			</div>
			<div class="categoryPartFour">
				<ul class="tag">
					<li class="item"  @click="changeIndex4(index)" v-for="(tag,index) in tags4">{{tag}} 
						<i class="indicate" :class="{active:index == currentIndex4}"></i> 
					</li>
					
				</ul>
				<ul class="indent">
					<li  @click="goArticleDetail(one.id,one.category_id)" v-for="(one,index) in partTwo[mark4]" v-if="index<8">
                        <div class="indentContent">
							<h3 class="title">{{one.title}}</h3>
							<p class="createtime">{{one.createtime}}</p>
                        </div>
					</li>
				</ul>
			</div>
			<div class="categoryPartFive">
				<ul class="tag">
					<li class="item"  @click="changeIndex5(index)" v-for="(tag,index) in tags5">{{tag}} 
						<i class="indicate" :class="{active:index == currentIndex5}"></i> 
					</li>
					
				</ul>
				<ul class="indent">
					<li v-for="(one,index) in partOne[mark5]" v-if="index<9">
						<img class="imgSrc"  :src="one.imgSrc" alt="">
                        <div class="indentContent">
                            <div class="info">
								<h3 class="title"  @click="goArticleDetail(one.id,one.category_id)">{{one.title}}</h3>
								<p class="time">{{one.createtime}}</p>
                            </div>
							<p class="introduce">{{one.introduce}}</p>
                        </div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import footer from "../../components/front/footer.vue"
	export default{
		name:"myHome",
		created(){
            this.getCarouselData();
            this.getHeadData();
            this.partOneData();
            this.partTwoData();
		},
		data(){
			return{
				carouselData:"",
				headData:"",
				partOne:"",
				tags:["jQuery","js大前端","个人日志"],
				currentIndex:0,
				currentIndex2:0,
                mark:"jQuery",
                partTwo:"",
                tags2:["奇闻轶事","个人杂谈","node"],
                tags3:["奇闻轶事","个人杂谈","node"],
                tags4:["奇闻轶事","个人杂谈","node"],
                mark2:"奇闻轶事",
                mark3:"奇闻轶事",
                currentIndex3:0,
                currentIndex4:0,
                mark4:"奇闻轶事",
                mark5:"jQuery",
                currentIndex5:0,
                tags5:["jQuery","js大前端","个人日志"]
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
			changeIndex(index){
				this.currentIndex = index;
                 this.mark = this.tags[index];
			},
			changeIndex2(index){
				this.currentIndex2 = index;
                 this.mark2 = this.tags2[index];
			},
			changeIndex3(index){
				this.currentIndex3 = index;
                 this.mark3 = this.tags3[index];
   			},			
   			changeIndex4(index){
				this.currentIndex4 = index;
                 this.mark4 = this.tags4[index];
   			},
   			changeIndex5(index){
				this.currentIndex5 = index;
                 this.mark5 = this.tags5[index];
   			},
			async getCarouselData(){
				let result = await this.axios("/api/carousel");
				this.carouselData = result.data;
			},
			async getHeadData(){
				let result = await this.axios("/api/head");
				this.headData = result.data;
			},
			async partTwoData(){
				let arr = ["奇闻轶事","个人杂谈","node"];
				let obj = {};

				let result = await this.axios.post("/api/partOne",{
					name: "奇闻轶事"
				});
				obj.奇闻轶事 = result.data;

				let result2 = await this.axios.post("/api/partOne",{
					name: "个人杂谈"
				});
				obj.个人杂谈 = result2.data;

				let result3 = await this.axios.post("/api/partOne",{
					name: "node"
				});
				obj.node = result3.data;
				this.partTwo = obj				
			},
			async partOneData(){
				let arr = ["jQuery","js大前端","个人日志"];
				let obj = {};
				let result = await this.axios.post("/api/partOne",{
					name: "jQuery"
				});
				obj.jQuery = result.data;

				let result2 = await this.axios.post("/api/partOne",{
					name: "js大前端"
				});
				obj.js大前端 = result2.data;

				let result3 = await this.axios.post("/api/partOne",{
					name: "个人日志"
				});
				obj.个人日志 = result3.data;

				this.partOne = obj;
			}
		},
		components:{
			"blog-footer":footer
		}
	}
</script>

<style lang="less" scoped>
    .active{
        transition: all .3s linear !important;
        width: 100% !important;
	    bottom: -1px !important;
	    text-align: center !important;
	    background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%) !important;
	    opacity: 1 !important;
	    left: 0 !important;
    }
	.myHome{
		width: 76%;
		height: 100%;
		margin: 0 auto;

		header{
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			align-items: center;
			flex-direction: row;
			height: 100%;
			// background-color: yellow;
			.carousel{
               flex: 7;
               cursor: pointer;
               // width: 700px;
               // background-color: silver;
			}
			.head{
               flex: 3;
               // width: 444px;
               background-color: #ffffff;
               margin-left: 20px;
               box-sizing: border-box;
               padding: 18px 70px;
               height: 100%;
               li{
               	  width: 100%;
               	  box-sizing: border-box;
               	  padding: 10px 0 10px 0px;
               	  text-align: left;
               	  cursor: pointer;
               	  transition: all .3s;
               	  font-size: 16px;
               	  position: relative;
               	  &:hover{
               	  	color: #1487f4;
               	  }
               	  &:after{
               	  	content: "";
               	  	width: 3px;
               	  	height: 3px;
               	  	position: absolute;
               	  	left: -20px;
               	  	background-color: #000;
               	  	border-radius: 50%;
               	  	top: 50%;
               	  }
	               &:first-child{
                      display: flex;
                      justify-content: flex-start;
                      flex-direction:row;
                      align-items:center;
                      flex-wrap: wrap;
                      border-bottom: 1px solid #b0b0b0;
                      cursor: text;
                      &:after{
                      	content: "";
                      	width: 0px;
                      	height: 0px;
                      }
	               	  .mark{
                         color: #ff6700;
                         border: 1px solid #ff6700;
                         border-radius: 10%;
                         width: 36px;
                         box-sizing: border-box;
                         padding: 2px;
                         text-align: center;
                         font-size: 12px; 
	               	  }
	               	  .title{
                        font-size: 20px;
                        color: #1487f4;
                        font-weight: 600;
                        margin-left: 10px;
                        cursor: pointer;
	               	  }
	               	  .introduce{
	               	  	margin-top: 18px;
	               	  	width: 100%;
	               	  	height: 64px;
	               	  	color: #888;
	               	  	overflow: hidden;
					    text-overflow: ellipsis;
					    -webkit-box-orient: vertical;
					    display: -webkit-box;
					    -webkit-line-clamp: 4;
	               	  }
	               }
               }
			}
		}
		.content{

			.categoryPartOne{

				margin: 20px auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20px ;

				.tag{

					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #b0b0b0;
                    .item{

						margin-right: 30px;
						text-align: center;
	                    width: 84px;
	                    height: 30px;
	                    line-height: 30px;
	                    padding-bottom: 10px;
						cursor: pointer;
						position: relative;

						&:hover .indicate{
		                    transition: all .3s linear;
		                    width: 100%;
							bottom: -1px;
							text-align: center;
							background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
							opacity: 1;
							left: 0;
						}
					    .indicate{
					    	width: 20%;
					    	height: 2px;
					    	position: absolute;
					    	bottom: -1px;
					    	left: 40%;
					    	opacity: 0;
					    	transition: all .3s linear;
					    	background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
					    }
                    }
				}

				.indent{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;

				}
				.indent>*{
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    align-items: center;
                    width: 360px;
                    height: 100px;
                    box-sizing: border-box;
                    padding: 10px;
                    cursor: pointer;
                    border: 1px solid #ddd;
                    margin-top: 16px;
                    &:hover .indentContent>.title{
                    	color: #1487f4;
                    }
                    .indentContent{
                    	display: flex;
                    	justify-content: center;
                    	flex-direction: column;
                    	align-items: flex-start;
                    	margin-left: 10px;
                    	.title{
                    		transition: all .3s;
                    		width: 100%;
		            		overflow: hidden;
		            		text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 1;
						    text-align: left;
                    	}
                    	.introduce{
                    		width: 200px;
                    		height: 100%;
                    		margin-top: 8px;
                    		line-height: 16px;
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    font-size: 14px;
						    text-align: left;
						    color: #888;
                    	}
                    }
				}
			}
			.categoryPartTwo{

				margin: 20px auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20px ;

				.tag{

					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #b0b0b0;
                    .item{

						margin-right: 30px;
						text-align: center;
	                    width: 84px;
	                    height: 30px;
	                    line-height: 30px;
	                    padding-bottom: 10px;
						cursor: pointer;
						position: relative;

						&:hover .indicate{
		                    transition: all .3s linear;
		                    width: 100%;
							bottom: -1px;
							text-align: center;
							background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
							opacity: 1;
							left: 0;
						}
					    .indicate{
					    	width: 20%;
					    	height: 2px;
					    	position: absolute;
					    	bottom: -1px;
					    	left: 40%;
					    	opacity: 0;
					    	transition: all .3s linear;
					    	background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
					    }
                    }
				}

				.indent{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;

				}
				.indent>*{
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    align-items: center;
                    width: 360px;
                    height: 100px;
                    box-sizing: border-box;
                    padding: 10px;
                    cursor: pointer;
                    border: 1px solid #ddd;
                    margin-top: 16px;
                    &:hover .indentContent>.title{
                    	color: #1487f4;
                    }
                    .indentContent{
                    	display: flex;
                    	justify-content: center;
                    	flex-direction: column;
                    	align-items: flex-start;
                    	margin-left: 10px;
                    	.title{
                    		transition: all .3s;
                    	}
                    	.introduce{
                    		width: 200px;
                    		height: 100%;
                    		line-height: 16px;
                    		margin-top: 8px;
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    font-size: 14px;
						    text-align: left;
						    color: #888;
                    	}
                    }
				}
			}
			.categoryPartThree{

				margin: 20px auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20px ;

				.tag{

					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #b0b0b0;
                    .item{

						margin-right: 30px;
						text-align: center;
	                    width: 84px;
	                    height: 30px;
	                    line-height: 30px;
	                    padding-bottom: 10px;
						cursor: pointer;
						position: relative;

						&:hover .indicate{
		                    transition: all .3s linear;
		                    width: 100%;
							bottom: -1px;
							text-align: center;
							background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
							opacity: 1;
							left: 0;
						}
					    .indicate{
					    	width: 20%;
					    	height: 2px;
					    	position: absolute;
					    	bottom: -1px;
					    	left: 40%;
					    	opacity: 0;
					    	transition: all .3s linear;
					    	background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
					    }
                    }
				}

				.indent{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    position: relative;
				}

				.indent>*{
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-items: center;
                    width: 200px;
                    height: 150px;
                    box-sizing: border-box;
                    padding: 10px;
                    cursor: pointer;
                    margin-top: 16px;
                    transition: all 1s;
                    .img{
                    	overflow: hidden;
                    	height: 120px;
                    	width: 200px;
                    .imgSrc{
                    	width: 200px;
                    	height: 120px;
                    	transition: all .3s;
                    }
                    }
                    .indentContent{
                    	h3{
                    		font-size: 18px;
                    		font-weight: 600;
                    		transition: all .3s;
                    		box-sizing: border-box;
                    		// padding: 10px 50px;
                    		margin-bottom: -80px;
                    	}
                    	&:hover{
                    		color: #218af1;
                    	}
                    }
                    &:hover .imgSrc{
                        transform: scale(1.2);
                        transition: all .3s;
                    }

                    &:first-child{
                    	width: 460px;
                    	height: 400px;
                    	overflow: hidden;
                    	margin-top: 0px;
                    	padding: 0px;
                        .img{
                        	width: 460px;
                        	height: 320px;
                        	margin-top: 26px;
                        	.imgSrc{
	                    		width: 460px !important;
	                    		height: 320px !important;

	                    	}
                        }

                    }
                    &:nth-child(5){
                    	position: absolute;
                    	top: 50%;
                    	left: 43%;
                    }                    
                    &:nth-child(6){
                    	position: absolute;
                    	top: 50%;
                    	left: 62.5%;
                    }                    
                    &:nth-child(7){
                    	position: absolute;
                    	top: 50%;
                    	left: 82%;
                    }
                    &:hover .indentContent>.title{
                    	color: #1487f4;
                    }
                    .indentContent{
                    	display: flex;
                    	justify-content: center;
                    	flex-direction: column;
                    	align-items: flex-start;
                    	margin-left: 10px;
                    	.title{
                    		transition: all .3s;
                    		text-align: left;
                    	    overflow: hidden;
                    	    width: 100%;
		            		text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
                    	}
                    	.introduce{
                    		width: 200px;
                    		height: 26px;
                    		margin-top: 8px;
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    font-size: 14px;
						    text-align: left;
						    color: #888;
                    	}
                    }
				}
			}
			.categoryPartFour{

				margin: 20px auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20px ;

				.tag{

					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #b0b0b0;
                    .item{

						margin-right: 30px;
						text-align: center;
	                    width: 84px;
	                    height: 30px;
	                    line-height: 30px;
	                    padding-bottom: 10px;
						cursor: pointer;
						position: relative;

						&:hover .indicate{
		                    transition: all .3s linear;
		                    width: 100%;
							bottom: -1px;
							text-align: center;
							background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
							opacity: 1;
							left: 0;
						}
					    .indicate{
					    	width: 20%;
					    	height: 2px;
					    	position: absolute;
					    	bottom: -1px;
					    	left: 40%;
					    	opacity: 0;
					    	transition: all .3s linear;
					    	background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
					    }
                    }
				}

				.indent{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    position: relative;
				}

				.indent>*{
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: row;
                    align-items: center;
                    width: 46%;
                    box-sizing: border-box;
                    padding: 100px;
                    cursor: pointer;
                    margin-top: 16px;
                    transition: all 1s;
                    padding: 0px;
                    margin-top: 0px;
                    line-height: 20px;

                    .indentContent{
                    	h3{
                    		font-size: 18px;
                    		font-weight: 600;
                    		transition: all .3s;
                    		box-sizing: border-box;
                    		// padding: 10px 50px;
                    	}
                    	&:hover{
                    		color: #218af1;
                    	}
                    }

                    .indentContent{
                    	display: flex;
                    	justify-content: space-between;
                    	width: 100%;
                    	flex-direction: row;
                    	align-items: center;
                    	margin-left: 10px;
                    	position: relative;
                    	margin-top: 16px;
                    	&:after{
                    		content: "";
                    		position: absolute;
                    		left: -15px;
                    		top: 50%;
                    		width: 3px;
                    		height: 3px;
                    		border-radius: 50%;
                    		background-color: #000;
                    	}
                    	.title{
                    		transition: all .3s;
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 1;
						    width: 60%;
						    text-align: left;
                    	}
                    	.createtime{
                    		font-size: 14px;
                    		color: #888;
                    		text-align: left;
                    		width: 35%;
                    	}
                    	.introduce{
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
                    		width: 200px;
                    		height: 26px;
                    		margin-top: 8px;
						    font-size: 14px;
						    text-align: left;
						    color: #888;
                    	}
                    }
				}
			}
		    .categoryPartFive{

				margin: 20px auto;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20px ;

				.tag{

					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #b0b0b0;
                    .item{

						margin-right: 30px;
						text-align: center;
	                    width: 84px;
	                    height: 30px;
	                    line-height: 30px;
	                    padding-bottom: 10px;
						cursor: pointer;
						position: relative;

						&:hover .indicate{
		                    transition: all .3s linear;
		                    width: 100%;
							bottom: -1px;
							text-align: center;
							background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
							opacity: 1;
							left: 0;
						}
					    .indicate{
					    	width: 20%;
					    	height: 2px;
					    	position: absolute;
					    	bottom: -1px;
					    	left: 40%;
					    	opacity: 0;
					    	transition: all .3s linear;
					    	background: linear-gradient(to right, #0062ff 0%, #00a0ec 100%);
					    }
                    }
				}

				.indent{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;

				}
				.indent>*{
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: row;
                    align-items: center;
                    width: 360px;
                    height: 80px;
                    box-sizing: border-box;
                    padding: 10px;
                    cursor: pointer;
                    border: 1px solid #ddd;
                    margin-top: 16px;
                    img{
                    	width: 50px;
                    	height: 50px;
                    }
                    &:hover .indentContent>.info>.title{
                    	color: #1487f4;
                    }
                    .indentContent{
                    	display: flex;
                    	justify-content: center;
                    	flex-direction: column;
                    	align-items: flex-start;
                    	margin-left: 10px;
                        .info{
                        	display: flex;
                        	justify-content: space-between;
                        	flex-direction: row;
                        	align-items: center;
                        	width: 280px;
	                    	.title{
	                    		transition: all .3s;
	                    	    overflow: hidden;
							    text-overflow: ellipsis;
							    -webkit-box-orient: vertical;
							    display: -webkit-box;
							    -webkit-line-clamp: 1;
							    text-align: left;
	                    	}
	                    	.time{
	                    		font-size: 12px;
	                    		color: #888;
	                    	}
                        }
                    	.introduce{
                    		width: 260px;
                    		height: 26px;
                    		margin-top: 8px;
                    	    overflow: hidden;
						    text-overflow: ellipsis;
						    -webkit-box-orient: vertical;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    font-size: 14px;
						    text-align: left;
						    color: #888;
                    	}
                    }
				}
			}			
		}
	}
</style>
<style>
	.el-icon-arrow-left{
		font-weight: 800;
	}
	.el-icon-arrow-right{
		font-weight: 800;
	}
    .is-active >*{
    	background-color: #fff;
    }
	.el-carousel__button{
		background-color: #1487f4;
		height: 2px;
		margin-bottom: 10px;
	}
	..el-carousel{
		/*background-color: #fff;*/
	}
</style>