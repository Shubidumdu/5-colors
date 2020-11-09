import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import PicCrop from "./pages/PicCrop";
import PicUpload from "./pages/PicUpload";
import Result from "./pages/Result";
import ColorPick from "./pages/ColorPick";
import ColorEdit from "./pages/ColorEdit";

const routes = [
  {
    Component: Main,
    path: "/",
  },
  { Component: PicUpload, path: "/upload" },
  { Component: PicCrop, path: "/crop" },
  { Component: ColorPick, path: "/color/pick" },
  { Component: Result, path: "/result" },
  { Component: ColorEdit, path: "/color/edit" },
];

function App() {
  return (
    <div className="App">
      <Router>
        {routes.map(({ Component, path }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;
