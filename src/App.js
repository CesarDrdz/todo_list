import React, {useState} from 'react'
import './App.css';
import FormComponent from './components/FormComponent';

function App() {
const [todolist, setTodoList] = useState([
  // this is the todolist 
  {
    title: "Learn MERN",
    isChecked: true,
    
  },
  {
    title: "Learn Javascript",
    isChecked: false,
    
  },
  {
    title: "Python",
    isChecked: true,
    
  }
]);
// adding a new obj from the form component to the state list here via newObjFromform.
const addTodoToState = (newObjFromForm) =>{
  console.log(newObjFromForm);
  setTodoList([...todolist, newObjFromForm]);
}
// UPDATE
const updateTodoList = (i) =>{
  console.log(todolist[i])
  // create copy of state 
  const newArr = [...todolist]
  // manipulating the temp state 
 if(newArr[i].isChecked === true){
  newArr[i].isChecked = false
 }else {
  newArr[i].isChecked = true
 }
//  set the temp "newArr" state to the new state "todolist" todolist is immutable because its the state obj of this component. 
// the only way to change state is to use the setter! setTodoList is a function()
 setTodoList(newArr)

}

// DELETE
const deleteTodo = (i) =>{
  console.log(i);
  // copy of state.

// manipulate/ remove from list
 const newArr = todolist.filter((oneTodo,idx) =>{

    if(i !== idx){
      // return idx !== i
      return true

    }else {
      return false
    }

  
  })

  setTodoList(newArr)

}

// the value for the checked box is called w/checked
  return (
    <div className="App">
      {JSON.stringify(todolist)};

      <ul>
      {todolist.map((oneTodo, i)=>{
        return <li key={i}>{oneTodo.title} 
        <input type="checkbox" onChange={()=>{updateTodoList(i)}}  checked={oneTodo.isChecked}/>
        <button onClick={()=>{deleteTodo(i)}}>delete</button>
        </li>
      })}
      </ul>
      {/* the keys are passed over to props the key dont need be anything however, by concvention we name it the same thing.  */}
      <FormComponent
      addTodoToState={addTodoToState}/>

    </div>
  );
}

export default App;
