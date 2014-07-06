$(document).ready(function(){

    var marginTop;
    if($(window).width()<980){
        marginTop = 210
    }else{
        marginTop = 180
    }
	$('.post__article').scrollNav({
		headlineText: '',
		topLinkText: 'Top',
		fixedMargin: 140,
		scrollOffset: marginTop
	});
})
