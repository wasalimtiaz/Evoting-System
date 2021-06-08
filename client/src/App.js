import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages'
import Log from './components/Signin/log'
import SigninPage from './pages/signin';
import {auth} from './firebase/firebase.utils';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import NameList from './components/NameList';
import AddName from './components/AddName'
// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
});



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }

render(){
  return (
    <Router>
    <Switch>
    <Route path='/' component={Home} exact />
    <div Route path='/signin' component={SigninPage} exact >
    {this.state.user ? (<Log/>) : (<SigninPage/>)}
    </div>
    <Route>
    <ApolloProvider client={client}>
    <div id="main">
        <h1>User Information</h1>
        <NameList />
        <AddName/>
    </div>
    </ApolloProvider>
    </Route>
    </Switch>
    </Router>
    
  );
 }
}

export default App;




/*  */

//<Route path='/signin' component={SigninPage} exact />
   