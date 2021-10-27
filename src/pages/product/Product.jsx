import React from 'react'
import Anuncios from '../../components/anuncios/Anuncios';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import {Container, Wrapper, ImgContainer, InfoContainer, Title, Description, Price, Image} from './style';

export const Product = () => {
    return (
        <Container>
            <Navbar />
            <Anuncios />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denin Jumpusut</Title>
                    <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio impedit voluptatum iure perspiciatis, officia magni iste. Odio iure quia, ipsa explicabo accusamus illo iusto repellendus, vitae non aut obcaecati. </Description>
                    <Price>$ 20</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
