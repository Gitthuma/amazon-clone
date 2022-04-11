import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //BEM Convention naming
    <div className="app">
      {/*Removed place holder text*/}

      {/* 
      Header 
      -Create Header.js
      -Create Header.css
      -Render Header*/}

      <Header />

      {/* 
      Home 
      -Create Home.js
      -Create Home.css
      -Render Home*/}

      <Home />

    </div>
  );
}

export default App;
