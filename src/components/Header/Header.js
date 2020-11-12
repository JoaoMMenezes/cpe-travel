import React, { useState } from 'react';
import { TiPlaneOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';
import { BiBed, BiMenu } from 'react-icons/bi';
import { RiSuitcaseLine } from 'react-icons/ri';
import {
  Drawer, List, ListItem, ListItemText,
} from '@material-ui/core';
import Button from '../Button';
import Logo from '../Logo';
import './Header.css';

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const headerItens = [
    {
      icon: <TiPlaneOutline className="icons" />,
      path: '/',
      text: 'Passagens',
    },
    {
      icon: <BiBed className="icons" />,
      path: '/',
      text: 'Hotéis',
    },
    {
      icon: <RiSuitcaseLine className="icons" />,
      path: '/',
      text: 'Pacotes',
    },
  ];
  return (
    <div className="containerBurger">
      <IconContext.Provider value={{ color: 'white', size: '30px' }}>
        <BiMenu onClick={() => setOpen(true)} />
      </IconContext.Provider>
      <Drawer open={open}>
        <List>
          {headerItens.map((item) => (
            <ListItem>
              <IconContext.Provider value={{ color: 'blue' }}>
                {item.icon}
              </IconContext.Provider>
              <ListItemText>
                {item.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

function Header() {
  const headerItens = [
    {
      icon: <TiPlaneOutline className="icons" />,
      path: '/',
      text: 'Passagens',
    },
    {
      icon: <BiBed className="icons" />,
      path: '/',
      text: 'Hotéis',
    },
    {
      icon: <RiSuitcaseLine className="icons" />,
      path: '/',
      text: 'Pacotes',
    },
  ];
  const margin = '0px 20px 0px 0px';

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Logo />
        {headerItens.map((item) => (
          <div className="divButton" key={item.text}>
            {item.icon}
            <Button configMargin={margin} page={item.path}>{item.text}</Button>
          </div>
        ))}
      </div>
      {BurgerMenu()}
      <div className="rightContainer">
        <Button configMargin="0px 5px 0px 0px" page="/cadastro">Cadastre-se</Button>
        <p className="bar">|</p>
        <Button configMargin="0px 0px 0px 5px" page="/login">Entrar</Button>
      </div>
    </div>
  );
}

export default Header;
