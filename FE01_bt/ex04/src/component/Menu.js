import React from 'react'
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

// import Home from './Home';
// import Contact from './contact';
// import Project from './Project';


function Menu() {
  const useStyle = createUseStyles({
    body : {
      display: 'block',
      justifyContent: 'center',
    },
    menu: {
      display: "flex",
      justifyContent: 'space-around',
      listStyleType: 'none',
      margin: 0,
      // width: 200,
      backgroundColor: "#f1f1f1",
    },
    list: {
      display: "block",
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 20
      
    },
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
    <div className={classes.body}>
    
      <ul className={classes.menu}>
        <h4>btissam</h4>
        <Link className={classes.lien} to='/'>Home</Link>
        <Link className={classes.lien} to='./About'>About</Link>
        <Link className={classes.lien} to='./Project'>Project</Link>
      </ul>
    </div>
  )
}

export default Menu