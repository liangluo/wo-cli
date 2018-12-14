<template>
    <div class="mod-title">
        <div class="left">{{titleName}}</div>
        <div class="right" v-if="titleMore==true"><a href="javascript::"  @click.prevent="openMorePage(titleName,resId,cataType)">更多</a></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { common } from "../util/golobal";
export default {
  name: "TopTitle",
  props: {
    //   四个参数：标题，是否显示更多，点击更多带的参数,点击更多带的参数
    titleName: String,
    titleMore: Boolean,
    resId: Number,
    cataType: Number
    
  },
  computed: mapState(["channelid"]),
  methods: {
    openMorePage:function(title, cataidx, type){
          
        if(type==2){
            window.location.href = common.jumpUrl + 'month/list?title=' + title+"%26pageSize=100";
            // this.$router.openPage(common.jumpUrl + 'month/list?title=' + title+"&pageSize=100");
        }else{
            window.location.href = common.jumpUrl +"catalog/listcontents?title=" + title+"%26cataidx="+cataidx+"%26channelid="+this.channelid;
            //  this.$router.openPage(common.jumpUrl +"catalog/listcontents?title=" + title+"&cataidx="+cataidx+"&channelid="+this.channelid);
        }   
    }
  }
};
</script>

<style  lang="scss" scoped>
.mod-title {
  margin: 0.3rem 0 0 0;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .left {
    line-height: 0.4rem;
    font-size: 0.36rem;
    color: #333;
    padding-left: 0.3rem;
    font-weight: 600;
    position: relative;
    &:before {
      content: "";
      width: 0.2rem;
      height: 0.2rem;
      background-image: url(../assets/icon-red.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      left: 0;
      top: 0.1rem;
      border-radius: 0.02rem;
    }
  }
  .right {
    line-height: 0.3rem;
    font-size: 0.26rem;
    color: #999;
    padding-right: 0.3rem;
    position: relative;
    a {
      color: #999;
    }
    &:before {
      content: "";
      width: 0.4rem;
      height: 0.4rem;
      background-image: url(../assets/icon-more.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      right: -0.1rem;
      top: -0.05rem;
    }
  }
}
</style>
