var _html = `<div v-if="shareShow" @click="closeSharePopup">
                <div class="popup share-popup close" v-if="noWxShare">
                    <div class="img">
                        <img src="../img/pop_bg_2.png" alt="">
                    </div>
                </div>
                <div class="popup weChat-popup close" v-else>
                    <div class="img">
                        <img src="../img/pop_bg_1.png" alt="">
                    </div>
                </div>
            </div>`;
loadJs('jweixin')
loadJs('wx.share')
var share = Vue.component('share', {
    data: function () {
        return {
            noWxShare:true,
        }
    },
    props: {
        shareShow: {
            type:Boolean,
            default: false
        },
    },
    
    mounted: function () {
        var shareLink = window.location.href.split("#")[0];
        var shareTitle   = '分享标题';
        var bookcover     = '../img/share.png';
        var shareContent = '分享描述';
        wxData={
            imgUrl: bookcover,
            link: shareLink,
            desc: shareContent,
            title: shareTitle,
            type: "link"
        };
        this.isWeixin();
    },
    template: _html,
    methods: {
        closeSharePopup:function(){
            this.name=null;
            this.usercode=null;
            this.existuser=true;
            this.$emit('update', false);
            $('html,body').removeClass("overhide");
        },
        isWeixin:function(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == "micromessenger"){
                this.noWxShare=false;
            }
        }
      
    },
})