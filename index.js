const express = require("express");
const jwt = require("jsonwebtoken");

const app = express(); //express 앱생성
const sercretText = "superSecret";

app.use(express.json());
//해당 express앱이 미들웨어 중 'JSON 미들웨어'를 쓰도록 지정한다.
//클라이언트가 보낸 HTTP request body에 있는 JSON데이터를 자동으로 파싱해준다.
//자동 파싱된 내용은 'req.body'를 통해 사용가능하다.
const port = 4000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
//포트 4000으로부터 들어오는 request를 듣는다.

app.post("/login", (req, res) => {
  //'/login' post request에 대해
  const username = req.body.username;
  const user = { name: username }; //sign함수에 user부분은 json형태로 들어가야 한다.

  //jwt를 이용하여 클라이언트에게 보내줄 access 토큰 생성하기
  const accessToken = jwt.sign(user, sercretText);
});
