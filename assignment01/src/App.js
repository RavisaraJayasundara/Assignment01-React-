import './App.css';
import Arts from './components/Arts';
import React,{useState} from 'react';


function App() {
  const [theme,setTheme]=useState(true);
    const dark={
        backgroundColor:"black",
        color:"white"
    }
    const light={
        backgroundColor:"white",
        color:"black"
    }
  return (
      <div style={theme?dark:light}>
            <button onClick={()=>setTheme(!theme)}>{theme?'dark':'light'}</button>

       
      
         <Arts></Arts>
    </div>
  );
}

export default App;
