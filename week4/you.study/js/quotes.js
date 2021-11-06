const quotes = [
  //적고싶은 글귀들을 배열로 저장한다.
  {
    quote: "I am able to do all things through him who gives me strength",
    author: "Philippians 4:13",
  },
  {
    quote:
      "But he knows what I am doing, and when he tests me, I will be pure as gold.",
    author: "Job 23:10",
  },
  {
    quote:
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life",
    author: "John 3:16",
  },
  {
    quote:
      "For the lord your god is he that goeth with you, to fight for you against yout enemies, to save you",
    author: "Deutoronomy 20:4",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child"); //html에 있는 곳에 적어두기 위해 queryselector로 가져온 다음 변수로 지정해준다. span last child
const todayquotes = quotes[Math.floor(Math.random() * quotes.length)]; //math.floor(버림)을 사용해서 random*quotes.length로 생성된 랜덤숫자를 버려준다.

quote.innerText = todayquotes.quote + "\n"; //quotes배열의 quote를 innertext에 적음
author.innerText = todayquotes.author;
