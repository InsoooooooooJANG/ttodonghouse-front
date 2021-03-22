<template>
   <div id="Welcome">
        <img class="img-fluid " src="../assets/ttodong.jpg" width="400px" height="400">
            
        <div class="col-sm banner">
            <vue-carousel :data="BannerArray"></vue-carousel>
        </div>
    </div>
</template>

<script>
import VueCarousel from '@chenfengyuan/vue-carousel';


export default {
  name: 'Welcome',
  components:{
      VueCarousel
  },
  data () {
    return {
        BannerArray: Array
    }
  },
  created(){
    this.BannerArray = new Array;
    this.BannerArray.push('<img class="img-fluid " src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg" width="900px" height="600px" />');
    this.BannerArray.push('<img class="img-fluid " src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg" width="900px" height="600px"/>');
    this.BannerArray.push('<img class="img-fluid " src="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg" width="900px" height="600px"/>');
    
  }
}
</script>
