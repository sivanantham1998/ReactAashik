import 'bootstrap/dist/css/bootstrap.min.css'

import Counter from "./usestate/Counter";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forms from './usestate/Forms';
import Create from './crud/Create';
import Edit from './crud/Edit';
import BasicExpense from './@Expenses/BasicExpense';

export default function App()
{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Counter/>}/>
          <Route path='/forms' element={<Forms/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update' element={<Edit/>}/>
          <Route path='/expense' element={<BasicExpense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}