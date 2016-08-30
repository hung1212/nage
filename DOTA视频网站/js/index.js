//var list = document.querySelectorAll('.tebbed li')
//
//for(var i = 0; i < list.length; i++) {
//	list[i].index = i
//	list[i].addEventListener('click', function() {
//		console.log(this)
//	})
//}
//console.log('fangzehong')
function tab(index) {
	var ul = document.querySelector('.contents-left ul.cur')
	ul.classList.remove('cur')

	var arrUl = document.querySelectorAll('.contents-left ul')
	arrUl[index].classList.add('cur')

	var li = document.querySelector(".c-bbg .tetle907 li.cur")
	li.classList.remove('cur')

	var arrLi = document.querySelectorAll('.c-bbg .tetle907 li')
	arrLi[index].classList.add('cur')
}

function tab2(index) {
	document.querySelector('.box-right .picsdiv.cur').classList.remove('cur')
	document.querySelectorAll('.box-right .picsdiv')[index].classList.add('cur')

	var arrSrc = [
		'img/265409827629.jpg',
		'img/265172561639.jpg',
		'img/265502717766.jpg',
		'img/265396423964.jpg',
	]
	document.querySelector('.pics img').setAttribute('src', arrSrc[index])

}

//function _(select){
//	return document.querySelector(select)
//}

function tab3(index) {
	//	_('.heros .heros_left .psh span.cur').classList.remove('cur')
	//	document.querySelectorAll('.heros .heros_left .psh span')[index].classList.add("cur")

	$('.heros .heros_left .psh .cur').removeClass('cur')
	$('.heros .heros_left .psh span').eq(index).addClass('cur')
		//
	var arrp2 = [
		'Sentinel Strength--1',
		'Sentinel Agility--1',
		'Sentinel Intelligence--1',
	]

	//	var arrP = document.querySelectorAll(".heros .heros_right .hon_left .p2")
	//	for(var i=0;i<arrP.length;i++){
	//		arrP[i].innerHTML = (arrp2[index])
	//	}
	//	
	$(".heros .heros_right .hon_left .p2").html(arrp2[index])
		//	document.querySelectorAll(".heros .heros_right .hon_left .p2").innerHTML = (arrp2[index])
	$('.heros .heros_right.picture').removeClass('picture')
	$('.heros .heros_right').eq(index).addClass('picture')
}

//$(document).ready(function()){
//	$('div.left_new1').click(function()){
//		$('.newest .watch').removeClass('cur')
//	}
//}

function tab4(index) {
	$(".newest .watch.cur").removeClass('cur')
	$('.newest .watch').eq(index).addClass('cur')
		//	$('.newest .watch .watch1 .watch1a .watch1ap').eq(index).css('backgound','url('../img/266091189175.png') no-repeat')
}

$(document).ready(function() {
	$('.all_flag .all_flag_1').click(function() {
		if($('.all_flag').width() == 26) {
			$('.all_flag').width('226px')
		} else {
			$('.all_flag').width('26px')
		}

		//		$('.all_flag .all_flag_2').addClass("cur")
		//		$(".all_flag .all_flag_2.cur").removeClass('cur');

		$("#.all_flag .all_flag_2").fadeToggle("slow");
	})
})

$(document).ready(function() {
	$('.all_flag .all_flag_2 .all_flag_2_nav li').click(function() {
		var index = $(this).index()

		$('.all_flag .all_flag_2 .all_flag_2_con.cur').removeClass('cur')
		$('.all_flag .all_flag_2 .all_flag_2_con').eq(index).addClass('cur')
	})
})