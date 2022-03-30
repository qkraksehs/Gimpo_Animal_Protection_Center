
// 메인이미지 변경 함수
function changeVisual(num) {
  // 버튼스타일 및 이미지 초기화
  $('.tab-group a').removeClass('on');
  $('.slider > img').removeClass('on');

  if(num == 1) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 2) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 3) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  }   
}
/* 
function changeVisual(num) {
  $('.tab-group a').removeClass('on');

  if(num == 1) {
    $('#main-banner img').attr('src', './images/main-banner1.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 2) {
    $('#main-banner img').attr('src', './images/main-banner2.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 3) {
    $('#main-banner img').attr('src', './images/main-banner3.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } 
} 
*/
// $(function(){
//   var sliderNum = 0; // 이미지 번호
//   var img_width = 1600; // 이미지 폭
//   var duration = 2500; // 재생시간
  
  
//   var slider = setInterval(function(){
//       sliderNum++; // 다음이미지 번호
//       // 마지막 이미지면 처음 이미지로
//       if(sliderNum > 2) sliderNum = 0;
//       $('.slider').css({
//           marginLeft: -(img_width * sliderNum)
//       })
//   },duration)
// });