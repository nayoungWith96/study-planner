// // Mongoose 라이브러리를 불러와서 MongoDB 스키마와 모델을 정의합니다.
// const mongoose = require("mongoose");

// // Item 컬렉션의 스키마를 정의합니다.
// const BoardSchema = new mongoose.Schema({
//   title: String, // 아이템의 이름
//   content: String, // 아이템의 가격
//   createdAt: { type: Date, default: Date.now },
// });

// // Item 모델을 생성합니다. 이 모델은 ItemSchema를 기반으로 MongoDB와 상호작용합니다.
// const Board = mongoose.model("Board", BoardSchema);

// // 다른 파일에서 이 모델을 사용할 수 있도록 내보냅니다.
// module.exports = Board;

import mongoose, { Document, Schema } from "mongoose";

// Board 문서의 인터페이스 정의
interface IBoard extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

// Board 스키마 정의
const BoardSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Board 모델 생성 및 내보내기
const Board = mongoose.model<IBoard>("Board", BoardSchema);

export default Board;
