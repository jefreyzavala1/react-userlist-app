import React,{useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault(); //prevents page from reloading

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        return;
    }
    if(Number(enteredAge) < 1){
        return;
    }
   // console.log(enteredUsername, enteredAge)
   props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');

  };

  const usernameChangeHandler  = event =>{
   setEnteredUsername(event.target.value);

  }

  const ageChangeHandler  = event =>{
    setEnteredAge(event.target.value);
   }
  return (
    <div>
      <ErrorModal title = "An error occurred!" message = "Something went wrong"/>
    <Card className = {classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value ={enteredUsername}onChange={usernameChangeHandler}></input>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
