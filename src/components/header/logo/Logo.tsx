import React from 'react';
import styled from "styled-components";

const StiledDiv = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  height: 50px;
  width: 100%;
`


const Logo = () => {
    return (
        <StiledDiv>
            <img src={"https://www.is74.ru/upload/medialibrary/105/10529629348b1850e9c848d518e0a1a7.jpg"} alt={"Логотип компании Интесвязь"}/>
            Альманах IS74
        </StiledDiv>
    );
};

export default Logo;