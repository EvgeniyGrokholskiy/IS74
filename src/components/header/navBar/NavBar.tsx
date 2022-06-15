import React from 'react';
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  color: black;
  font-size: 1.5em;
  position: sticky;
  top: 0;
  min-height: 50px;
  width: 100%;
  z-index: 5;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-width: 1096px;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin: 0 5px;
`

const FakeLink = styled.a`
  display: inline-block;
  color: inherit;
  line-height: 50px;
  list-style: none;
  text-decoration: none;
  height: 50px;

  &:hover {
    text-decoration: underline;
  }
`



const NavBar = () => {
    return (
        <StyledNavBar>
            <Ul>
                <ListItem>
                    <FakeLink>Все потоки</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Разработка</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Администрирование</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Дизайн</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Менеджмент</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Маркетинг</FakeLink>
                </ListItem>
                <ListItem>
                    <FakeLink>Научпоп</FakeLink>
                </ListItem>
            </Ul>
        </StyledNavBar>
    );
};

export default NavBar;