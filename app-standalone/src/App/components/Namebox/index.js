import React, { useState } from "react";

const Namebox = () => {
  const [username, setUsernname] = useState("");

  return (
    <>
    <br></br>
    <br></br>
    <form>
      PLAYER X is called: {username}
      <br></br>
      <label>
        Change X's Name:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsernname(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Namebox;