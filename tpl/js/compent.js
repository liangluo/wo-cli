//引入组件
loadScript("book"); //书籍模式
loadScript("title"); //标题模式
loadScript("downLoad"); //标题模式





//定义组件的引用
function loadScript(name) {
    document.write(' <script src="../compent/' + name + '.js"> </script>')
    document.write('<link rel="stylesheet" href="../compent/' + name + '.css" />')
}

//动态加载js
function loadJs(name) {
    document.write(' <script src="../js/' + name + '.js"> </script>')

}

//定义公共的方法
function getCookie(key) {
    var strCookie = document.cookie;
    var arrayCookie = strCookie.split(";");
    var numCookies = arrayCookie.length;
    for (var i = 0; i < numCookies; i++) {
        var tmpKeyValue = arrayCookie[i].split("=");
        if (key == tmpKeyValue[0].trim())
            return unescape(tmpKeyValue[1]);
    }
    return "";
}

//设置cookie
function addCookie(key, value, expiresTime) {
    var cookieString = key + "=" + escape(value);
    if (expiresTime > 0) {
        var date = new Date();
        date.setTime(date.getTime() + expiresTime);
        cookieString = cookieString + ";expires=" + date.toGMTString() + ";path=/";
    }
    document.cookie = cookieString;
}

function setStorage(key, value, duration) {
    var data = {
        value: value,
        expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
    };
    localStorage[key] = JSON.stringify(data);
}

function getStorage(key) {
    var data = localStorage[key];
    if (!data || data === "null") {
        return null;
    }
    var now = this.getCurrentTimeStamp();
    var obj;
    try {
        obj = JSON.parse(data);
    } catch (e) {
        return null;
    }
    if (obj.expiryTime === 0 || obj.expiryTime > now) {
        return obj.value;
    }
    return null;
}

function removeStorage(key) {
    localStorage.removeItem(key);
}