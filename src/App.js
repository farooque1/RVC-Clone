import React from 'react';
import Home from './Home';
import Austria from './component/Austria';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom';
import Belgium from './component/Belgium';
import NewsDelay from './component/NewsDelay';
import Newsupdate from './component/Newsupdate';
import Additional from './component/Additionalservice';
import FAQ from './FAQ';

function App() {
  
  return (

    <div>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/Austria" component={Austria}></Route>
    <Route exact path="/NewsDelay" component={NewsDelay}></Route>
    <Route exact path="/Newsupdate" component={Newsupdate}></Route>
    <Route exact path="/FAQ" component={FAQ}></Route>
    <Route exact path="/Additionalservice" component={Additional}></Route>
    <Route exact path="/Belgium" component={Belgium}></Route>
    </Switch>
    </BrowserRouter>      
    </div>

  );
}

export default App;
