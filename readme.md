const url =
"https://api.currentsapi.services/v1/latest-news?" +
"language=us&" +
"apiKey=fUsVYgAfn0dC37lhil19DQijYOdaLVGjxV1Q7Tnos08wqUkc";
const url2 = "https://api.randomuser.me/";
const response = await fetch(url2);
const data = await response.json();
console.log(data);
}
