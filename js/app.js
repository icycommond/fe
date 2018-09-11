var app = new App();
app.imgArr = [
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
	'close.png',
];

// var sounds = {
// 	bgm: 'bgm.mp3',
// }
// var audio = {};
// $.each(sounds,function(i,n){
// 	var a;
// 	a = document.createElement('audio');
// 	a.src = CDN + 'media/' + n;
// 	a.load();
// 	audio[i] = a;
// });
// audio.bgm.loop = 'loop';
// document.addEventListener("WeixinJSBridgeReady", function () {
// 	audio.bgm.play();
// }, false);
var vm = new Vue({
	el: '#wrap',
	data: {
		progress: 0,
	},
	methods: {

	},
	watch: {

	},
	computed: {

	},
	created: function(){
		app.loadImg(0, function(n){
			vm.progress = n;
		}, function(){
			vm.progress = 100;
			console.log('loading done');
			// app.pageTo('#index')
		});
	},
});

$(function(){
	//音乐
	// $('#music').on('touchend', function() {
	// 	$('#music').toggleClass('on');
	// 	if ($('#music').eq(0).hasClass('on')) {
	// 		audio.bgm.play();
	// 	} else {
	// 		audio.bgm.pause();
	// 	}
	// })

	// $('#abc').hammer({
	// 	recognizers: [
	// 		[Hammer.Swipe, {
	// 			direction: Hammer.VERTICAL
	// 		}],
	// 	]
	// }).on('swipeup', function() {
	// 	console.log('up');
	// }).on('swipedown', function(){
	// 	console.log('down');
	// });
});
function later(fx,delay){
	app.timer = setTimeout(fx,delay);
}
function updateTitle(title){
	var $body = $('body');
	document.title = title;
	var $iframe = $('<iframe style="display:none" src="img/music.png"></iframe>');
	$iframe.on('load',function() {
	    later(function() {
	        $iframe.off('load').remove();
	    }, 0);
	}).appendTo($body);
}
