import Counter from "./components/counter";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
function App() {
  return (
    <div className="App">
      <Counter />
      <UserList />
      <AddUser />
    </div>
  ); 
}

export default App;
