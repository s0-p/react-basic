import './App.css';
import MyHeader from './componenets/MyHeader.jsx';
import Nav from './componenets/Nav.jsx';
import MyArticle from './componenets/MyArticle.jsx';

function App() {
  return (
    <>
      <MyHeader />
      <Nav />
      <MyArticle title="UI/UX 개발" desc="사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현" />
    </>
  );
}

export default App;
