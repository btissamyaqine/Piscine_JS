import React from 'react'
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Menu() {
  const useStyle = createUseStyles({
    lien: {
      textDecoration: 'none',
      color: "#000",
      padding: {
        top: 8,
        left: 16
      },

    }
  })
  const classes = useStyle();
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link className={classes.lien} to='/'>Home</Link>
              <Link className={classes.lien} to='./About'>About</Link>
              <Link className={classes.lien} to='./Project'>Project</Link>
            </Nav>
        </Container>
      </Navbar>
  </ThemeProvider>

  )
}

export default Menu