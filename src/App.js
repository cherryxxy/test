import React, { useState } from 'react';
import './App.css';

function InputNumber () {
  console.log(arguments[0])
  const InputValue = arguments[0].value
  const DefaultValue = arguments[0].defaultValue
  const [innervalue, setInnerValue] = useState(DefaultValue || InputValue)
  const OnChange = arguments[0].onChange || function () { }
  const InputPlaceholder = arguments[0].placeholder || "请输入文字"

  return (
    <div>
      <input placeholder={InputPlaceholder} value={InputValue ? InputValue : innervalue} onChange={(e) => {
        if (DefaultValue) {
          setInnerValue(e.target.value)
        } else {
          OnChange(e)
        }
      }} />
    </div>
  )
}
function App () {
  const [value, setValue] = useState('aaa')
  const [Placeholder, setPlaceholder] = useState('我是placeholder')
  return (
    <div>
      <InputNumber
        value={value}
        onChange={e => { setValue(e.target.value) }}
        placeholder={Placeholder}
      />
      <hr />
      <InputNumber
        onChange={e => { setValue(e.target.value) }}
        placeholder={Placeholder}
        defaultValue={value}
      />
    </div>
  )
}


export default App;