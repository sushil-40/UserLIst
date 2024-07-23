import { useState } from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    // console.log(userObj);
    setUserList([...userList, userObj]);
  };
  console.log(userList);
  return (
    <div className="container pt-4">
      <h2 className="text-center">UserList</h2>
      <hr />
      {/* form component   */}
      <UserForm addUser={addUser} />

      {/* table component  */}

      <UserTable userList={userList} />

      <div className="creditForIcon">
        <h3>Icon Credit</h3>
        <span>
          <a
            href="https://www.flaticon.com/free-icons/young"
            title="young icons"
          >
            Young icons created by Freepik - Flaticon
          </a>
          <br />
          <a
            href="https://www.flaticon.com/free-icons/female"
            title="female icons"
          >
            Female icons created by Prosymbols Premium - Flaticon
          </a>
        </span>
      </div>
    </div>
  );
};

export default App;
