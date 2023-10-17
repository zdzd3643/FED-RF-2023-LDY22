// 보그 PJ 메인 페이지 JS - main.js

import dFn from "./dom.js";

// [1] 메인 페이지 등장액션 클래스 넣기
// 대상: .main-area section
const hideBox = dFn.qsa('.main-area section');

// 첫번째 박스 빼고 모두 숨김클래스 넣기
hideBox.forEach((ele,idx)=>{
    if(idx!=0) ele.classList.add('scAct');
}); ////////// forEach ///////////

///////////////////////////////////////////
// 제이쿼리 라이브러ㅣ 사용하여 구현해보자! ///

// 1. 스크롤 등장액션 구현하기 ////
// 대상: window
// 이벤트: scroll
// 기준값 사용: getBoundingClientRect()
console.log(dFn);