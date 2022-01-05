import { BrowserRouter, Route } from "react-router-dom";
import "./index.scss";

import { routes } from "./utils/constants/Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
      </BrowserRouter>
    </div>
  );
}

export default App;
