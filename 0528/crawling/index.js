//모듈을 추출한다
const http = require('http');
const express = require('express');
// 파일 입출력 모듈
const fs = require('fs');
// 크롤링 모h듈
const axios = require('axios');
const cheerio = require('cheerio');

//서버를 생성합니다.
const app = express();


app.get('/axios', function(req, res)  {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    axios.get("https://www.naver.com/").then((response) => {
        //console.log(response);
        const htmlContent = response.data
        //console.log(htmlContent);
        const crol = cheerio.load(htmlContent);
        //#NM_THEME_CONTAINER > div.group_topstory > div > div > a.topstory_info > p
        let yul = crol('div.group_topstory > div > div > a.topstory_info > p').text();
        console.log(yul);
        res.write(yul);
    });

    res.end();

});


app.get('/end', (req, res) => {

    res.write(`<h1>MERONGMERONG</h1>`);
});

app.get('/readFile.*', (req, res) => {

    // 파일 읽기    
    fs.readFile('./yul.txt', (err, data) => {
        if (err) throw err;

        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end(data.toString());
        console.log(data);
        console.log(data.toString());
    });
});


//서버를 만듭니다.
//서버를 실행합니다.
app.listen(6698, () => {
    console.log('run on server - http://localhost:6698');
    console.log('run on server - http://127.0.0.1:6698');
});