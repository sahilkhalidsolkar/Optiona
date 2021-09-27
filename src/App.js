import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Login from "./components/Login";
import ViewData from './components/ViewData'
function App() {
  return (
    <BrowserRouter>
    <div className="App min-h-screen bg-gray-50">
      <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/viewData' exact component={ViewData}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
