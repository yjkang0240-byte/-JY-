function Contact() {
    return (
      <div style={{ padding: "40px" }}>
        <h1>문의 / 상담</h1>
  
        <p>
          이용 관련 문의는 아래 전화번호로 연락 주세요.
        </p>
  
        <a
          href="tel:전화0507-1470-7075"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#2f8f5b",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          📞 전화 상담 바로가기
        </a>
      </div>
    );
  }
  
  export default Contact;
  