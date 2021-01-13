import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductFeature from "./features/Product";
import "./index.css";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <Header />

      <ProductFeature />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/posts" component={PostPage} />
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
