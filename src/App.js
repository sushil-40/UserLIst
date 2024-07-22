import "./App.css";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";

const App = () => {
  return (
    <div className="container pt-4">
      <h2 className="text-center">UserList</h2>
      <hr />
      {/* form component   */}
      <UserForm />

      {/* table component  */}

      <UserTable />
    </div>
  );
};

export default App;
