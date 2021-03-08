import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Dashboard } from '../pages/Dashboard'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/przebieg">
          <div>Przebieg</div>
        </Route>
      </Switch>
    </Router>

  )
}
