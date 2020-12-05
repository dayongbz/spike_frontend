import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";

const router = () => {
  <Router>
    <Route path="/" component={Main}></Route>
  </Router>;
};

export default router;
