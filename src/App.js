import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [member, setMember] = useState({});

  useEffect(() => {
    axios
      .get("/api/main1/sub4")
      .then((response) => response.data)
      .then((data) => setMember(data));
  }, []);
  return (
    <div>
      <h1>{member.id}</h1>
      <h1>{member.name}</h1>
      <h1>{member.concatName}</h1>
      <h1>{member.address}</h1>
      <h1>{member.city}</h1>
      <h1>{member.postalCode}</h1>
      <h1>{member.country}</h1>
    </div>
  );
}

export default App;
