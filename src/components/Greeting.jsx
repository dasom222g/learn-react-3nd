import React from "react";
import Button from "./Button";

const Greeting = ({ userName, userAge, userMBTI }) => {
  // logic
  const textClass = "text-red";

  // basic style
  // camel: basicStyle
  // Pascal: BasicStyle
  // snake: basic-style

  const handleClick = (data) => {
    console.log("🚀 ~ data:", data);
    // if (data === "naver") {
    //   // 네이버로 이동하는 로직
    //   window.open("https://www.naver.com/");
    // } else {
    //   // 구글로 이동하는 로직
    //   window.open("https://www.google.com/?hl=ko");
    // }
    // 리팩토링
    // 삼항연산자: 조건식 ? Tru인경우 실행 코드 : False인경우 실행코드
    window.open(
      data === "naver"
        ? "https://www.naver.com/"
        : "https://www.google.com/?hl=ko"
    );
  };

  // view
  return (
    <div style={{ border: "1px solid blue" }}>
      <h1 className={`greeting-title ${textClass}`}>
        안녕하세요 {userName}님!
      </h1>
      <p>오늘하루도 시원한 하루 되세요!</p>
      <Button
        link={"https://www.naver.com/"}
        text="네이버 바로가기"
        category={"naver"}
        onClick={handleClick}
      />
      <Button
        link={"https://www.google.com/?hl=ko"}
        text="구글 바로가기"
        category={"google"}
        onClick={handleClick}
      />
    </div>
  );
};

export default Greeting;
