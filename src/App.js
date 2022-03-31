import './App.css';
import Header from './Header';

function App() {
  return (
    //BEM Convention naming
    <div className="app">
      <h1>Hello Bebyelephant, lets build the first react app</h1>

      {/* 
      Header 
      -Create Header.js
      -Create Header.css
      -Render Header*/}

      <Header />

      {/* Home */}

    </div>
  );
}

export default App;
