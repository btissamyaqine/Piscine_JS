import React from 'react'
// import logo from './logo.jpg'
import createUseStyles from 'react-jss'
function Home() {
 const makeStyle = createUseStyles({
  logo: {
    width: '10em',
    height: '20em',

    // marginTop: 500,
  },
  home: {
    display: 'flex',
    justifyContent: 'center'
  },
  "@media (max-width: 786px)":{
    width: '100%'
  }
 });
 const classes = makeStyle();

  return (
    <div className={classes.home}>
      <div> 
        <h3>Hi!</h3>
        <h1>I'm Btissam</h1>
        <p>I am a self-taught developer, and And a wife about a 2 years based in Morocco.</p>
      </div>
      <div></div> 
    </div>
  )
}

export default Home