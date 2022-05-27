// 모듈을 추출합니다
const express = require('express'); 

//서버를 생성합니다.
const app = express(); //express() >> 서버 애플리케이션 객체를 생성합니다.

// request 이벤트 리스너를 설정합니다.
app.get('/page/:id', (request, response) => { // app.use >> 요청이 왔을 때 실행할 함수를 지정합니다.
    // 토큰을 꺼냅니다
    const id = request.params.id;

    //응답합니다
    response.send(`<h1>${id} Page</h1>`);
});

// 서버를 실행합니다.
app.listen(52273, () => { // app.listen >> 서버를 실행합니다.
    console.log('server running at http://127.0.01:52273');
});

// npm install express@4