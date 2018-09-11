$(function () {
    var url = 'https://bmw2.thefront.com.cn/weixports/getwxapi.php';
    var pram = {
        "request": {
            "body": { "url": window.location.href },
            "head": {
                "public_key": "1",
                "secret_key": "1",
                "timestamp": "1"
            }
        }
    }
    jQuery.get(url, pram, function(res){
        if(res.signPackage.appId != 'undefined'){
            app.res = res;
            wxConfig();
        }
    },'jsonp')
})
function wxConfig(){
    wx.config({
        debug: false,
        appId: app.res.signPackage.appId,
        timestamp: app.res.signPackage.timestamp,
        nonceStr: app.res.signPackage.nonceStr,
        signature: app.res.signPackage.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function(){
        wx.onMenuShareAppMessage({
            title: share.title,
            desc: share.desc,
            imgUrl: share.imgUrl,
            link: share.link,
            success: function(){
                ga('send','event','nav','share','message');
            }
        });
        wx.onMenuShareTimeline({
            title: share.timeline,
            imgUrl: share.imgUrl,
            link: share.link,
            success: function(){
                ga('send','event','nav','share','timeline');
            }
        });
    });
}
