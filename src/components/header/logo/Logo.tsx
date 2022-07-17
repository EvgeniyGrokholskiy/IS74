import React from 'react';
import styled from "styled-components";

const StiledDiv = styled.div`
  display: flex;
  
  justify-content: center;
  border-bottom: 2px solid gray;
  height: 50px;
  width: 100%;
`

const StyledHeader = styled.header`
  align-self: center;
`

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  max-width: 1096px;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 1em;
    gap: 5px;
    height: auto;
  }
`

const StiledImg = styled.img`
  position: absolute;
  left: 66px;
`


const Logo = () => {
    return (
        <StiledDiv>
            <StyledWrapper>
                <StiledImg src={"https://www.is74.ru/upload/medialibrary/105/10529629348b1850e9c848d518e0a1a7.jpg"}
                     alt={"Логотип компании Интесвязь"}/>
                <StyledHeader>Альманах IS74</StyledHeader>
            </StyledWrapper>
        </StiledDiv>
    );
};

export default Logo;