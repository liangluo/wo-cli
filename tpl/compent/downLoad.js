var _html = `<div  class="downFloat" v-if="downLoadShow">
                <div  class="warp">
                    <img  src="../img/down-closed.png" class="close" @click="closeDown">
                    <img  src="../img/down-logo.png" class="logo">
                    <div  class="tagline">
                        <p  class="headline">沃阅读客户端</p>
                        <p  class="subHeadline">联通手机用户免流量阅读</p>
                    </div>
                    <div  class="downBtn"  @click="downApp">下载</div>
                </div>
            </div>`

loadJs('downApp')
var download = Vue.component('download', {
    data: function () {
        return {
            downLoadShow:!!getStorage("downLoadShow")?getStorage("downLoadShow"):true,
        }
    },
    props: {
    },
    template: _html,
    methods: {
        closeDown: function () {
            this.downLoadShow=false;
            setStorage("downLoadShow",false,60000); //一分钟后改变设e置
        },
        downApp:function(){
            openworeader();
        }
    }
})