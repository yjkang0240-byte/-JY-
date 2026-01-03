import React from 'react';

const Notice = () => {
  return (
    <div className="p-6 bg-[#f9f9f2] min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full space-y-6 text-[#2d4a22]">
        
        {/* 운영 시간 섹션 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
            <span className="text-[#8a5cf5]">✔</span> 운영 시간
          </h2>
          <ul className="space-y-1 ml-6 list-none">
            <li>· 평일: 09:00 ~ 22:00</li>
            <li>· 주말: 10:00 ~ 18:00</li>
            {/* 새로 추가된 휴무일 정보 */}
            <li className="text-red-600 font-bold mt-1">
              · 정기 휴무일: '2째 주'와 '마지막 주' 일요일
            </li>
          </ul>
        </section>

        {/* 레슨 방식 섹션 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-1">
            <span className="text-[#8a5cf5]">✔</span> 레슨 방식: 1:1
          </h2>
        </section>

        {/* 레슨 시간 섹션 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
            <span className="text-[#8a5cf5]">✔</span> 레슨 시간: 20분
          </h2>
        </section>

        {/* 예약 유의사항 */}
        <p className="text-sm font-medium text-gray-700 mt-6 pt-4 border-t border-gray-200">
          ※ 예약은 전날 오후 23:00까지, 당일예약 불가
        </p>
        
      </div>
    </div>
  );
};

export default Notice;
