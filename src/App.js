import React from 'react';
import FunctionalComp from './Component/functionalComponent';
// import ClassComp from './Component/classComponent';
import { ClassComp,ClassComp1 } from './Component/classComponent';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>My name is Bijay Gurung.</p>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
    </div>
  );
}

export default App;
