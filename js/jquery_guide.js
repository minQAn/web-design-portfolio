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







/*대박 어려움 공부하기*/
/*------------------------------------------------------------------------*/
	
//마우스 스크롤하면 딱가지고   마지막 footer까지도 딱가지고 위로올리면 딱200만큼 올라가고 가지게하는 것


	//마우스 스크롤하면 컨텐츠에 맞쳐서 세로로 가지게 하기
	var cc=0,dd=0;
	$('.indi a').eq(0).addClass('on');     //처음에 Home 인디 보이게하려고

	$('section').on('mousewheel DOMMouseScroll',function(e){           //마우스 스크롤 명령,  e는 넣어줘야함 이벤트발생.. wheelDelta는 폭스브라우저에서 먹히게하기위함
		
		var aa = e.originalEvent.wheelDelta || -e.originalEvent.detail; //올릴땐 120씩  내릴떈 -120씩으로 정해짐
		var bb =0;
	

	//if는 <0때문에 마우스를 내릴경우		
		if(aa < 0){										//-가 휠을 내릴 때라 ( 0보다 작을경우라고함)
			if($(this).index() != 2){           //에러방지
				bb = $(this).next().offset().top - $('header').height();       //offset은 위치잡기,  top을 헤드높이값만큼뺀이유는 화면에 딱맞쳐서 보이게할려고	    	
			}


	//else는 마우스 올릴경우
		}else{  

			if($(this).index() !=0 && $(this).index() !=2){       //에러방지   || 의 뜻은 or 또는 임. &&의뜻은 and 그리고.   0,1,2만 먹히게하고 섹션3은 따로주게하려고 이 구문을 썻음
				
				bb=$(this).prev().offset().top - $('header').height();
			
			} 
			//이유는 모르겠으나 이부분 넣으면 마우스 위로 올릴때 error남  || (or)로 했었을경우
		}


//section전체명령구문..?
		$('body,html').animate({      
			scrollTop:bb     
		},{queue:false, duration:500});    //queue는 여러번 내릴때 하나씩만 움직이게 할려고 하는 안전장치
	});
/*-----//section--움직이기--*/



/*----------footer스크롤 분리한부분---------*/
	var  sa=0;
	$('#container .section3').on('mousewheel DOMMouseScroll',function(e){
		var kk = e.originalEvent.wheelDelta;
		var ff = 0;


		
		//마우스 내릴경우
		if(kk < 0){
			ff = $('footer').offset().top;
			sa = 1;
		//마우스 올릴경우
		}else{
			if(sa == 1){
				ff = $('#container .section3').offset().top -$('header').height();
			}else{
				ff = $('#container .section2').offset().top -$('header').height();
			}
		}

		$('body,html').animate({ scrollTop:ff},
			{
				queue:false, duration:500,
				complete : function() {                     //complete는 함수가 실행된 후에 실행하라는 뜻 (여기서 쓴이유 : sa가 1이되고 0이되고 자꾸 바뀌어서 )
					if(kk > 0){                              //애니메이션이 끝나고나서 footer로 갔다가 다시 올라왔을때 sa를 0으로 만들라. (그말은 즉, 푸터로 갈때 1이 되고 한번 올라왔을때 다시 0으로 만듬.)
						if(sa == 1){sa = 0;}
					}
				}
			});  
		 return false;                              /*return false는 무엇이고 왜넣었는가*/
												
	});

   //-----------------------------------여기까지   수정 4/27  모바일때문에 잠시 끔//

	
 
//여기부터     공부필수!!!!!!
	//화면 우측 스크롤이 위치한 곳에 따라 좌측 인디게이터 맞쳐서 켜지고 꺼지게 하기 
			


	$('.aa').each(function(i){            //.aa는  또다른 클래스명을 주었음   section과 footer를 한번에 주기위해서 

		$(window).scroll(function(){
			var uu = $(window).scrollTop();
			var snum = $('.aa');
			var hnum = $('header').outerHeight();      //outher는 margin padding 포함시키기
			
			if(uu > (snum.eq(i).offset().top - hnum)-10 && uu < (snum.eq(i+1).offset().top - hnum)-10){     //여유있게 10씩 줬더니 indi a 의 떨림이 사라졌음     //&&의 뜻은  and  ,  || 의 뜻은 or임.
				$('.indi a').addClass('on').not(':eq('+i+')').removeClass('on');
			}

			if(($(document).height() - $(window).outerHeight()) - 20 < uu){
				$('.indi a').addClass('on').not(':eq(3)').removeClass('on');
			}
					

		});

	});

	//여기까지



/*---------------------------------------------------------------------*/
/* 대박어려움 공부하기 */





















	

/*-----------------------인디게이터 부분 하기-------------------------*/

/* 이부분은 이제 필요없음 위에서 했기때문에..  이거때문에 자꾸 누르면 깜박거림

	//누르면 넓어지면서 글씨생기게하기
	$('.indi a').click(function(){
		$('.indi a').removeClass('on');
		$(this).addClass('on');
	});
*/
	

	//인디게이터 누르면 해당 위치로 세로로 움직여서 찾아가기

	$('.indi a').click(function(){
		
		var bb = $('footer').offset().top; 
	

		if($(this).index() != 3){   //footer따로줘야해서 !=3 을 줬음
			var ccc = $('#container section').eq($(this).index()).offset().top - $('header').height();    //#container section 으로해야 정확하게 컴퓨터가 읽음
			
			$('body,html').stop().animate({
				scrollTop : ccc 
			});
		}else{         //이곳은 footer로 가게하기위함
			$('body,html').stop().animate({
				scrollTop : bb
			});
		
		}
	});





/*--------------//인디게이터 끝------------------*/






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





//---------------------인트로 vancouver누르면 메인화면보이게하기--------//



	
	//좌측
	//밴쿠버를 클릭하면 animate method로 화면이 100%되면서 opacity먹고 메인사이트 나오기
	$('.LL').click(function(){
		$('.first').css({width:'100%'});
		$('.second').css({width:'0%'});
		$('.toronto_logo').css({opacity:0});
		$('.background').css({opacity:0});
		$('.tor').css({opacity:0});

		setTimeout(function(){                   //setTimeout은 밑에구문들을 1초뒤에 실행하라 라는 명령어
			$('.first').addClass('bright');

			$('.first').delay(300).animate({       //delay는 animate에서만 쓸수있음. 뜻: animate를 위에구문 실행후 1초뒤에 실행하라
				opacity:0
			},	300, function(){
				setTimeout(function(){				               
					$('.whole').hide();
					$('body').removeClass('intro');   //우측 스크롤을 다시 보이게 하기위해서 씀
				},800);

				}
			);	                 
		},1000);		//이초수가  addClass('bright')관련. 즉, 이안에모든 것들을 1초뒤에 실행하라
	});




	//우측
	//토론토를 클릭하면 animate method로 화면이 100%되면서 opacity먹고 메인사이트 나오기
	$('.RR').click(function(){
		$('.second').css({width:'100%'});
		$('.first').css({width:'0%'});
		$('.vancouver_logo').css({opacity:0});
		$('.background_right').css({opacity:0});
		$('.van').css({opacity:0});
		
		setTimeout(function(){               //setTimeout은 밑에구문들을 1초뒤에 실행하라 라는 명령어
			$('.second').addClass('bright');

			$('.second').delay(300).animate({       //delay는 animate에서만 쓸수있음. 뜻: animate를 위에구문 실행후 1초뒤에 실행하라
				opacity:0 
			},	300,function(){
				setTimeout(function(){
					$('.whole').hide();
					$('body').removeClass('intro');   //우측 스크롤을 다시 보이게 하기위해서 씀
				},800);		//여기 초수가 바로위에 2개 hide, removeClass관련
			   
				}
			);
		},1000);                    //1초뒤에  setTimeous부분을 실행하는데 그 후에 이제 위에부터 순서대로 bright생기고 그뒤0.3초뒤에 opacity먹히고 그후 0.8초뒤에 hide랑 remove먹히게 하라는 뜻.
	});








	//새로고침하면 최상단으로 이동하기
	$(function(){
		$("html,body").animate({scrollTop:0}, "slow");
	});
	
	/*-----------------------------------*/





	



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