import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Header />

      <Route exact path="/" >
          <Home />
      </Route>

      <Route exact path="/profile" >
          <Profile />
      </Route>
    </>
    
  );
}

export default App;
