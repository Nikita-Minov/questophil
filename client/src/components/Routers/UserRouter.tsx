import React from 'react';
import {Route, Routes} from 'react-router-dom';

const UserRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<>Main</>} />
      <Route path='/about' element={<>About</>} />
      <Route path='/register' element={<>Register</>} />
      <Route path='*' element={<>404</>} />
    </Routes>
  );
};

export default UserRouter;
