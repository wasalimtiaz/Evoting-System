import React,{Component} from 'react'
import { signInWithGoogle } from '../../../src/firebase/firebase.utils'
import { Container,Text,Icon,Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, FormButton, FormButtona, FormButtonb} from './SigninElements'
import {auth} from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.signin = this.signin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email:"",
            password:""
        }
    }

    signin(e){
        e.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
       })

    }

    signup(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

render(){

    return (
        <>
        <Container>
        <FormWrap>
        <Icon to='/'>eVote</Icon>
        <FormContent>
            <Form action='#'>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' name="email" placeholder="Enter your email id" onChange={this.handleChange} value={this.state.email} required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' name="password"  placeholder="Enter password" onChange={this.handleChange} value={this.state.password} required />
                <FormButton type='submit' onClick={this.signin}>{''}Continue{''}</FormButton>
                <FormButtonb type='submit' onClick={this.signup}>{''}SignUp{''}</FormButtonb>
                <FormButtona onClick={signInWithGoogle}>{''}Sign in with Google{''}</FormButtona>
                <Text>Forgot Password</Text>
            </Form>
        </FormContent>
        </FormWrap>
        </Container>
        </>
    )

}
}


export default SignIn;
