// 달력 컴포넌트를 부르는 메인 JS - main.js


// 달력 컴포넌트 불러오기
import DalCom from "./calendar.js";

// 달력 컴포넌트 함수 호출하여 달력 셋팅하기!
// 대상: .dalcom1, .dalcom2
new DalCom('.dalcom1');

const dc2 = new DalCom('.dalcom2');
// 요구사항: 두번째 달력은 다음달 달력이 처음에 출력되게함!
// 다음달 달력을 쓸 수 있게 이전/다음달 달력변경 내부함수를
// 생성자함수에 this키워드로 등록하여 노출해야한다!
dc2.chgCalendar(1);

//////////////////////////////////////////////////////
/////// 제이쿼리로 달력 컴포넌트를 사용할때 ///////////
///// 추가기능 구현하기 //////////////////////////////

// 1. 대상선정: 달력 .calendar
const calBox = $(".calendar .dates");
console.log(calBox);

// 2. 이벤트 설정하기 : mouseenter
// - 마우스가 달력박스 안에 들어갔을때 처리
// on(이벤트명,함수)
calBox.mouseenter(function(){
    console.log('나달력!',this);

    // 선택달력 하위 .date를 클릭하면
    // 히든필드 날짜정보 읽어오기!
    $(this).find('.date').click(()=>{
        // 제이쿼리는 value대신 val() 메서드!
        let myData=
        $(this).find('.date-info').val();
        // console.log('날짜정보요소:',$(this).next());

        myData = myData.split('/');
        myData = myData[0]
        // 출력: 해당달력의 부모의 이전text박스
        $(this).parent().prev().val(myData);
    }); 

}); /////////// mouseenter //////////////////

