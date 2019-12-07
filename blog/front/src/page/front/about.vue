<template>
	<div class="about">
		<div class="content">
			<div class="nav" @click="goAbout">关于博主</div>
			<div class="main">
			      <div class="info">
			      	<p class="title">个人简介</p>
			      	<p class="photo"></p>
			      	<p class="name">张晓均</p>
			      	<p class="contact">联系方式：543440192@qq.com</p>
			      	<p class="from">来自福建省泉州市，现居住于厦门。</p>
			      	<p class="from">爱生活、爱艺术、爱书画、爱音乐、爱设计、爱编程。</p>
			      	<p class="from">人生百态，笑口常开，秉承自我，谨慎独行。</p>
			      	<p class="from">静觅，静静寻觅生活的美好。</p>
			      </div>
			      <div class="skill">
			      	<p class="title">我的技能树</p>
			      	<div class="front">
			      		<div>
			      			<div class="name">
			      				<span>js</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 74%;background-color: #49C085"></span>                            	
                            </div>
			      		</div>
			      		<div>
			      			<div class="name">
			      				<span>express</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 66%;background-color: #f2b63c"></span>                            	
                            </div>
			      		</div>
			      		<div>
			      			<div class="name">
			      				<span>vue</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 75%;background-color: #7782D1"></span>                            	
                            </div>
			      		</div>
			      		<div>
			      			<div class="name">
			      				<span>css3</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 80%;background-color:rgb(245, 138, 135)"></span>                            	
                            </div>
			      		</div>
			      		<div>
			      			<div class="name">
			      				<span>mysql</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 60%;background-color:skyblue"></span>                            	
                            </div>
			      		</div>
			      		<div>
			      			<div class="name">
			      				<span>jQuery</span>
			      			</div>
                            <div class="progress">
				      			<span></span>
				      			<span style="width: 75%;background-color:#6F92FF"></span>                            	
                            </div>
			      		</div>
			      	</div>
			      </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"about",
		data(){
			return{

			}
		},
		methods:{
			goAbout(){
                history.go(0);
			}
		}
	}
</script>

<style lang="less" scoped>
	.about{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		.content{
			width: 76%;
			height: 100%;
			background-color: #fff;
			margin: 50px auto;
			.nav{
				text-align: left;
				font-size: 20px;
                color: #444;
                box-sizing: border-box;
                padding: 30px 0px 16px 20px;
                border-bottom: 1px solid #eee;
			}
			.main{

				.info{
	                .title{
	                	font-size: 18px;
	                	background-color: #fbfbfb;
	                	color: #555;
	                	margin: 50px 0px 20px -4px;
					    padding: 10px 20px 9px 10px;
					    line-height: 30px;
					    border-left: 4px solid #00a67c;
					    font-weight: 600;
	                }
	                .photo{
	                	width: 100px;
	                	height: 100px;
	                	border-radius: 100%;
	                	background-image: url(../../../static/images/DSC03394.jpg);
	                	background-size: 100%;
	                	background-position: 0px -4px;
	                	background-repeat: no-repeat;
	                	margin: 0 auto;
	                }
	                .contact{
	                	font-size: 18px;
	                	color: #555;
	                	font-weight: 600;
	                	margin-top: 20px;	                	
	                }
	                .name{
	                	font-size: 18px;
	                	color: #555;
	                	font-weight: 600;
	                	margin-top: 20px;
	                }
	                .from{
	                	font-size: 16px;
	                	color: #555;
	                	margin-top: 16px;
	                	&:last-child{
	                		margin-bottom: 40px;
	                	}
	                }
	            }
	            .skill{
	                .title{
	                	font-size: 18px;
	                	background-color: #fbfbfb;
	                	color: #555;
	                	margin: 50px 0px 20px -4px;
					    padding: 10px 20px 9px 10px;
					    line-height: 30px;
					    border-left: 4px solid #00a67c;
					    font-weight: 600;
	                }
	                .front{
	                	display: flex;
	                	justify-content: center;
	                	flex-direction: column;
	                	align-items: center;
	                	width: 700px;
	                	margin: 0 auto;
	                	div{
	                		display: flex;
	                		justify-content: center;
	                		flex-direction: row;
	                		align-items: center;
	                		width: 700px;
	                		margin-bottom: 20px;
	                		.name{
	                			width: 100px;
	                			height: 25px;
	                			line-height: 25px;
	                			margin-bottom: 20px;
	                		}
                            .progress{
                            	position: relative;
                            	width: 555px;
	                            span{
		                			&:nth-child(1){
		                				background-color: #f2f2f2;
		                				width: 555px;
		                				height: 25px;
		                			}
		                		}	                	    
		                		span{
		                			&:nth-child(2){
		                				height: 25px;
		                				position: absolute;
		                				left: 0;
		                			}
		                		}
                            }
	                	}
	                }
	            }
			}
		}
	}
</style>