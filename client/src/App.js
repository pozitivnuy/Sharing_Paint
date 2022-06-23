import React from 'react';
import './styles/app.scss'
import Canvas from './component/Canvas';
import Settingbar from './component/Settingbar';
import Toolbar from './component/Toolbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Switch>
          <Route path='/:id'>
                <Toolbar/>
                <Settingbar/>
                <Canvas/>
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`}/>
          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
    /> */}
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
