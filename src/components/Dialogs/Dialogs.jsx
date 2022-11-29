import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id

  return <div className={classes.dialog + ' ' + classes.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div >
}

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>

}

let dialogsData = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Victor' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Mark' },
  { id: 6, name: 'Stepan' },
];

let a = {
  id: 1,
  name: 'Andrey'
};

let s = {
  id: 2,
  name: 'Sasha'
};
let v = {
  id: 3,
  name: 'Victor'
};
let sv = {
  id: 4,
  name: 'Sveta'
};
let m = {
  id: 5,
  name: 'Mark'
};


const Dialogs = (porps) => {
  return <div className={classes.dialogs}>
    <div className={classes.dialogItems}>
      <DialogItem name="Andrey" id="1" />
      <DialogItem name="Sasha" id="2" />
      <DialogItem name="Victor" id="3" />
      <DialogItem name="Sveta" id="4" />
      <DialogItem name="Mark" id="5" />

    </div>
    <div className="classes.message">
      <Message message='Hi' />
      <Message message='How are you?' />
      <Message message='YO yo yo' />
    </div>
  </div>
};

export default Dialogs;