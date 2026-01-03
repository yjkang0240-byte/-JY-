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
        <img
          src={img1}
          alt="골프장 메인"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            프리미엄 골프 레슨
          </h1>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">예약 안내</h2>

        <p className="mb-4 text-lg">
          예약은 전화 또는 온라인 문의로 진행됩니다.
        </p>

        <button
          onClick={() => setShowPhone(!showPhone)}
          className="
            w-full sm:w-auto
            px-8 py-5 sm:px-6 sm:py-3
            text-xl sm:text-base
            bg-green-800 text-white
            rounded-xl
            hover:bg-green-900
            transition
          "
        >
          {showPhone ? "전화번호 숨기기" : "골프장 전화번호 보기"}
        </button>

        {showPhone && (
          <p className="mt-4 text-2xl font-bold text-green-800">
            📞 010-2154-0240
          </p>
        )}

        <div className="mt-8 space-y-2 text-lg">
          <p>✔ 운영 시간</p>
          <p className="ml-4">· 평일: 09:00 ~ 22:00</p>
          <p className="ml-4">· 주말: 10:00 ~ 18:00</p>
          <p>✔ 레슨 방식: 1:1 </p>
          <p>
            ✔ 레슨 시간: 20분 <br />
            ※ 예약은 전날 오후 23:00까지, 당일예약 불가
          </p>
        </div>
      </section>

      {/* 중요 공지 상단 */}
      <section className="px-6 max-w-4xl mx-auto mb-10">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">⚠️ 중요 안내</h3>
          <p className="text-lg">
            연습장 이용은 <strong>1일 1회만 입장 가능</strong>하며,
            레슨 예약은 <strong>전날 밤 11시 이전</strong>까지 가능합니다.
          </p>
        </div>
      </section>

      {/* 공지사항 */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <button
          onClick={() => setOpenNotice(!openNotice)}
          className="text-3xl font-bold mb-6 flex items-center gap-2"
        >
          공지사항 {openNotice ? "▲" : "▼"}
        </button>

        {openNotice && (
          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <p className="font-bold">
                1. 연습장 이용 안내
              </p>
              <p>• 연습장 이용은 ‘1일 1회’만 입장 허용됩니다.</p>
              <p>• 퍼팅장 및 벙커장 이용은 언제든지 가능합니다.</p>
              <p>• 퍼팅장 및 벙커장 이용 후 볼은 <strong>‘반드시’</strong> 원위치 부탁드립니다.</p>
            </div>

            <div>
              <p className="font-bold">
                2. 연습화 착용 안내
              </p>
              <p>
                • 연습화 및 운동화만 착용 가능
                <strong> (‘필드화 불가’)</strong>
              </p>
              <p>※ 필드화 징으로 인한 매트 손상 및 청결 유지</p>
            </div>

            <div>
              <p className="font-bold">
                3. 레슨권 이용 안내
              </p>
              <p>• 레슨 예약은 <strong>전날 밤 11시 이전까지 가능</strong>, 당일 예약 불가</p>
              <p>• 예약된 레슨은 <strong>당일 취소 불가</strong>, 취소 시 1회 차감</p>
              <p>• 레슨권은 이용 기간 내 소진 (이월 불가)</p>
              <p>• 8회권: 1개월 / 16회권: 3개월</p>
              <p>※ 반드시 레슨 시간 준수, 10분 전 준비</p>
            </div>

            <div>
              <p className="font-bold">
                4. 락카 이용 안내
              </p>
              <p>• 이용 만료 시 락카 정리 필수</p>
              <p>
                • 1주일 이상 보관 시 <strong>보관료 추가</strong>
              </p>
              <p>
                ※ <strong>3개월 이상 경과 시 폐기처분</strong>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 하단 이미지 */}
      <section className="h-[40vh]">
        <img
          src={img2}
          alt="골프장 전경"
          className="w-full h-full object-cover"
        />
      </section>

    </div>
  );
}

export default App;
