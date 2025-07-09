import Move from "../components/Move";
import TodoList from "../components/TodoList";

const Home = () => {
  // logic
  // const [step, setStep] = useState(0);
  // const [userName, setUserName] = useState("");

  // const userStep = () => {
  //   const userNum = prompt("숫자의 간격을 입력해주세요");
  //   setStep(Number(userNum));
  // };

  // view
  return (
    <div>
      Home
      <TodoList />
      <Move />
      {/* 인사말 컴포넌트 */}
      {/* <Greeting userName={userName} userAge={20} userMBTI={"ENTJ"} /> */}
      {/* counter 컴포넌트 */}
      {/* <Counter step={step} />
      <button type="button" onClick={userStep}>
        간격 선택
      </button>
      <Counter step={10} /> */}
      {/* 카드 컴포넌트 */}
      {/* <div className="card-wrap">
        <Card imgSrc={".."} title={"card1"} text={"card text1"} />
        <Card imgSrc={".."} title={"card2"} text={"card text2"} />
        <Card imgSrc={".."} title={"card3"} text={"card text3"} />
        <Card imgSrc={".."} title={"card4"} text={"card text4"} />
      </div> */}
    </div>
  );
};

export default Home;
