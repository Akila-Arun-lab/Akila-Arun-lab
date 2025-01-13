import { useState, useContext, createContext } from "react";

const UserContext = createContext();
function PropDrilling() {
  const [name, setName] = useState("Geeks");
  return (
    <div>
      <UserContext.Provider value={name}>
      <Component1 />
      </UserContext.Provider>
    </div>
  );
}

function Component1() {
  return (
    <div>
      <Component2/>
    </div>
  );
}

function Component2() {
  return (
    <div>
      <Component3 />
    </div>
  );
}

function Component3() {
  const name = useContext(UserContext);
  return (
    <div>
      Hello {name}
    </div>
  );
}
export default PropDrilling;