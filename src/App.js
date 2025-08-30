import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';

function App() {

  const [mode,setmode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message)=>{
    setAlert(message)
    setTimeout(()=>{
      setAlert(null)
    },5000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#152536";
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";

    }

  }
  return (
        <>
            <NavBar mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            
              <Textarea mode={mode} showAlert={showAlert}/>
        </>
  );
}

export default App;
