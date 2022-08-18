import { useState } from "react";

const InputForma2 = () => {

  const preset = {
    message: ""
  }
  const newYear = {
    message: "Happy New Year!!!"
  }
  const happyBday = {
    message: "Happy birthday to you!!!"
  }


  const [state, setState] = useState(preset);

  const handleChange = (e) => {
    console.log(e)
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    })
  }


  return (
    <div className="form-a">
      <div className='form-b'>
      <h1>Form</h1>
      <label>Message</label>
      <input
        type='text'
        name='message'
        value={state.message}
        onChange={handleChange}
      />
      <button type="button" onClick={() => { setState(preset) }}>Clear</button>
      <button type="button" onClick={() => { setState(newYear) }}>Happy NY</button>
      <button type="button" onClick={() => { setState(happyBday) }}>Happy B-day</button>
    </div>
    </div>
  );
};

export default InputForma2;