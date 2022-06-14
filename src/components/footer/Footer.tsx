import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #282c34;
  color: white;
  line-height: 90px;
  text-align: center;
  height: 90px;
  width: 100%;
`

const Footer = () => {
    return (
        <footer>
            <StyledFooter>
                Классный футер с меню и копирайт информацией
            </StyledFooter>
        </footer>
    );
};

export default Footer;