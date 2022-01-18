/* object */
$(document).ready(function(){
	
	$(".tab .tab-list > .tab-item").on("click",function(){
		var idx = $(this).index()
		$(this).parent().find('.tab-item').removeClass('on');
		$(this).addClass('on');

		$(this).parents('.tab').find('.tab-conts .tab-cont').removeClass('on')
		$(this).parents('.tab').find('.tab-conts .tab-cont:eq('+idx+')').addClass('on')
	})
	
	$(".hamberger").on("mouseover",function(){
		$(".gnb-dep2").slideDown(200)
	})

	$(".gnb-dep2 .close").on("click",function(){
		$(".gnb-dep2").slideUp(200)
	})

	$("input[type=file]").on("change",function(e){
		$(this).siblings(".file-txt").val($(this)[0].files[0].name)
		
		if ($(this).siblings('.file-img').length > 0 ){
			var reader = new FileReader();
			var item = new Image;
			$(this).siblings('.file-img').append(item);
			var el = $(this).siblings('.file-img').find('img')
			el.attr('width','100%')
			reader.onload = function(e) {
				el.attr('src', e.target.result);
			}
			reader.readAsDataURL($(this)[0].files[0]);
		}
	})

	$(".mb-header .right span.hamberger").on("click",function(){
		if($(this).hasClass("close")){
			$(this).removeClass("close")
			$(".mb-gnb").removeClass("on")
			$(body).removeClass("scrollprevent")
			//$(body).attr("style","height:100vh; overflow:hidden")
		}else{
			$(this).addClass("close")
			$(".mb-gnb").addClass("on")
			$(body).addClass("scrollprevent")
		}
	})


})

//스크롤이벤트
function scrollEvent(){

}

function popup() {
    $('.layer-popup .popup').each(function() {
        var popW = $(this).outerWidth();
        var popH = $(this)[0].scrollHeight;
        $(this).css({'margin-left': -popW / 2, 'margin-top': -popH / 2}).attr('data', popH);

        var winH = $(window).height();
        var data = Number($(this).attr('data'));
        if (data > winH) {
            $(this).closest('.layer-popup').addClass('h-full');
        } else {
            $(this).closest('.layer-popup').removeClass('h-full');
        }
    });
}
