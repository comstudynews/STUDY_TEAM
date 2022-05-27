// 모듈을 추출합니다
const express = require('express');
const fs = require('fs');

//서버를 생성합니다
const app = express();

// request 이벤트 리스너를 설정합니다
app.get('/image', (request, response) => {
    fs.readFile('image.png', (error, data) => {
        //이미지 파일을 제공합니다.
        response.type('image/png');
        response.send(data);
    });
});

app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        // 음악 파일을 제공합니다.
        response.type('audio/mpeg');
        response.send(data);
    });
});

//서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});