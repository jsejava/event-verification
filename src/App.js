import { BrowserRouter, Route, Switch } from "react-router-dom";
import { positions, Provider } from "react-alert";

import Feeds from "./Pages/Feeds";
import Form from "./Pages/Form";

const options = {
  timeout: 50000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/feeds" component={Feeds} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
