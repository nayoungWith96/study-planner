// Mongoose 라이브러리를 불러와서 MongoDB와 연결합니다.
const mongoose = require("mongoose");

// 데이터베이스에 연결하는 비동기 함수입니다.
const connectDB = async () => {
  try {
    // MongoDB에 연결합니다. 연결 문자열과 옵션을 전달합니다.
    await mongoose.connect("mongodb://host.docker.internal:27017/mydatabase");
    console.log("MongoDB connected"); // 성공적으로 연결된 경우 메시지 출력

    console.log("Database:", mongoose.connection.name);
    console.log(
      "Collections:",
      await mongoose.connection.db.listCollections().toArray()
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); // 연결 실패 시 에러 메시지 출력
    process.exit(1); // 프로세스를 종료합니다.
  }
};

// 다른 파일에서 이 함수를 사용할 수 있도록 내보냅니다.
module.exports = connectDB;
