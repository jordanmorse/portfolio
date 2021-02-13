import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
