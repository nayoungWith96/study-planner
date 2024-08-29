// Express 라이브러리를 불러와서 라우터를 생성합니다.
const express = require('express');

// Item 모델을 불러와서 데이터베이스와 상호작용합니다.
const Item = require('../models/item');

// Express 라우터 인스턴스를 생성합니다.
const router = express.Router();

// GET /items - 모든 아이템을 가져오는 요청을 처리합니다.
router.get('/', async (req, res) => {
    try {
        // Item 모델을 사용하여 모든 아이템을 조회합니다.
        const items = await Item.find();
        // 조회한 아이템을 JSON 형식으로 응답합니다.
        console.log('Items fetched:', items);  // 데이터 확인용 로그
        res.json(items);
    } catch (error) {
        // 에러가 발생한 경우, 상태 코드 500과 함께 에러 메시지를 응답합니다.
        res.status(500).send(error);
    }
});

// 다른 파일에서 이 라우터를 사용할 수 있도록 내보냅니다.
module.exports = router;