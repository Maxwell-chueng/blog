<template>
  <div class="table">
    <el-row>
      <el-button style="float: left;" class="add" type="primary" @click="addArticle">产品添加</el-button>
    </el-row>
    <el-table v-if="this.articleData.length>0"  :data="articleData" style="width: 100%" >
      <el-table-column prop="id" label="id"  align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="title" label="标题" align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="introduce" label="简述" align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="category" label="类别" align="center" header-align="center">
      </el-table-column>      
      <el-table-column prop="is_carousel" label="是否轮播" align="center" header-align="center">
      </el-table-column>      
      <el-table-column prop="is_header" label="是否头部" align="center" header-align="center">
      </el-table-column>
      <el-table-column prop="detail" label="文章详情" align="center" header-align="center" width="480">
      </el-table-column>
      <el-table-column prop="createtime" label="创建时间" align="center" header-align="center">
      </el-table-column>      
      <el-table-column prop="imgSrc" label="文章图片" min-width="20%" align="center" header-align="center" width="180">
        <!-- 图片的显示 -->
        <template slot-scope="scope">
          <img :src="scope.row.imgSrc" @click="aaa(scope.row)" min-width="70" height="70" />
        </template>
      <!-- 操作 -->
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="del(scope.$index, scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="openEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 提示框 -->


    <el-dialog :title="titles" :visible.sync="alertShow" :modal="true" class="bounce">
      <el-form :model="editMsg">
        <el-form-item label="标题">
          <el-input v-model="editMsg.title" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="简述" >
          <el-input type="textarea" :rows="7" resize="none"  v-model="editMsg.introduce" autocomplete="autoComplete"></el-input>
        </el-form-item>
          <!-- 下拉选框 -->
         <el-form-item label="类别" class="isCarousel">
          <el-select v-model="editMsg.category" placeholder="请选择类名">
            <el-option
              v-for="cate in categoryName"
              :key="cate.name"
              :label="cate.name"
              :value="cate.id">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- checkbox -->
          <el-checkbox ref="tree"  v-model="editMsg.is_carousel" :border=true  class="checkBox" >是否轮播</el-checkbox>            
          <el-checkbox ref="glass"  v-model="editMsg.is_header" :border=true  class="checkBox" >是否头条</el-checkbox>       
        <el-form-item label="文章细节" class="detial">
          <el-input type="textarea" :rows="7" resize="none" v-model="editMsg.detail" autocomplete="autoComplete"></el-input>
        </el-form-item>
        <el-form-item label="图片">
        </el-form-item>
        <el-upload class="upload-demo" action="string" :http-request = "up" list-type="picture" ref="upload">
          <el-button class="up" size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button align="left" @click="alertShow = false">取 消</el-button>
        <el-button type="primary" @click="alertShow = false;edit()">确 定</el-button>
      </div></el-dialog>
    <!-- 分页 -->
  </div>
</template>

<script>
	export default{
		name:"blog-article",
		created(){
            this.getArticle();
            this.getCategory();
		},
		beforeUpdate(){
             
		},
		data(){
			return{
                articleData:"",
                alertShow:false,
                titles:"",
                editMsg:"",
                categoryName:"",
                category:"",
                myFiles:[],
                tag:""
			}
		},
		methods:{
			async getArticle(){
                 let result = await this.axios("/api/back/article");
                 result = result.data;
                 for(let i=0;i<result.length;i++){
                 	let categoryId = result[i].category_id;
                 	let id = result[i].id;
                 	 let category = await this.axios.post("/api/back/category",{
                 	 	id:categoryId
                 	 });
                 	 let imgSrc = await this.axios.post("/api/back/article/getImg",{
                 	 	id:id
                 	 })
                 	 category = category.data[0].name;
                 	 if(imgSrc.data.length == 0 || imgSrc.data == "" || imgSrc.data[0].img_src == null ){
                 	 	
                 	 }else{
                 	    imgSrc = imgSrc.data[0].img_src;
                 	 }
                 	 result[i].category = category;
                 	 result[i].imgSrc = imgSrc;
                 }
                 this.articleData = result;
			},
			async getCategory(){
				let result = await this.axios("/api/back/category/getCategory");
				this.categoryName = result.data;
			},
			up(param) {
               this.myFiles.push(param.file);
            },
            openEdit(index,val){
                 this.alertShow = true;
                 this.tag = "edit"
                 let a = val;
                 a = JSON.stringify(a);
                 a = JSON.parse(a);
                     if(a.is_carousel == 1){
                       a.is_carousel = true;
                     }else if(a.is_carousel == 0){
                       a.is_carousel = false;
                     }
                     if(a.is_header == 1){
                     	 a.is_header = true;
                     }else if(a.is_header == 0){
                     	 a.is_header = false;
                     }
                 this.editMsg = a;
                 this.titles = "编辑";
            },
			async edit(index,val){
				if(this.tag == "edit"){
            let formData = new FormData();
		        for (let i = 0; i < this.myFiles.length; i++) {
		          formData.append("icons", this.myFiles[i])
		        }
		        formData.append("id", this.editMsg.id);
		        formData.append("title", this.editMsg.title);
		        formData.append("introduce", this.editMsg.introduce);

		        if(typeof this.editMsg.category == "string"){
		          formData.append("category_id", this.editMsg.category_id);
		        }else if(typeof this.editMsg.category == "number"){
		          formData.append("category_id", this.editMsg.category);	
		        }

		        formData.append("is_carousel", this.editMsg.is_carousel);
            formData.append("is_header", this.editMsg.is_header);
		        formData.append("detail", this.editMsg.detail);
		        await this.axios.post("/api/back/article/edit", formData);
		        this.$message("修改成功");				
				}else if(this.tag == "add"){
			    let formData = new FormData();
		        for (let i = 0; i < this.myFiles.length; i++) {
		          formData.append("icons", this.myFiles[i])
		        }
		        formData.append("title", this.editMsg.title);
		        formData.append("introduce", this.editMsg.introduce);
		        formData.append("category_id", this.editMsg.category);
            if(this.editMsg.is_carousel == undefined){
              this.editMsg.is_carousel = -1;
              formData.append("is_carousel", this.editMsg.is_carousel);    
            }else{
  		        formData.append("is_carousel", this.editMsg.is_carousel);
            }
            if(this.editMsg.is_header == undefined){
              this.editMsg.is_header = -1;
              formData.append("is_header", this.editMsg.is_header);    
            }else{
              formData.append("is_header", this.editMsg.is_header);
            }  
		        formData.append("detail", this.editMsg.detail);
		        if(this.editMsg.category == undefined || this.myFiles == "" || this.myFiles == null || this.myFiles.length == 0 || this.editMsg.category == undefined || this.editMsg.detail == undefined || this.editMsg.title == undefined || this.editMsg.introduce == undefined){
		        	this.$message('请确保文章填写完整');
		        }else{
		            await this.axios.post("/api/back/article/add", formData);
		            this.$message("新增成功");
		        }
		        this.myFiles = [];
		        this.getArticle();
                this.getCategory();
                this.$refs.upload.clearFiles();

				}
		        this.myFiles = [];
		        this.getArticle();
                this.getCategory();
                this.$refs.upload.clearFiles();
      
			},
			async delSomeOne(index,val){
                 let {id} = val;
                 await this.axios.post("/api/back/article/delete",{
                 	id:id
                 });
                 this.getArticle();
                 this.getCategory();
			},
			 del(index,val) {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.delSomeOne(index,val)
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		      },
			addArticle(){
				setTimeout(() => {
                   this.$refs.tree.selfModel = "";
                   this.$refs.glass.selfModel = "";
                },0)
                this.alertShow = true;
                this.editMsg = {};
                this.titles = "添加";
                this.tag="add";
			},
		}
	}
</script>
<style  lang="less" scoped>
.checkBox{
       margin-top: 100px;
       margin-left: -670px;        
} 
.isCarousel{
	height: 100px;
	float: left;
}
.detial{
	margin-top: 30px;
}
.up{
	
}
</style>