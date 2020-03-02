import React, { useState } from 'react'
import { Logo, TopMenu, HeaderContainer, MenuItem, LogoContainer, MenuItemIcon, MenuMobileHeader } from './Styles'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import menuItems from './menu'
import HamburgerSwitch from '../buttons/HamburgerSwitch'
import { WHITE } from '../theme'

export default function Header() {
  const [menuHighlighted, setmenuHighlighted] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  //Menu dynamic theme when the page scroll down/up
  $(window).on('scroll', function() {
    var navHeight = '100';
      if ($(window).scrollTop() > navHeight) {
        setmenuHighlighted(true);
      }
      else {
        setmenuHighlighted(false);
      }
  });

  const menuSwitch = open => {
    setMenuOpened(open)
  }

  return (
    <HeaderContainer id="menu">
      <LogoContainer highlighted={menuHighlighted}>
        <Logo alt="Arrocha o nó" src="images/logo.png"/>
      </LogoContainer>
      <TopMenu
        menuOpened={menuOpened}
        highlighted={menuHighlighted}>
        <MenuMobileHeader>
          <HamburgerSwitch
            color={WHITE} meatHeight={5}
            width={40} height={30}
            onSwitch={menuSwitch}/>
        </MenuMobileHeader>
        {menuItems.map(mi => (
          <MenuItem
            href={mi.anchor} key={mi.messageId}
            highlighted={menuHighlighted}>
            <MenuItemIcon className={"fa " + mi.icon}/>
            <FormattedMessage id={mi.messageId} defaultMessage={mi.defaultMessage}/>
          </MenuItem>
        ))}
      </TopMenu>
    </HeaderContainer>
  )
}
