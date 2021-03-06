import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';
//semantic-ui
import { Container } from 'semantic-ui-react';
//styles
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import {AuthProvider} from './context/auth'
import AuthRoute from './util/AuthRoute';
import SinglePost from './pages/SinglePost';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
