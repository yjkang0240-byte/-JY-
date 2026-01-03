function Faq() {
    return (
      <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>자주 묻는 질문</h1>
  
        <p style={{ marginBottom: "30px", color: "#555" }}>
          골프연습장 이용 전, 많은 분들이 궁금해하시는 내용을 정리했습니다.
        </p>
  
        <details>
          <summary>연습장 이용 시간은 어떻게 되나요?</summary>
          <p>매일 06:00 ~ 24:00까지 이용 가능합니다.</p>
        </details>
  
        <details>
          <summary>연습장은 하루에 몇 번 이용할 수 있나요?</summary>
          <p>
            연습장은 1일 1회 입장 가능합니다.
            퍼팅장과 벙커장은 이용 가능하며, 사용 후 반드시 원위치해 주세요.
          </p>
        </details>
  
        <details>
          <summary>연습 시 착용 가능한 신발은 무엇인가요?</summary>
          <p>
            연습화 또는 운동화만 착용 가능합니다.
            필드화는 매트 손상 및 청결 유지를 위해 착용이 불가합니다.
          </p>
        </details>
      </div>
    );
  }
  
  export default Faq;
  