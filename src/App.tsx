import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTest from "./app/home/pages/CreateTest";
import CreateTestOld from "./app/home/pages/CreateTestOld";
import ListTests from "./app/home/pages/ListTests";
import ListTestsOld from "./app/home/pages/ListTestsOld";
import ListTest from "./app/home/pages/ListTest";

const router = createBrowserRouter([
  {
    path: "*",
    Component: CreateTest,
  },
  {
    path: "/create-test",
    Component: CreateTest,
  },
  {
    path: "/tests",
    Component: ListTests,
  },
  {
    path: "/test/:id",
    Component: ListTest,
  },
  {
    path: "old/create-test",
    Component: CreateTestOld,
  },
  {
    path: "old/tests",
    Component: ListTestsOld,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
