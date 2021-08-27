import React, { useContext } from 'react';
import { GraphContext } from '../MyProvider/MyProvider';
const Form = () => {
  const graph = useContext(GraphContext);

 


  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        {/* <input
          className="input"
          onChange={e => graph.setData(data2)}
        /> */}
      </div>



    </div>
  );
};

export default Form;
