import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Tabs from "./components/TabBar/TabBar";
import Home from "./pages/Home";
import { tasks } from "./content/data";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={tasks} />,
    },
    {
      path: "/progress-bar",
      element: <ProgressBar data={tasks} />,
    },
    {
      path: "/tabs",
      element: <Tabs data={tasks} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
