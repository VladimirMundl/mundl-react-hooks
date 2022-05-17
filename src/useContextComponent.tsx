import { useState, useContext } from "react";
import UserContext, { userState } from "./store";

function ConsumerComponent() {
  const user = useContext<userState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

export const UseContextComponent = () => {
  const [user, userSet] = useState<userState>({
    first: "jane",
    last: "Smith",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => userSet({ first: "pepa", last: "zdepa" })}>
        change it
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
