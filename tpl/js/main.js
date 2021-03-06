
new Vue({
    el: '#app',
    components: {
        book,
        toptitle,
        download,
        login,
        share,
      },
    data: {
        channelid: null, //请求数据  
        userid: null, //判断是否登陆  
        URL: "http://192.168.100.44:8091/comic/getSubjectDetail?pageId=", //接口
        loginShow:false,//是否显示登录窗口
        shareShow:false,//是否显示分享接口
        phone:null,//电话号码
        a:'免费好书',
        b:'猜你喜欢',
        bookdata:[{
                coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
                cntindex:"439425",
                cntname:"月儿弯弯",
                shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
                author:"洪晓婷",
                catename:"玄幻武侠",
                num:"3.4万"
            },{
                coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
                cntindex:"439425",
                cntname:"月儿弯弯",
                shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
                author:"洪晓婷",
                catename:"玄幻武侠",
                num:"3.4万"
            },{
                coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
                cntindex:"439425",
                cntname:"月儿弯弯",
                shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
                author:"洪晓婷",
                catename:"玄幻武侠",
                num:"3.4万"
            }
        ]
        
    },
    created:function(){
        var self = this;
        self.channelid = getCookie("channelid");
        self.userid = getCookie("userid") || '';
    },
    mounted: function () {
        this.phone=getStorage('phone');
    },
    methods: {
        loginDialog:function(e){
            this.loginShow=true;
            $('html,body').addClass("overhide");
        },
        hideLogin:function(){
            this.loginShow=false;
        },
        isLogin:function(data){
            this.phone=data;
        },
        shareDialog:function(){
            this.shareShow=true;
            $('html,body').addClass("overhide");
        },
        hideShare:function(){
            this.shareShow=false;
        },
    },
    filters: {
        //时间格式化
        formatDate: function (time) {
            function add(m) {
                return m < 10 ? '0' + m : m
            }
            var date = new Date(time);
            var Y = date.getFullYear();
            var M = date.getMonth() + 1;
            var R = date.getDate()
            return Y + "." + add(M) + "." + add(R);
        }
    }
});

