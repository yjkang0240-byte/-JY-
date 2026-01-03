import { useState } from "react";
import "./App.css";

import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";

function App() {
  const [showPhone, setShowPhone] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);

  return (
    <div className="min-h-screen bg-lime-50 text-green-900">

      {/* 헤더 */}
      <header className="px-6 py-6 text-2xl font-bold">
        JY 골프아카데미
      </header>

      {/* 메인 비주얼 */}
      <section className="relative h-[60vh]">
        <img src={img1} alt="골프장 메인" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">프리미엄 골프 레슨</h1>
        </div>
      </section>

      {/* 예약 안내 섹션 */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">예약 안내</h2>
        <p className="mb-4 text-lg">예약은 전화 또는 온라인 문의로 진행됩니다.</p>

        <button
          onClick={() => setShowPhone(!showPhone)}
          className="w-full sm:w-auto px-8 py-5 text-xl bg-green-800 text-white rounded-xl hover:bg-green-900 transition"
        >
          {showPhone ? "전화번호 숨기기" : "골프장 전화번호 보기"}
        </button>

        {showPhone && (
          <p className="mt-4 text-2xl font-bold text-green-800">📞 010-2154-0240</p>
        )}

        <div className="mt-8 space-y-2 text-lg">
          <p className="font-bold text-xl">✔ 운영 시간</p>
          <p className="ml-4">· 평일: 09:00 ~ 22:00</p>
          <p className="ml-4">· 주말: 10:00 ~ 18:00</p>
          {/* ⭐ 정기 휴무일 추가! */}
          <p className="ml-4 text-red-600 font-bold">· 정기 휴무일: 2째 주, 마지막 주 일요일</p>
          
          <p className="mt-4">✔ 레슨 방식: 1:1 / 레슨 시간: 20분</p>
          <p className="text-sm text-gray-500">※ 예약은 전날 오후 23:00까지, 당일예약 불가</p>
        </div>
      </section>

      {/* 중요 공지 */}
      <section className="px-6 max-w-4xl mx-auto mb-10">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">⚠️ 중요 안내</h3>
          <p className="text-lg">
            연습장 이용은 <strong>1일 1회만 입장 가능</strong>하며, <br/>
            <span className="text-red-600 font-bold underline">매월 2째 주, 마지막 주 일요일은 정기 휴무입니다.</span>
          </p>
        </div>
      </section>

      {/* 공지사항 상세 */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <button onClick={() => setOpenNotice(!openNotice)} className="text-3xl font-bold mb-6 flex items-center gap-2">
          공지사항 {openNotice ? "▲" : "▼"}
        </button>

        {openNotice && (
          <div className="space-y-6 text-lg leading-relaxed border-t pt-6">
            <div>
              <p className="font-bold text-green-800">1. 연습장 이용 및 휴무 안내</p>
              <p>• 연습장 이용은 ‘1일 1회’만 입장 허용됩니다.</p>
              <p className="text-red-600 font-bold">• 정기 휴무: 매월 2째 주, 마지막 주 일요일</p>
            </div>
            {/* ... 이하 내용 동일 ... */}
          </div>
        )}
      </section>

      <section className="h-[40vh]">
        <img src={img2} alt="골프장 전경" className="w-full h-full object-cover" />
      </section>
    </div>
  );
}

export default App;
