import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import Privateroute from "./Privateroute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found.</h2>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "jobapply/:id",
        element: (
          <Privateroute>
            <JobApply></JobApply>
          </Privateroute>
        ),
      },
      {
        path: "myapplications",
        element: (
          <Privateroute>
            <MyApplications></MyApplications>
          </Privateroute>
        ),
      },
    ],
  },
]);

export default router;
