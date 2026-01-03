import React from 'react';
import { Link } from "react-router-dom";

function Notice() {
  return (
    <div className="min-h-screen bg-[#f7fee7] flex flex-col">
      <nav className="bg-white p-4 border-b border-[#2d5a27] flex items-center">
        <Link to="/" className="text-[#2d5a27] font-bold mr-4">← 뒤로가기</Link>
        <h1 className="text-xl font-black text-[#2d5a27]">공지사항</h1>
      </nav>

      <main className="p-8 max-w-2xl mx-auto w-full">
        <div className="space-y-4">
          {/* 공지사항 목록 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-[#2d5a27]">
            <h2 className="text-lg font-bold text-gray-800">[안내] 결제 혜택 안내</h2>
            <p className="text-gray-600 mt-2">서울페이 및 온누리 상품권 결제가 가능합니다. 이용권 구매 시 약 10%의 할인 효과를 누리세요!</p>
            <span className="text-sm text-gray-400 mt-4 block">2025.12.26</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-bold text-gray-800">[공지] 야외 퍼팅장 이용 수칙</h2>
            <p className="text-gray-600 mt-2">안전한 이용을 위해 지정된 장소에서만 퍼팅 연습을 부탁드립니다.</p>
            <span className="text-sm text-gray-400 mt-4 block">2025.12.20</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Notice;