# 2021.11.17 
1. jsonplaceholder를 사용한 api 생성
2. 만든 가짜 API fetch
3. async,await를 활용한 Fetch
4. fetch 후 데이터 원하는 값으로 정렬
5. table에 전시
6. 내일 해야할일 calender를 활용하여 json db 수정해보기, 

# 2021.11.18
1. calender.js안에 creategame.js 생성
2. creategame.js 라우팅 생성
3. creategame.js 안에 form html 완성
4. useRef()로 input받기
5. 들어온 데이터 필터로 API 불러오기
6. 불러온 API 상태 저장
7. 겹치지 않게 함수 두개로 나눠 API get, API PATCH 진행
8. PATCH한 데이터 table에 전시
9. json DB 수정 완료
10. 내일 해야할일 db 포맷기능, table 정렬함수 손보기, history활용하여 데이터 업로드 끝나면 자동 화면전환하기

# 2021.11.19
1. useNegative 활용하여 데이터 입력 완료시 캘린더 페이지로 이동(useHistory 사라짐)
2. Dataformat js파일 만든 뒤 포문 활용하여 db 포맷 진행
3. 내일 할일 데이터 추가하면 추가한 데이터 기반으로 Calender.js에 결과 전시
4. window.confirm 사용하여 데이터 추가 시 콘솔창으로 출력하기

# 2021.11.20
1. 코딩테스트

# 2021.11.21
1. material UI에서 Table css 템플릿 받아오기
2. 적용하기
3. Table sort함수 손보기
4. 전체적인 순위 알고리즘 손보기
5. 내일 할일 데이터 추가하면 추가한 데이터 기반으로 Calender.js에 결과 전시

# 2021.11.22
1. dialog기능 발견, 써먹으려면 코드 다 뜯어고쳐야 함
2. 추가한 데이터 calender에 전시하는 기능 완성되면 dialog 사용하기위해 코드 뜯어고치기
3. Dialog 기능 사용해서 form 과 input 부분 변경, 코드 수정
4. 내일 할일 데이터 추가하여 그 데이터 기반으로 Calender.js에 결과 전시 (제발)

# 2021.11.23
1. 승패 결과 받은 데이터 db에 Teams가 아닌 Results로 적어준다.
2. Result.js파일을 새로 만든 뒤 calender에서 컴포넌트로 사용한다.
3. Result.js에서 data.json의 Results를 fetch하여 데이터를 전시해준다.
4. 전시할 때 map을 사용해 주기 위해서 각 result에 id를 부여한다.
5. POST하기 이전에 data를 fetch하고 그 data.length를 state로 저장해준 다음 이 length+1을 id로 지정한다.
6. 데이터 전시는 완료했지만, result Format과정에서 5번의 과정을 실행하는데에 시간이 걸려 fetch가 되기전에 Format이 되는 상황이 발생한다.
7. 내일 할일 6번 해결하고, 데이터 전시 table 꾸미기