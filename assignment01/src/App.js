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
    <div>
      <div style={theme?dark:light}>
            <button onClick={()=>setTheme(!theme)}>{theme?'dark':'light'}</button>

        </div>
      
         <Arts></Arts>
    </div>
  );
}

export default App;
