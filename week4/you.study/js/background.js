const images = [
  "bulgaria1.jpeg",
  "bulgaria2.jpeg",
  "bulgaria3.jpeg",
  "china1.jpeg",
  "china2.jpeg",
  "china3.jpeg",
  "czech1.jpeg",
  "czech2.jpeg",
  "czech3.jpeg",
  "czech4.jpeg",
  "czech5.jpeg",
  "czech6.jpeg",
  "czech7.jpeg",
  "czech8.jpeg",
  "czech9.jpeg",
  "czech10.jpeg",
  "czech11.jpeg",
  "czech12.jpeg",
  "germany1.jpeg",
  "germany2.jpeg",
  "germany3.jpeg",
  "germany4.jpeg",
  "japan1.jpeg",
  "japan2.jpeg",
  "rumania1.jpeg",
  "rumania2.jpeg",
  "rumania3.jpeg",
  "rumania4.jpeg",
  "rumania5.jpeg",
  "rumania6.jpeg",
  "rumania7.jpeg",
  "rumania8.jpeg",
  "rumania9.jpeg",
  "rumania10.jpeg",
  "rumania11.jpeg",
  "rumania12.jpeg",
  "russia1.jpeg",
  "russia2.jpeg",
  "russia3.jpeg",
  "russia4.jpeg",
  "taiwan1.jpeg",
  "taiwan2.jpeg",
  "taiwan3.jpeg",
  "taiwan4.jpeg",
  "taiwan5.jpeg",
  "taiwan6.jpeg",
  "taiwan7.jpeg",
  "vietnam1.jpeg",
];

const chosenimage = images[Math.floor(Math.random() * images.length)]; //저장해둔 image 배열에서 랜덤으로 chosenimage라는 변수에 저장한다.

const bgimage = document.createElement("img"); //js에서 html에 img라는 요소를 만든다.

bgimage.src = `img/${chosenimage}`; //img요소 뒤에 src를 붙여주어 chosenimage가 나오게 한다.

document.body.appendChild(bgimage); //document의 body부분에 bgimage가 출력되게 한다.
bgimage.id = "bgImage";
