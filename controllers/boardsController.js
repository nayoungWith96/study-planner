const Board = require("../models/board.ts");

const path = require("path");

exports.writeForm = async (req, res) => {
  try {
    // __dirname은 현재 파일(컨트롤러)의 디렉토리 경로를 나타냅니다.
    // 여기서 상위 디렉토리로 이동한 후 'app/write.html'로 이동합니다.
    const filePath = path.join(__dirname, "../app/public/writeForm.html");

    // HTML 파일을 클라이언트에게 전송합니다.
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error serving write.html:", error);
    res.status(500).send("Error loading the write page");
  }
};

exports.write = async (req, res) => {
  try {
    // 1. 입력할 document 생성
    const { title, content } = req.body;
    console.log("Received data:", { title, content }); // 추가

    const newBoard = new Board({ title, content });
    console.log("Created new Board instance:", newBoard); // 추가

    const savedBoard = await newBoard.save();
    console.log("Saved Board:", savedBoard); // 추가
    // 2. student 컬렉션의 insert( ) 함수에 입력
    res
      .status(201)
      .json({ message: "Board created successfully", board: savedBoard });
  } catch (erroe) {
    console.error("Error serving write.html:", error);
    res.status(500).send("Error loading the write page");
  }
};
