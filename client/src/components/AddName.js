import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright'
import { getUsersQuery, addNameMutation, getNamesQuery } from '../queries/queries';
import { Container,Icon,Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, FormButton } from './DataformElements'


class AddName extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            location: '',
            userId: ''
        };
    }
    displayUsers(){
        var data = this.props.getUsersQuery;
        if(data.loading){
            return( <option disabled>Loading Users</option> );
        } else {
            return data.users.map(user => {
                return( <option key={ user.id } value={user.id}>{ user.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        this.props.addNameMutation({
            variables: {
                name: this.state.name,
                location: this.state.location,
                userId: this.state.userId
            },
            refetchQueries: [{ query: getNamesQuery }]
        });
    }
    render(){
        return (
            <>
            <Container>
            <FormWrap>
            <Icon to='/'>eVote</Icon>
            <FormContent>
                <Form action='#' id="add-name" onSubmit={ this.submitForm.bind(this) }>
                    <FormH1>User Information</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type="text"  onChange={ (e) => this.setState({ name: e.target.value }) }  />
                    <FormLabel htmlFor='for'>Location</FormLabel>
                    <FormInput type="text"  onChange={ (e) => this.setState({ location: e.target.value }) }  />
                    <FormLabel htmlFor='for'>CNIC</FormLabel>
                    <FormInput type="text" onChange={ (e) => this.setState({ userId: e.target.value }) }  />
                    <FormButton type='submit'>Continue</FormButton>
    
                </Form>
            </FormContent>
            </FormWrap>
            </Container>
            </>
        )
    }
}

export default compose(
    graphql(getUsersQuery, { name: "getUsersQuery" }),
    graphql(addNameMutation, { name: "addNameMutation" })
)(AddName);




