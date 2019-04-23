
var _html = `<div class="_modact-login" id="_actlogin-box" v-if="loginShow">
<form id="loginForm" @submit="login">
    <div class="_login-box">
        <div class="_login-load" id="_login-load" :style="opacity:{{loading?1:0}}">
            <div class="_spinner">
                <div class="_circle _circle1 "></div>
                <div class="_circle _circle2"></div>
                <div class="_circle _circle3"></div>
                <div class="_circle _circle4"></div>
                <div class="_circle _circle5"></div>
                <div class="_circle _circle6"></div>
                <div class="_circle _circle7"></div>
                <div class="_circle _circle8"></div>
                <div class="_circle _circle9"></div>
                <div class="_circle _circle10"></div>
                <div class="_circle _circle11"></div>
                <div class="_circle _circle12"></div>
            </div>
        </div>
        <div class="_closed"  @click="_close"></div>
        <p class="_title">短信登录</p>
        <input type="text" maxlength="11" placeholder="请输入手机号" class="_telephone" id="_telephone"  v-model="name">
        <div class="_phonecode">
            <input type="text"  maxlength="8" placeholder="请输入验证码" class="_code" id="_code"  v-model.trim="usercode" >
            <div class="_getcode" id="_getCode"   @click="_getPhoneCode"  attr_getCode="0" :disabled="!show">
                <span v-show="show">获取验证码</span>
                <span v-show="!show" class="count">{{count}} s</span>
            </div>
        </div>
        <div class="_error" id="_error">{{ errors }}</div>
        <input type="submit" class="_login-btn" id="_login-btn"  value="立即登录" />
    </div>
</form>
</div>`






var login = Vue.component('login', {
data: function () {
return {
errors:'',
name: null,
usercode: null,
existuser:true,
show: true,
count: 60,
timer: null,
times:null,
loading:false,
}
},
props: {
loginShow: {
type:Boolean,
default: true
},
},
template: _html,
methods: {
_close: function() {
this.name = null;
this.usercode = null;
this.existuser = true;
this.$emit('update', false);
},
_showMessage:function(message,time){
var time=time?time:3000;
this.errors=message;
this.times = setTimeout(() => {  
this._timeOut();  
}, time);  
},
_timeOut:function(){
this.errors='';
},
_getPhoneCode:function(e){
clearInterval(this.times);
if (this.name==null || !this.name || this.name=="") {
this._showMessage("请输入手机号码");
return false;
}
//var reg = new RegExp(/^1(3[0-2]|5[56]|8[56]|4[5]|7[056])\d{8}$/); //匹配联通手机
var reg = new RegExp(/^1[0-9]{10}$/);//匹配手机号码
if (this.name!=null &&!reg.test(this.name)) {
this._showMessage("请输入正确的手机号码")
return false;
}
axios.post('https://m.iread.wo.cn/touchactivity/login/getVerifyCode.action?phoneNum=?phoneNum='+this.name).then((res)=>{
if (res.data.code == "0000") {
    this.existuser = res.data.message.existuser;
    if (this.existuser == null || this.existuser == "" || this.existuser == "undefined") {
        this.existuser = false;
    }
    this._showMessage("验证码发送成功");
    this.show=false;
    if (!this.timer) {
        this.count = 60;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <=60) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
      }
} else {
    this._showMessage(res.data.message);
    this.show=true;
}
})
.catch(function (error) {
console.log(error);
});

},
_login:function (e) {
e.preventDefault();
this.loading=true,
this.show=true;
if (this.name==null || !this.name || this.name=="") {
this._showMessage("请输入手机号码");
 return false;
}
//var reg = new RegExp(/^1(3[0-2]|5[56]|8[56]|4[5]|7[056])\d{8}$/); //匹配联通手机
var reg = new RegExp(/^1[0-9]{10}$/);//匹配手机号码
if (this.name!=null &&!reg.test(this.name)) {
this._showMessage("请输入正确的手机号码")
return false;
}
if (this.usercode==null || !this.usercode || this.usercode=="") {
_showMessage("请输入手机验证码");
return;
}
axios.post('https://m.iread.wo.cn/touchactivity/login/ajaxOneKeyLogin.action?phoneNum='+this.name+'&code='+this.usercode+'&existuser='+this.existuser).then((res)=>{
if (res.data.code == "0000") {
    $('#_login-load').css('opacity',0);
    this._showMessage('登录成功！');
    this._close();
    this.$emit('islogin', res.data.message.nickname);
    setStorage('phone',res.data.message.nickname)
} else {
    this._showMessage(res.data.message);
}
})
.catch(function (error) {
console.log(error);
});
}
},
})