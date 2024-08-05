import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");
  return (
   <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 bg-white px-3 py-3 rounded-3xl'>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: '#FFC700'}}>Yellow</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: '#FF7F3E'}}>Orange</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: '#F075AA'}}>Pink</button>
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'brown'}}>Brown</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>Black</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: '#4535C1'}}>Blue</button>

        </div>
      </div>
     </div>
   </>
  );
}

export default App;
