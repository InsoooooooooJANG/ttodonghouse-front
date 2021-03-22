<template>
    <div class="pic_container">
        <img class="pics" v-for="(pic, index) in pictures" :key="index" :src="pic"/>
    </div>
</template>
<script>
    export default{
        name:"Pics",
        data(){
            return{
                pictures:[]
            }
        },
        created(){
            //todo : get pictures from server
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
            this.pictures.push("https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg");
        }
    }
</script>

<style scoped>
    .pic_container{
        padding-left:100px;
        padding-right:100px;
    }
    .pics{
        width: 300px;
        height:300px;
        float:left;
        margin:10px;
    }
</style>