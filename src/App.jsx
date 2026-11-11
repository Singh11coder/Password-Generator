import React, { useState,useEffect } from 'react'

const App = () => {
  const [password,setPassword] = useState("XYZ");
  const [numbers,setNumbers] = useState(false);
  const [upperCase,setUpperCase] = useState(false);
  const [lowerCase,setLowerCase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [length,setLength] = useState(6);

  let str = "abcdefghijklmnopqrstuvwxyz";
  let str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str3 = "0123456789";
  let str4 = "!@#$%^&*()?/>.,<{}][|;:";

  const buildPassword = () => {
    let ans = "";
    if(numbers){
      ans +=str3;
    }
    if(upperCase){
      ans += str2;
    }
    if(lowerCase){
      ans += str;
    }
    if(symbols){
      ans += str4;
    }

    if(ans.length == 0){
      setPassword("");
      return;
    }

    let res = "";
    for(let i=0;i<length;i++){
       let ind =  Math.floor(Math.random()*(ans.length));
       res += ans[ind];
    }

    setPassword(res);

  }

  const generatePassword = () => {
     buildPassword();
  }

  useEffect(() => {
     buildPassword();
  },[upperCase,lowerCase,numbers,symbols,length])

  return (
    <div className="bg-gray-700 h-screen p-30">
       <h1 className="text-white ml-120 text-5xl mb-4">Password Generator</h1>
       <div className="ml-100 h-100 bg-gray-900 w-162.5 rounded-4xl">
           <div className="w-100%  flex justify-between items-center py-3 px-8">
              <div className="text-white text-2xl">{password}</div>
              <button className="text-white bg-cyan-900 px-4 py-2 rounded-xl text-xl cursor-pointer">Copy</button>
           </div>
           
           <div className="w-100%  flex justify-between items-center py-3 px-8 text-white text-xl">
             <h1>Character Length</h1>
             <h1>{length}</h1>
           </div>

           <div className="px-8">
             <input 
               min={0}
               max={100}
               value={length}
               onChange={(e) => setLength(Number(e.target.value))}
               className="w-full accent-orange-600 "
               type="range"/>
           </div>

           <div className="mt-4 px-8 text-white text-xl flex justify-between">
              <div>
                <input 
                  checked={upperCase} 
                  type="checkbox"
                  onChange={() => setUpperCase(prev => !prev)}
                />
                <label className="ml-2">Include Uppercase Letters</label>
                </div>
               
               <div>
                <input 
                  checked={lowerCase}
                  onChange={() => setLowerCase(prev => !prev)}
                  type="checkbox"/>
                <label className="ml-2">Include Lowercase Letters</label>
               </div>
           </div>

           <div className="mt-4 px-8 text-white text-xl flex justify-between">
              <div>
                <input 
                  checked={numbers}
                  onChange={() => setNumbers(prev => !prev)}
                  type="checkbox"/>
                <label className="ml-2">Include Numbers</label>
              </div>
              <div>
                <input 
                  checked={symbols}
                  onChange={() => setSymbols(prev => !prev)}
                  type="checkbox"/>
                <label className="ml-2">Include Symbols</label>
              </div>
           </div>

           <div className="mt-8 px-8 text-white text-xl flex justify-between">
              <h1>Strength:</h1>
              <h1>Medium</h1>
           </div>

           <div className="text-white px-8 mt-2">
              <button 
               onClick={generatePassword}
               className="w-full text-4xl text-center bg-cyan-700 py-3 rounded-2xl cursor-pointer">Generate Password</button>
           </div>


       </div>
    </div>
  )
}

export default App
