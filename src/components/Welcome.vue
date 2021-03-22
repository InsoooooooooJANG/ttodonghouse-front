<template>
  <div id="Welcome">
    <img class="img-fluid " src="../assets/ttodong.jpg" width="400px" height="400">
    <Nav></Nav>
    <div class="col-sm banner">
        <vue-carousel :data="BannerArray"></vue-carousel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./Nav";
import Footer from "./Footer"
import VueCarousel from '@chenfengyuan/vue-carousel';


export default {
  name: 'Welcome',
  components:{
      Nav,
      Footer,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Welcome{
    text-align: center;
}

.banner{
    margin-top:40px;
}

</style>
