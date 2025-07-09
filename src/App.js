import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="wrap">
      {/* 인사말 컴포넌트 */}
      <Greeting />
      {/* 카드 컴포넌트 */}
      <div className="card-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
