// 옷소매 갤러리 JS - main.js

// DOM함수 ////////////////////
import dFn from './dom.js';

// console.log(dFn);

// 1. 기능정의: 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함
// 1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
// -> 갤러리부모박스.appendChild(맨앞자식div)
// 1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
// -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)

// 2. 대상선정 ////////////////////
// 2-1. 이벤트대상 : .abtn(이동버튼들)
const abtn = dFn.qsa('.abtn');
// 2-2. 변경대상 : .gbx(갤러리부모박스)
const gbx = dFn.qs('.gbx');

// console.log('대상:',abtn,gbx);

// 3. 이벤트 설정하기 ////////////////////
abtn.forEach(ele=>{
    dFn.addEvt(ele,'click',goSilde);
})

// 4. 함수만들기 //////////////////
function goSilde(){
    console.log('고고씽!',this);

    // 2. 기능 분기하기
    // 2-1. 오른쪽버튼 : 맨앞div 맨뒤로 이동
    if(isR){
        // 갤러리부모박스.appendChild
        gbx.appendChild(dFn.qsaEl())
        
    } /// if ///
    // 2-2. 왼쪽버튼 : 맨뒤div 맨앞으로 이동
    else{

    }
} ////////////////// goSlide 함수 //////////////