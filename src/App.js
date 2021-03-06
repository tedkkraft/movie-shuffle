import curtains from './theatre-curtains.png';
import './App.css';
import Search from "./components/search"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={curtains} className="App-logo" alt="logo" />
        <p>
          Enter your Letterboxd username
        </p>

          <div class="row">
            <div class="form-group col text-center">
              <input type="username" class="form-control text-center" id="letterboxdUsername" placeholder="enter username"/>
            </div>
          </div>

          <div class="row justify-content-center cbod">
            <button type="submit" class="btn btn-danger w-25 m-3 btn-search" id="sub">Search</button>
          </div>
      </header>
    </div>
  );
}

export default App;
