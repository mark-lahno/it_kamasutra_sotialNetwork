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

let dialogs = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Victor' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Mark' },
  { id: 6, name: 'Stepan' },
];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)



let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'Yo yo yo' },
  { id: 4, message: 'Its a me, Mario' },
  { id: 5, message: 'hands on table' },
  { id: 6, message: 'I am who knonks' },
  { id: 6, message: 'I am who knonks, Skyler' },
]

let messagesElements = messages.map(m => <Message message={m.message} />)

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
      {dialogsElements}
    </div>
    <div className="classes.message">
      {messagesElements}
    </div>
  </div>
};

export default Dialogs;