
/**
 * 下载App
 *
 * [isMobile 判断平台]
 * @param test: 0:iPhone    1:Android
 */
function ismobile(test) {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if(window.location.href.indexOf("?mobile") < 0) {
            try {
                if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                    return '0';
                } else {
                    return '1';
                }
            } catch(e) {}
        }
    } else if(u.indexOf('iPad') > -1) {
        return '0';
    } else {
        return '1';
    }
};
var pla = ismobile(1);
var ua = navigator.userAgent;

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};

function isQQBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    return(ua.indexOf('QQBrowser') !== -1) ? true : false;
};

function createIframe() {
    var iframe = document.createElement("iframe");
    iframe.style.cssText = "display:none;width:0px;height:0px;";
    document.body.appendChild(iframe);
    return iframe;
};

function openworeader() {
    if(isWeiXin() || isQQBrowser()) {
        window.location.href = "http://m.iread.wo.cn/clientdl/sltOsList.action?ostype=-1";
    } else {
        if(pla == "1") {
            var loadIframe = createIframe();
            //没有安装应用会执行下面的语句
            var scheme_Adr = "zworeader://com.unicom.zworeader?h5Flag=4";
            loadIframe.src = scheme_Adr;
            var loadDateTime = Date.now();
            setTimeout(function() {
                var timeOutDateTime = Date.now();
                if(timeOutDateTime - loadDateTime < 2000) {
                    window.location.href = 'http://m.iread.wo.cn/clientdl/sltOsList.action?ostype=-1'
                }
            }, 600);
        } else if(pla == "0") {
            window.location.href = "iOSWoReader://";
            //没有安装应用会执行下面的语句
            var loadDateTime = Date.now();
            setTimeout(function() {
                var timeOutDateTime = Date.now();
                if(timeOutDateTime - loadDateTime < 2000) {
                    window.location.href = 'https://itunes.apple.com/cn/app/wo-yue-du/id592017529?mt=8';
                }
            }, 600);
        } else {
            console.log("woyuedu")
            window.location = 'http://m.iread.wo.cn/clientdl/sltOsList.action?ostype=-1'
        }
    }
}

