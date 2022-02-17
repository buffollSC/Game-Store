import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { SelectGamePage } from "./pages/select-game-page/select-game-page";
import { LoginPage } from "./pages/login-page/login-page";
import { RegisterPage } from "./pages/register-page";
import { OrderPage } from "./pages/order-page";
import { HomePage } from './pages/home-page';
import { Header } from './components/header';
import './firebase';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <HomePage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/login/:register">
                        <RegisterPage />
                    </Route>
                    <Route exact path="/app/:title">
                        <Header />
                        <SelectGamePage />
                    </Route>
                    <Route exact path="/order">
                        <Header />
                        <OrderPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
