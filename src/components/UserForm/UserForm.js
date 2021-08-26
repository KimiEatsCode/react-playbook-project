import React, { useContext } from 'react';
import { UserContext } from '../MyProvider/MyProvider';
const Form = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={e => user.setName(e.target.value)}
        />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          onChange={e => user.setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
