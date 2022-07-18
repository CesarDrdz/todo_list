import React, {useState} from 'react'

const FormComponent = (props) => {
    const [input, setInput] = useState([])
    console.log(props);
    



    // submit handler is called through the onSubmit in the form.
    // 
    const submitHandler = (e) =>{
        e.preventDefault();
       const newObjFromForm = {
        title: input,
        isChecked: false
       }
       props.addTodoToState(newObjFromForm)
      //  console.log(newObjFromForm);
      //  console.log(props.x);
     
        
    }

  return (
    <form onSubmit={submitHandler}>
        {input}
        {/* calls setIput when the input is changed  */}
        <input type="text" onChange={(e)=>{
          // setting the new input to the value
            setInput(e.target.value)
        }}/>
        
        <button >add Todo</button>
    </form>
  )
}

export default FormComponent