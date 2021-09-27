import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pagePath from './constants/pagePath';
import { ComposeMail, SingleMail, AllMail } from './components/pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={pagePath.default}>
            <AllMail />
          </Route>
          <Route path={pagePath.inbox}>
            <AllMail />
          </Route>
          <Route path={pagePath.singleMail}>
            <SingleMail />
          </Route>
          <Route path={pagePath.composeMail}>
            <ComposeMail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
