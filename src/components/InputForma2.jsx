import { useState } from "react";

const InputForma2 = ()=>{

  const preset= {
    message:""
  }
  const newYear= {
    message:"Happy New Year!!!"
  }
  const happyBday= {
    message:"Happy birthday to you!!!"
  }


  const [state, setState] = useState(preset);




  return (
    <div className='forma-boki'>
      <h1>Form</h1>
      <label>Message</label>
      <input
      type='text'
      name='message'
      value={state.message}
      />
      <button type="button" onClick={()=>{setState(preset)}}>Clear</button>
    </div>
  );
};

export default InputForma2;