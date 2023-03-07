import React from 'react'
import { createUseStyles } from 'react-jss';
function Project() {
  const useStyle = createUseStyles({
    body: {
      display: 'flex',
      // margin: 500
      justifyContent: 'center'
    },
    para: {
      // display: 'block',
      fontSize: 'auto'
    },
    cards : {
      // margin: 50,
      display: 'block',
      justifyContent: 'center',
      // maxHeight: '500px',
      backgroundColor: 'red',
      boxShadow: '1px 2px 9px #F4AAB9',
      margin: '4em',
      padding: '1em',
      // width: 300
    },
    "@media (max-width: 768px)":{
      cards: {
        width: '100%',
        display: 'grid'
      }
      
    }
  })
  const classes = useStyle()
  return (
    <div className={classes.body}>
    <div className={classes.cards}>
      <h1>project 1</h1>
      <h4>Chat App</h4>

      <p className={classes.para}>
        Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
        point_downpoint_down you send a message to a person or a group, they see the message and reply back.
      </p>
    </div>
    <div className={classes.cards}>
      <h1>project 2</h1>
      <h4>Loisira</h4>
      <p>
      Building a chat app with Socket.io and React rocket, just to give some context, 
      point_down you send a message to a person or a group, they see the message and reply.
      </p>
    </div>
    <div className={classes.cards}>
      <h1>project 3</h1>
      <h4>Titke: Expense_Tracker_ReactJs</h4>
      <p>
      In this project we will take a vanilla JS expense tracker app and turn it into a React app using hooks (useState, useContext, useReducer) and the context API.
      </p>
    </div>
    </div>
  )
}

export default Project