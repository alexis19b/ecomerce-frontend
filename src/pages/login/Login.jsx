import React from 'react';
import { Container , Wrapper, Title, Input, Button, Link, Form } from './style';


const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="Password" />
                <Button>LOGIN</Button>
                <Link>Do not you remember the password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login;
