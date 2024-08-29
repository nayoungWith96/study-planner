// Express 라이브러리를 불러와서 서버를 생성합니다.
const express = require('express');

// config 파일에서 MongoDB에 연결하는 함수를 불러옵니다.
const connectDB = require('./config/dbcon');

// 아이템과 관련된 요청을 처리하는 라우트를 불러옵니다.
const itemsRoutes = require('./routes/items');

// Express 애플리케이션 인스턴스를 생성합니다.
const app = express();

// 서버가 요청을 수신할 포트 번호를 정의합니다.
const port = 3000;

// connectDB 함수를 사용하여 MongoDB 데이터베이스에 연결합니다.
connectDB();

// 들어오는 JSON 요청을 파싱하여 req.body를 통해 데이터를 접근할 수 있도록 하는 미들웨어를 설정합니다.
app.use(express.json());

// /items 경로로 들어오는 요청을 처리할 라우트를 설정합니다.
app.use('/items', itemsRoutes);

// 정적 파일을 제공할 디렉토리(public)를 설정합니다.
app.use(express.static('public'));

// 서버를 시작하고 정의된 포트에서 요청을 수신합니다.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});