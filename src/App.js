
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js'
import Alert from './components/Alert.js'
import { useState } from 'react';
function App() {
  const[mode,setMode] = useState('light')  ;
  const[alert,setAlert] = useState(null);

  const showAlert=(message , type)=>{
    setAlert({
        msg:message,
        type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode =() =>{
    if (mode === 'light'){
      document.body.style.backgroundColor = 'grey'
      setMode('dark');
      showAlert("Dark mode has been enabled","success")
    }
    else{
    setMode('light');
   document.body.style.backgroundColor = 'white'
   showAlert("Light mode has been enabled","success")
    }
  }


  return (
    <>
<Navbar title = "Navigation" about ="About" mode ={mode} toggleMode = {toggleMode}/>
<Alert alert={alert}/>
<div className='container my-5'>
<TextForm heading="Enter the text to analyse" mode = {mode} showAlert = {showAlert}/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
