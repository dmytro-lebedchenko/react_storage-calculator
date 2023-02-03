import { Outlet } from "react-router";
import './App.scss';

export const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <Outlet />
    </div>
  </div>
);
