var wxData = {

};

var touchpath = touchpath || "https://m.iread.wo.cn/touchactivity";

//cbw20150819为link增加channelid
wxData.shareCallBack = function() {
	//$.post(touchpath+"/wechat/shareCallBack.action?isstat=false");
}

$.ajax({
	url : touchpath + "/share/weixinShare.action?isstat=false&date="
			+ new Date().getTime(),
	type : 'POST',
	data : {
		'url' : window.location.href.split("#")[0]
	},
	async : true,
	dataType : 'json',
	timeout : 20000,
	complete : function() {
	},
	success : function(result) {
        console.log(result);
		if (result != null && result != "" && result.result == true) {
			result.signature = result.signature.toLowerCase();
			wx.config({
				debug : false,
				appId : result.appId,
				timestamp : result.timestamp,
				nonceStr : result.nonceStr,
				signature : result.signature,
				jsApiList : [ 'checkJsApi', 'onMenuShareTimeline',
						'onMenuShareAppMessage', 'onMenuShareQQ',
						'onMenuShareWeibo' ]
			});
			wx.ready(function() {
				wx.onMenuShareTimeline({
					title : wxData.title,
					link : wxData.link,
					imgUrl : wxData.imgUrl,
					success : wxData.shareCallBack
				});
				wx.onMenuShareAppMessage({
					title : wxData.title,
					desc : wxData.desc,
					link : wxData.link,
					imgUrl : wxData.imgUrl,
					type : wxData.type,
					success : wxData.shareCallBack
				});
				wx.onMenuShareQQ({
					title : wxData.title,
					desc : wxData.desc,
					link : wxData.link,
					imgUrl : wxData.imgUrl,
					success : wxData.shareCallBack
				});
				wx.onMenuShareWeibo({
					title : wxData.title,
					desc : wxData.desc,
					link : wxData.link,
					imgUrl : wxData.imgUrl,
					success : wxData.shareCallBack
				})
			});
		}
	},
	error : function(XMLHttpRequest, textStatus, errorThrown) {
	}
});
