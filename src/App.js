import React, { useEffect } from 'react'
import  { CreateContainer, Header, MainContainer }  from "./components";
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';
import { getallFooditems } from './utils/firebaseFunctions';

const App = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getallFooditems().then((data) => {
      console.log(data);
    });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
    <div className='w-screen h-auto flex flex-col bg-primary'>
      < Header />
      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes> 
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer/>} />
          <Route/>
        </Routes>
      </main>
      </div>
      </AnimatePresence>
      
  ) 
}

export default App;

