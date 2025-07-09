// import Card from "./components/Card";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  // logic
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");

  const userStep = () => {
    const userNum = prompt("숫자의 간격을 입력해주세요");
    setStep(Number(userNum));
  };

  // useEffect(() => {
  //   // 컴포넌트가 생성됐을때 딱 한번 실행
  //   // 미션1-1: 사용자의 이름 입력받기
  //   const name = prompt("이름을 입력해주세요");
  //   setUserName(name);
  // }, []);

  // 미션1: 입력받은 사용자 이름으로 Greeting컴포넌트 수정하기
  // Hint: props사용하기

  // view
  return (
    <div className="wrap">
      {/* 인사말 컴포넌트 */}
      <Greeting userName={userName} userAge={20} userMBTI={"ENTJ"} />
      {/* counter 컴포넌트 */}
      <Counter step={step} />
      <button type="button" onClick={userStep}>
        간격 선택
      </button>
      <Counter step={10} />
      {/* 카드 컴포넌트 */}
      <div className="card-wrap">
        <Card imgSrc={".."} title={"card1"} text={"card text1"} />
        <Card imgSrc={".."} title={"card2"} text={"card text2"} />
        <Card imgSrc={".."} title={"card3"} text={"card text3"} />
        <Card imgSrc={".."} title={"card4"} text={"card text4"} />
      </div>
    </div>
  );
}

export default App;
