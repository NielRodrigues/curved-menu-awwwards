import React, { useState } from 'react'
import { BurgerIcon, Container, Links, Media, Nav } from './style'

function Menu() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Container
        onClick={() => setOpen(!open)}
        className={open ? "active" : ""}
      >
        <BurgerIcon
          className={open ? "burgerActive" : ""}
        />
      </Container>
      <Nav
        className={open ? "active" : "desactive"}
        style={open ? {rigth: "0px"} : {right: "-400px"}}
      >
        <h3 className='menu'>MENU</h3>

        <Links>
          <a href='#'>Home</a>
          <a href='#'>Trabalhos</a>
          <a href='#'>Sobre</a>
          <a href='#'>Contato</a>
        </Links>

        <Media>
          <h3 className='media'>MÍDIA</h3>
          <div className='media'>
            <a href='#'>Instagram</a>
            <a href='#'>Linkedin</a>
            <a href='#'>WhatsApp</a>
          </div>
        </Media>
      </Nav>
    </>
  )
}

export default Menu
