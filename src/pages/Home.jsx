import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  const mainBanner = "/images/1.png";
  const facilityImg = "/images/2.jpg"; // [2번] 2.jpg 사진 사용

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f7fee7]">
      {/* [1번] 상담문의 버튼: 골프장 전화번호(0507-1470-7075)로 바로 연동 */}
      <nav className="bg-white p-4 flex justify-between items-center border-b border-[#2d5a27] sticky top-0 z-50 shadow-sm">
        <h1 className="text-[#2d5a27] font-black text-2xl ml-4 cursor-pointer" onClick={() => window.location.reload()}>
          JY GOLF ACADEMY
        </h1>
        <a href="tel:0507-1470-7075" className="bg-[#2d5a27] text-white px-6 py-2 rounded-full font-bold mr-4 hover:bg-green-800 transition-colors">
          📞 상담문의
        </a>
      </nav>

      {/* 메인 헤더 (1.png 배경) */}
      <header className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${mainBanner})` }}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
          <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tighter">JY GOLF</h2>
          <p className="text-lg font-light">나만의 완벽한 스윙을 완성하는 곳</p>
        </div>
      </header>

      <main className="p-6 md:p-12 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 시설 특징 섹션 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-50 text-center relative">
            <h3 className="text-2xl font-bold text-[#2d5a27] mb-6">🏆 야외 퍼팅장 및 모래 벙커장 보유</h3>
            
            <div className="relative inline-block w-full">
              {/* [2번] 2.jpg 이미지 출력 */}
              <img src={facilityImg} alt="" className="w-full rounded-2xl shadow-md" />
              {/* [3번] 기존에 있던 '벙커' 글자 태그를 완전히 삭제했습니다. */}
            </div>
          </div>

          {/* 결제 혜택 안내 */}
          <div className="bg-green-100 rounded-2xl p-6 border-2 border-dashed border-[#2d5a27] text-center shadow-sm">
            <h4 className="text-lg font-bold text-[#2d5a27] mb-2">💰 알뜰하게 이용하는 꿀팁!</h4>
            <p className="text-gray-700 font-medium leading-relaxed">
              서울페이, 온누리 상품권 사용 가능 매장<br/>
              <span className="text-[#2d5a27] font-black text-xl block mt-1">(이용권 이용 시, 10% 할인 효과)</span>
            </p>
          </div>

          {/* 하단 버튼 영역 */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link to="/guide" className="flex-1 bg-white text-[#2d5a27] border-4 border-[#2d5a27] px-8 py-5 rounded-2xl text-xl font-black shadow-lg text-center hover:bg-green-50 transition-all">
              🏢 타석 안내
            </Link>
            {/* [4번] 기존 버튼을 '공지사항'으로 변경하고 Notice 페이지로 연결 */}
            <Link to="/notice" className="flex-1 bg-[#2d5a27] text-white px-8 py-5 rounded-2xl text-xl font-black shadow-lg text-center hover:bg-green-800 transition-all">
              📢 공지사항
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm">
        <p>© 2025 JY GOLF ACADEMY | 상담문의: 0507-1470-7075</p>
      </footer>
    </div>
  );
}

export default Home;