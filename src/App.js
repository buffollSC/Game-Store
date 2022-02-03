import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './pages/home-page';
import { SelectGamePage } from "./pages/select-game-page";
import { OrderPage } from "./pages/order-page";
import { Header } from './components/header';
import { store } from "./redux";


function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <SelectGamePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
