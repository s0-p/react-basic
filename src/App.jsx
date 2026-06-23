import './App.css';

function MyHeader() {
  return (
    <header>
      <h1 className="logo">프론트엔드 개발자</h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
    </header>
  );
}
function App() {
  return (
    <>
      <MyHeader />
    </>
  );
}

export default App;
