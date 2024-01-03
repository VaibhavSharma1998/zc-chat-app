import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter Room Id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Join</button>
    </div>
  );
};
