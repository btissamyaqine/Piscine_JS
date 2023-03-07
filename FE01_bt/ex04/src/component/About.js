import React from 'react'
import { createUseStyles } from 'react-jss'
 

function about() {
  const makeStyle = createUseStyles({
    profil : {
      // width: 800,
      display: 'grid',
      justifyContent: 'center',
      textAlign: 'center'
    },
    
    "@media (max-width: 786px)":{
      width: '100%'
    }
  });
  const classes = makeStyle();
  return (
    <div className={classes.profil}>
      <h1>Btissam YAQINE</h1>
      <p className={classes.desc}>I'm competent and challangings web developer, 
      over the years, Enthusiastic and positive, 
      Passionate about new technologies. I has built up a diverse range of skills, 
      I also enjoy reading and Discover new traditions by traveling .
      Check out my developer projects portfolio.
      </p>
    </div>
  )
}

export default about