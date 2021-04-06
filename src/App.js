import logo from './logo.svg';
import './App.css';
//import Navbar from './components/nav/Navbar';
//import Dashboard from  './components/dashboard/Dashboard';
import BaseRouter from "./components/router/Router";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Dashboard/> */}
      <BaseRouter/>
    </div>
  );
}

export default App;
