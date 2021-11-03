import React from 'react'
import Anuncios from '../../components/anuncios/Anuncios';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Container, Wrapper, Title, Top, Bottom, TopButton, TopText, TopTexts } from './style';

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Anuncios />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping </TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now </TopButton>
                </Top>
                <Bottom>Send</Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
