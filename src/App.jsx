import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./pages/Start";
import Game from "./pages/Game";
import Rules from "./pages/Rules";

const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/game", element: <Game /> },
  { path: "/rules", element: <Rules /> },
]);

function App({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default App;
