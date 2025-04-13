import React from 'react'
import { Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton} from './SignInElements'
const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>doll</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput type='email' required></FormInput>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type="password" required/>
                    <FormButton type="submit">Continue</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn