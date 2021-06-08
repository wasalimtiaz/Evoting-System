import React,{Component} from 'react'
import {auth} from '../../firebase/firebase.utils'

class Log extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }

logout(){
auth.signOut();
}
render(){

    return (
        <div>
        <h1>You are Logged In!</h1>
        <button onClick = {this.logout}>Logout</button>
        </div>
    )

}
}


export default Log;
