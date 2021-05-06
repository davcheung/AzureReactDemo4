import { Route, Switch } from "react-router-dom";

import Companies from "./pages/Home";
import RecruitersPage from "./pages/Recruiters";
import About from "./pages/Favorites";
import Contact from './pages/Contact';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Companies />
        </Route>
        <Route path="/recruiters">
          <RecruitersPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
