// 리스트 페이지 JS - list.js

// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기
import bData from './data.json' assert{type:'json'};

// console.log(bData);

// 데이터 idx의 내림차순으로 정렬변경하기!
bData

// 데이터를 화면 리스트 코드로 변환하여 적용한다!
// 대상: #board tbody
const board = $('#board tbody');

board.html(
    bData.map(v=>`
        <tr>
            <td>${v.idx}</td>
            <td>${v.tit}</td>
            <td>${v.writer}</td>
            <td>${v.date}</td>
            <td>${v.cnt}</td>
        </tr>
    `).join('')
); //////////// html //////////////

// 데이터를 태그로 구성함
// 태그 구조: <tr><td></td>...</tr>
