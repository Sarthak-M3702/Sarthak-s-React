
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js'
import { useState } from 'react';
function App() {
  const[mode,setMode] = useState('light')  ;
  const toggleMode =() =>{
    if (mode === 'light'){
      document.body.style.backgroundColor = 'grey'
      setMode('dark');
    }
    else{
    setMode('light');
   document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
<Navbar title = "Navigation" about ="About" mode ={mode} toggleMode = {toggleMode}/>
<div className='container my-5'>
<TextForm heading="Enter the text to analyse" mode = {mode}/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
