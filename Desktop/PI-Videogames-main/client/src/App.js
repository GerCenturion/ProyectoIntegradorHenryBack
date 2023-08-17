import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/nav/nav";
import VideogameDetail from "./components/videogameDetails/videogameDetails";
import Videogames from "./components/videogames/videogames";
import CreateVideogame from "./components/createVideogame/createVideogame";
import Landing from "./components/landing/landing";
import NotFound from "./components/notFound/notFound"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/home/createvideogame">
          <Nav />
          <CreateVideogame />
        </Route>

        <Route exact path="/home/videogame">
          <Nav />
          <Videogames />
        </Route>

        <Route exact path="/home/videogame/:id">
          <Nav />
          <VideogameDetail />
        </Route>

        <Route exact path="/home/notfound">
          <Nav />
          <NotFound />
        </Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
