<template>
	<div class="nav">
        <div class="edit">
        	<p class="userName">欢迎回来，xxxx</p>
		    <p class="logOut" @click="goOut">退出</p>
        </div>
	</div>
</template>

<script>
	import {mapActions} from "vuex"
	export default{
		name:"top-nav",
		data(){
           return{

           }
		},
		methods:{
			...mapActions(["doLoginOut"]),
		    goOut(){
				let result = this.$confirm("是否退出","提示",{type:'warning'}).then(()=>{
					this.doLoginOut();
					this.$message('退出登录');
					this.$router.replace({
						name:"login"
					});
				}).catch(()=>{
					this.$message('取消');
				});
				// console.log(result)
			}
		}
	}
</script>

<style lang="less" scoped>
	 .nav{
	 	width: 100%;
	 	height: 100%;
	 	.edit{
	 		display: flex;
	 		justify-content: flex-end;
	 		flex-direction: row;
	 		align-items: center;
	 		background-color: skyblue;
	 		box-sizing: border-box;
	 		padding: 20px 20px;
	 		.userName{
	 			font-size: 14px;
	 		}
	 		.logOut{
	 			margin-left: 30px;
	 			font-size: 12px;
	 			cursor: pointer;
	 			text-decoration: underline;
	 			transition: all .3s;
	 			&:hover{
	 				color: #ff6700;
	 			}
	 		}
	 	}
	 }
</style>