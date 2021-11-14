코린이의 React 개발일지
===================

6주차 요약
-----------------

React와 ReactDOM을 import 하여 코딩을 한다.
React는 여러가지 편리한 기능들이 담겨있는 프레임워크이고, ReactDOM는 React 프레임워크를 통해 만들어진 요소들을 html과 동기화(rendering) 해주는 것이다.
React를 적용한 코드와 기존에 배웠던 바닐라 js 를 활용한 코드를 비교하며 강의를 수강했다.

우선, eventListener method는 

    onFunction : ("tarameter") => "실행할 함수 내용"

위와 같은 형식으로 작성이 된다. java에서 lambda expression 했던거와 유사하다.
아래와 같은 형식으로 태그를 생성하고 기존 html에는 큰 틀만 존재하면 된다. 

    const object = React.creatElement("html 태그", props{(such as style, eventListener, define class name)}, contents);


> Vanilla js - html 태그를 하나하나 추가, for 필터링 querySelector 혹은 getElementByID()와 같은 method를 사용 필연적임.

> React - 기존 생성자 형식은 그대로 유지, 두번째 필드값에 eventListener method를 직접 구현해서 첨가. 그러므로, js에서 어떤 eventListener method 들이 존재하는지 알아두자! 모르겠으면 검색


__But, JSX와 함께라면 더욱 편하게 코딩할 수 있다!__


---
JSX란, javascript를 확장한 문법. html 문법을 그대로 활용하여 script 컴포넌트들을 생성할 수 있다.

수업을 통해서 bable 라는 툴을 사용하는데, 해당 툴은 한마디로 html 문법처럼 작성된 코드 (훨씬 더 직관적인 코드)를 전에 강의를 통해 배웠던 React.creatElement()의 형식을 바꿔주는 번역기라고 생각하면 좋을 듯하다.

또한 이렇게 만든 script 컴포넌트들을 각각 함수 형식으로 제작하면 전체적인 Container를 만들어 포함시키면 웹페이지에 나타난다.

함수 형식으로 표현하는 방식에는 두 가지가 있다. *단, 모든 컴포넌트들은 첫글자가 대문자여야 한다.

    function Component () = {  // #1 Standard form
        return <html 태그이름>Inner Text </html 태그이름>
    } 

    Component = () => {     // #2 Arrow function
        <html 태그이름>Inner Text </html 태그이름> 
    } 

함수 형식으로 표현한 후에

    const Container = <div>
        <Component1 />
        <Component2 />
        ..
        ..
        ..
    </div>
위와 같은 형식으로 추가해주고 랜더링 함수에 Container를 parameter로 넣으면 비로소 웹페이지에 나타난다.

Rendering 할때에 React는 컴포넌트의 모든 것을 Rerendering 하는 것이 아니라 변경되는 요소만 업데이트 되게끔 한다.

(__별거 아닌것 같지만 프로젝트가 커질수록 데이터 관리 측면에서 매우 중요할듯함.__)