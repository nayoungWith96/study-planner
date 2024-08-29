// Mongoose 라이브러리를 불러와서 MongoDB 스키마와 모델을 정의합니다.
const mongoose = require('mongoose');

// Item 컬렉션의 스키마를 정의합니다.
const ItemSchema = new mongoose.Schema({
    name: String, // 아이템의 이름
    price: Number, // 아이템의 가격
});

// Item 모델을 생성합니다. 이 모델은 ItemSchema를 기반으로 MongoDB와 상호작용합니다.
const Item = mongoose.model('Item', ItemSchema);

// 다른 파일에서 이 모델을 사용할 수 있도록 내보냅니다.
module.exports = Item;