import { Link } from "react-router-dom";

function Reservation() {
  return (
    <div className="min-h-screen bg-lime-50 px-8 py-10">
      {/* 페이지 제목 */}
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        예약 안내
      </h1>

      {/* 안내 카드 */}
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl">
        <ul className="space-y-4 text-green-900 text-lg">
          <li>
            ✔ 운영 시간: 평일 09:00 ~ 22:00 / 주말 10:00 ~ 18:00
          </li>

          <li>
            ✔ 레슨 방식: 1:1 / 소규모 그룹
          </li>

          <li>
            ✔ 레슨 시간: 20분
            <br />
            <span className="text-sm text-green-700">
              ※ 예약은 전날 오후 23:00까지, 당일 예약 불가
            </span>
          </li>

          <li>
            ✔ 상담 문의는 전화 예약으로만 진행됩니다.
          </li>
        </ul>

        {/* 전화 예약 버튼 */}
        <div className="mt-8 flex gap-4">
          <a
            href="tel:01012345678"
            className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
          >
            📞 전화 상담 예약
          </a>

          <Link
            to="/"
            className="px-6 py-3 border border-green-700 text-green-700 rounded-full hover:bg-green-100 transition"
          >
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
