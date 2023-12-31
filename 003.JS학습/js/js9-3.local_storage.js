// JS9-3. 로컬 스토리지 JS

// DOM 메서드 //
import dFn from "./dom.js";

// console.log(dFn);

    /*************************************************************** 
    [ JS 로컬스토리지 : localStorage ]
    - window하위객체 window.localStorage
    -> window는 주로 생략함!

    1. 정의 : 
        브라우저별 로컬 어플리케이션 영역에 저장되는 
        스트링데이터 저장소(JS API)
    2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
        (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
        따로 관리된다! - 기준이 도메인경로/주소)
    3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
        데이터값은 반드시 문자형으로 사용됨
    4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                다시 객체형으로 파싱하여 사용한다!
            (1) 입력시 : JSON.stringify(배열/객체)
            (2) 사용시 : JSON.parse(문자형배열/객체)
            -> JS의 제이슨 데이터 파싱 메서드 : 
                JSON.parse()
            -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                JSON.stringify()
    5. 사용메서드 : 
        (1) 값설정 : setItem(키명,값)
        (2) 값읽기 : getItem(키명)
        (3) 전체지우기 : clear()
        (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
        (5) 개별항목삭제 : removeItem(키명)
        (6) 개수 : length

    [ JS 세션 스토리지 : sessionStorage ]
    -> 로컬스토리지와 세션 스토리지의 메서드는 동일함!
    -> 로컬스토리지와 차이점은?
    -> 브라우저가 닫히면 데이터가 사라진다!
    (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
    단위로 한다!)
    -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

    [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
    (1) 장점: 간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
    (2) 단점: 데이터의 지속 보장이 없다!
        (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
        브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


    -> w3 schools 참고
    https://www.w3schools.com/js/js_api_web_storage.asp
***************************************************************/

// [ 1. 로컬 스토리지 연습 ] /////////////////////////
// 1. 버튼 기능 이벤트 대상: .local-box button
const btnLocal = dFn.qsa('.local-box button');
console.log('대상:',btnLocal);

// 2. 버튼에 이벤트 설정
btnLocal.forEach(ele=>dFn.addEvt(ele,'click',localSFn));

// -> 개별 로컬스토리지 삭제 이벤트 설정하기
dFn.qsa('.local ol li').forEach((ele,idx)=>{
    // 로컬스토리지 키명 배열
    const keyName = ["lname","lrole","lcat"];
    ele.onclick = function(){
        // 개별 로컬스토리지 키삭제
        console.log('삭제할키:',keyName[idx]);
        localStorage.removeItem(keyName[idx]);
    }; //////////// click /////////////
}); ///////////// forEach //////////////

// 3. 로컬쓰 처리 함수 만들기 //////
function localSFn(){
    // 1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log('로컬쓰:',btxt);
    // 2. 버튼별 기능 분기하기 ////
    if(btxt == '처음'){
        // 로컬 스토리지 읽기 : 
        // -> localStorage.getItem(키명)
        // console.log('로컬쓰 lname:',
        //     localStorage.getItem('lname'));
        // 만약 값이 셋팅안됐으면 null 값이 나옴!

        // 로컬 스토리지 셋팅 :
        // -> localStorage.setItem(키명,값) 
        localStorage.setItem('lname','이정재');
        localStorage.setItem('lrole','박평호역');
        localStorage.setItem('lcat','조직내 스파이를 색출하는 해외팀 안기부팀장');

        // console.log('로컬쓰 lname:',
        // localStorage.getItem('lname'));

    } //////////// if : 처음 /////////////
    else if(btxt == '전체삭제'){
        // 해당 url로 관리되는 로컬쓰를 모두 지움! : clear()
        localStorage.clear();
        // 개별 로컬쓰로 지우는 방법은 removeItem(키명)
    } //////// else if : 전체삭제 //////////////

    else if(btxt == '보여줘'){
        dFn.qs('.local .nm').innerText = 
        localStorage.getItem('lname');
        dFn.qs('.local .role').innerText = 
        localStorage.getItem('lrole');
        dFn.qs('.local .cat').innerText = 
        localStorage.getItem('lcat');

    } //////////// else if : 보여줘 ///////////

    // -> 객체를 생성하여 로컬 스토리지에 넣기
        else if(btxt = '처리'){
            if(!localStorage.getItem('minfo')) makeObj();

            // 바인딩 함수 호출!
            bindData();
    
        } /////////// else if : 처리 //////////////

} ///////////// localSFn 함수 ///////////////

// 객체가 없으면 로컬스토리지에 생성하기!
function makeObj(){
    console.log('배열/객체만들기!!!');

    // 게시판 형식의 객체를 생성함!
        let obj = [
            {
                idx: 1,
                tit: '내가 왕이될 상인가?',
                cont: '당신은 진정 왕이십니다!',
            }
        ];

    // 로컬 스토리지에 넣기
    // 배열/객체를 직접 넣으면 데이터형 표시 
    // 문자값만 입력되고 실제 객체는 입력되지않는다!
    // -> 왜??? 로컬스토리지는 문자형만 받으니까!
    // 그래서 배열/객체를 문자데이터화 해서 넣는다!
    // JSON.stringify(배열/객체)
    // localStorage.setItem('minfo',obj);
    localStorage.setItem('minfo',JSON.stringify(obj));
}; //////////////// makeObj 함수 /////////////////

// 화면에 게시판 리스트를 데이터에 맞게 바인딩하기 ///
function bindData(){

    // 1. 로컬스토리지 데이터: 문자형(string)
    let localData = localStorage.getItem('minfo');
    console.log(localData,"데이터형:",typeof localData);
    
    
    // 바인딩 데이터변수
    let bindCode = '';
    
    // 2. 데이터 존재여부 확인하기
    if(localData){ // null이 아니면 true!
        // 문자형을 배열로 형변환해야함!!!
        // 로컬스토리지 데이터 배열객체형변환 
        // -> JSON.parse(문자형 배열객체)
        localData = JSON.parse(localData);
        console.log(localData,
            "데이터형:",typeof localData, 
            "배열인가?", Array.isArray(localData));

        // 배열이니까 map()사용하여 태그만들기!
        // -> 맵쬬잉~!! map().join('')
        bindCode = localData.map((v,i)=>`
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td>
                    <a href="#" onclick="delRec(${i})">x</a>
                </td>
            </tr>
        `).join(''); // 태그를 연결자없는 배열전체로 저장
    } ////////// if : 데이터가 있는 경우 //////////
    else{ // 데이터가 없는 경우 ///////////
        bindCode = `
            <tr>
                <td colspan ="4" style="text-align:center">
                데이터가 없습니다..
            </tr>
        `;
        
    } /////////// else ///////////////

    // 3. 화면에 테이블 요소로 데이터 바인딩 구성하기
    let hcode = `
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>삭제</th>
            </tr>
            <!-- 데이터에 따른 반복바인딩 -->
            ${bindCode}
        </table>
    `;
    
    // 4. 화면출력대상 : .bind
    dFn.qs('.board').innerText = hcode; 

} //////////////// bindData 함수 ////////////////

// 삭제 처리함수 ////////////////
function delRec(idx){
    console.log('지울순번:',idx);

} ///////////// delRec 함수 ////////////////



// ***********************************************



// [ 2. 세션 스토리지 연습 ] /////////////////////////
// 1. 버튼 기능 이벤트 대상: .session-box button
const btnSession = dFn.qsa('.session-box button');
console.log('대상:',btnSession);

// 2.버튼에 이벤트 설정
btnSession.forEach(ele=>dFn.addEvt(ele,'click',sessionSFn));

// -> 개별 세션스토리지 삭제 이벤트 설정하기
dFn.qsa('.session ol li').forEach((ele,idx)=>{
    // 세션 스토리지 키명 배열
    const keyName = ["lname","lrole","lcat"];
    ele.onclick = function(){
        // 개별 세션스토리지 키삭제
        console.log('삭제할키:',keyName[idx]);
        sessionStorage.removeItem(keyName[idx]);
    }; //////////// click /////////////
}); ///////////// forEach //////////////

// 3. 세션쓰 처리 함수 만들기 //////
function sessionSFn(){
    // 1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log('세션쓰:',btxt);
    // 2. 버튼별 기능 분기하기 ////
    if(btxt == '처음'){
        // 세션 스토리지 읽기 : 
        // -> sessionStorage.getItem(키명)
        // console.log('세션쓰 lname:',
        //     sessionStorage.getItem('lname'));
        // 만약 값이 셋팅안됐으면 null 값이 나옴!

        // 세션 스토리지 셋팅 :
        // -> sessionStorage.setItem(키명,값) 
        sessionStorage.setItem('lname','정우성');
        sessionStorage.setItem('lrole','김정도역');
        sessionStorage.setItem('lcat','국내팀 안기부팀장, 박평호랑 사이나쁨');

        // console.log('세션쓰 lname:',
        // sessionStorage.getItem('lname'));

    } //////////// if : 처음 /////////////
    else if(btxt == '전체삭제'){
        // 해당 url로 관리되는 세션쓰를 모두 지움! : clear()
        sessionStorage.clear();
        // 개별 세션쓰로 지우는 방법은 removeItem(키명)
    } //////// else if : 전체삭제 //////////////

    else if(btxt == '보여줘'){
        dFn.qs('.session .nm').innerText = 
        sessionStorage.getItem('lname');
        dFn.qs('.session .role').innerText = 
        sessionStorage.getItem('lrole');
        dFn.qs('.session .cat').innerText = 
        sessionStorage.getItem('lcat');

    } //////////// else if : 보여줘 ///////////

} ///////////// sessionSFn 함수 ///////////////



