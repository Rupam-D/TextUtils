import './App.css';
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils';

function App() {
  return (
    <>
      <Navbar tittle="TextUtils." about="About Us" />
      <div className="containerr">
        <TextUtils heading="TextUlitils. - analyze your Texts" />
      </div>

    </>


  );
}

export default App;
