코린이의 React 개발일지
===================

1. 11월 10일의 기록
-----------------
React를 적용한 코드와 기존에 배웠던 바닐라 js 를 활용한 코드를 비교하며 강의를 수강했다.
아래와 같은 형식으로 태그를 생성하고 기존 html에는 큰 틀만 존재하면 된다. 

    const object = React.creatElement("html 태그", {속성(such as style, eventlistener, define class name)}, "InnerText!");

> Vanila js - html 태그를 하나하나 추가, for 필터링 querySelector 혹은 getElementByID()와 같은 method를 사용 필연적.
> React - 기존 생성자 형식은 그대로 유지, 두번째 속성값에 eventlistener의 callback 함수를 직접 구현해서 첨가.

