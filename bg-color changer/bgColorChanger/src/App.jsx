import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor]=useState("blue")

  return (
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-4">
            <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl">
              <button onClick={()=>setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor: "red"}}>Red</button>

              <button onClick={()=>setColor("green")} 
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor: "green"}}>green</button>

              <button onClick={()=>setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor: "black"}}>black</button>

              <button onClick={()=>setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor: "purple"}}>purple</button>

              <button onClick={()=>setColor("orangered")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor: "orangered"}}>orangered</button>

            </div>
        </div>
     </div>
    
  )
}

export default App
