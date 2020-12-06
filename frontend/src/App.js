import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Route exact path="/" >
          <Home />
      </Route>

      <Route path="/signup" >
          <Signup />
      </Route>

      <Route path="/login" >
          <Login />
      </Route>

      <Route path="/profile" >
          <Profile />
      </Route> */}
    </BrowserRouter>
    
  );
}

export default App;
