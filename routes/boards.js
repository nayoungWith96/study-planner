// Express 라이브러리를 불러와서 라우터를 생성합니다.
const express = require("express");

// Express 라우터 인스턴스를 생성합니다.
const router = express.Router();

const boardsController = require("../controllers/boardsController");

// 다른 라우트들...
router.get("/writeForm", boardsController.writeForm);

router.post("/write", boardsController.write);

module.exports = router;
