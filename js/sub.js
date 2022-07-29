$(function(){
	/* jquery에서 주석은 //내용// */
//start




	//메뉴누르면 스크롤이 위치로 찾아가기
	//가로로 하기
	var count = 0;         /*count를 전역변수로 놓고 밑에서 count를  count=$(this).index();를 했기때문에 내가 누른 인디숫자를 밑에 가져가서 prev,next할때 같아지는거임.*/
	$('.button span a').click(function(){
		
		var aaa = $('.main_photo ul li').eq($(this).index()).position().left; //가로라서 top을 left로 바꾸기
		$('.main_photo ul').stop().animate({		
			left : -aaa
		},500);      
		
		count = $(this).index();
//다른방법은 remove와 맨밑에는 필요
		$('.button span a').removeClass('on');
		$('.button span a').eq(count).addClass('on');
       //색깔바꾸는거 다른방법은 $(this).find('a').addClass('on');
	});

	//첫번째 점박이는 파란불이 들어와있게 할려고 
	$('.button span a:nth-of-type(1)').addClass('on');



/* next누르면 사진같이 옮겨지고 점박이색깔도 따라가면서 바뀌기*/
	
	//next
	
	$('.next').click(function(){
		
		if(count != 3){
			$('.button span a').eq(++count).trigger('click');   //trigger는 앞에 .button span a 실행한것 그대로 클릭한것처럼 실행하라는 뜻
		}
			
	});


	//prev
	$('.prev').click(function(){
		if(count != 0){
			$('.button span a').eq(--count).trigger('click');
		}
	});






	//사진이 저절로 가지게 하기, 마우스 대면 멈추게하고.., 마지막사진도착하면 다시 처음으로가게하기.
	
	
	




















	//----------버거메뉴~!
	var burger = $('.menu-trigger');

	burger.each(function(index){
		var $this = $(this);
		
		$this.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active-' + (index+9));
		})
	});
	




	//quick메뉴 아이콘 누르면 메뉴 나왔다가 들어갔다가하기

	$('.menu-trigger').click(function(){
		$(this).toggleClass('on');

		if($(this).hasClass('on')){
			$('.quick').stop().animate({
				right:0
			});
		}else{
			$('.quick').stop().animate({
				right:-300
			});
		}

	});





	



//end
});









/*대박 어려움 공부하기

	
마우스 스크롤하면 딱가지고   마지막 footer까지도 딱가지고 위로올리면 딱200만큼 올라가고 가지게하는 것


	마우스 스크롤하면 컨텐츠에 맞쳐서 세로로 가지게 하기
	var cc=0,dd=0;
	$('.indi a').eq(0).addClass('on');     //처음에 Home 인디 보이게하려고

	$('section').on('mousewheel DOMMouseScroll',function(e){           //마우스 스크롤 명령,  e는 넣어줘야함 이벤트발생.. wheelDelta는 폭스브라우저에서 먹히게하기위함
		
		var aa = e.originalEvent.wheelDelta; //올릴땐 120씩  내릴떈 -120씩으로 정해짐
		var bb =0;
		$('.indi a').removeClass('on');    //선택한창 외에는 모든 인디를 가릴려고

	//if는 <0때문에 마우스를 내릴경우		
		if(aa < 0){										//-가 휠을 내릴 때라 ( 0보다 작을경우라고함)
			if($(this).index() != 2){           //에러방지
				bb = $(this).next().offset().top - $('header').height();       //offset은 위치잡기,  top을 헤드높이값만큼뺀이유는 화면에 딱맞쳐서 보이게할려고
			    
				//마우스내리면 indi 가 같이 따라서 열리게하기
				$('.indi a').eq($(this).next().index()).addClass('on');
				
			}else{            //2가됬을때 즉 section3이 됬을때   (footer부분)
				bb = '+=200';
				cc = 1;		       //1='on'같은것  footer에서 올릴때 게시판으로만 가졌다가 다시가게할려고 cc구문넣었음

				$('.indi a').eq(3).addClass('on');
			}


	//else는 마우스 올릴경우
		}else{  
			if($(this).index() !=0 ){       //에러방지
				if(cc == 1){
					bb = '-=200';              //cc가1일때 bb가 다시 -200으로
					cc = 0;
					
					$('.indi a').eq(2).addClass('on');
				}else{	
					bb=$(this).prev().offset().top - $('header').height();

					//마우스올리면 indi 가 같이 따라서 열리게하기
					$('.indi a').eq($(this).prev().index()).addClass('on');
				}
			}
		}


//전체명령구문..?
		$('body,html').animate({      
			scrollTop:bb     
		},{queue:false});    //queue는 여러번 내릴때 하나씩만 움직이게 할려고 하는 안전장치
	});

---------------------------------------------------------------
 대박어려움 공부하기 */