<template>
	<ul class="sidebar">
		<router-link 
		v-for="(data,index) in sidebarData" 
		:to = "data.path" 
		 tag="li"
		 :key=index
		 >{{data.title}}
		</router-link>
	</ul>
</template>

<script>
	export default{
		name:"sidebar",
        data(){
        	return{
        		sidebarData:[{title:"文章管理",path:"/home/article"},{title:"作者管理",path:"/home/author"},{title:"分类管理",path:"/home/category"}]
        	}
        }
	}
</script>

<style lang="less" scoped>
    .router-link-active{
    	color: #fff;
    }
	.sidebar{
		border-top: 1px solid white;
		li{
			background-color: skyblue;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 20px 0;
			cursor: pointer;
			transition: all .3s;
			&:hover{
				color: pink;
			}
		}
	}
</style>