<template>
	<div class="footer">
         <div class="space">
         	
         </div>
         <div class="contain">
     			<span>Powered by Pizzasheep  © 2002-2019</span>
	             <span>本网站上所有的原创文章未经本人许可，不得用于商业用途及传统媒体。网络媒体转载请注明出处，否则属于侵权行为</span>
         </div>
	</div>
</template>

<script>
	export default{
		name:"blog-footer"
	}
</script>

<style lang="less" scoped>
.footer{
	.space{
		width: 100%;
		height: 50px;
		background-color: #f5f5f5;
	}
    .contain{
    	    display: flex;
		    justify-content: center;
		    flex-direction: column;
		    align-items: center;
		    width: 100%;
		    background-color: #333;
		    color: #fff;
		    box-sizing: border-box;
		    padding: 50px 0;
    }
}
	
</style>