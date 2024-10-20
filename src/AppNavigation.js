import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "containers/login";
import ProtectedRoute from "helpers/ProtectedRoute";
import UserDashboard from "pages/userpage/UserDashboard";
import Dashboard from "pages/Dashboard";
import TowerDetails from "pages/TowerDetails";
import Performance from "pages/Performance";
import Targets from "pages/Targets";
import Requests from "pages/ Requests";
import Todo from "pages/  Todo";
import TestComponents from "pages/TestComponents";
import Approval from "pages/Approval";
import Master from "pages/Master";
import MyTeamDetails from "pages/MyTeamDetails";
import ProjectRoutes from "helpers/navigators/ProjectRoutes";
import LeadRoutes from "helpers/navigators/LeadRoutes";
import CustomerRoutes from "helpers/navigators/CustomerRoutes";
import UserRoutes from "helpers/navigators/UserRoutes";
import ApfRoutes from "helpers/navigators/ApfRoutes";
import BrokerRoutes from "helpers/navigators/BrokerRoutes";
import GroupProfileRoutes from "helpers/navigators/GroupProfileRoutes";
import { useSelector } from "react-redux";
import PublicRoute from "helpers/PublicRoute";
import Unauthorized from "pages/Unauthorized";
import PageNotFound from "pages/PageNotFound";
import MyTeamRoutes from "helpers/navigators/MyTeamRoutes";
import Layout from "containers/layout";
import users from "constants/users";
import routeAccess from "constants/routeAccess";

const AppNavigation = () => {
  const auth = useSelector((state) => state?.profile.profileData.token);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.DASHBOARD}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.USERS}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/performance"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.PERFORMANCE}>
              <Performance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/approval"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.APPROVAL}>
              <Approval />
            </ProtectedRoute>
          }
        />
        <Route
          path="/targets"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.TARGETS}>
              <Targets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requests"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.REQUESTS}>
              <Requests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.TODO}>
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={routeAccess.MASTER}>
              <Master />
            </ProtectedRoute>
          }
        />
        <Route
          path="/testComponents"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={["Admin", "editor"]}>
              <TestComponents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/towerdetails"
          element={
            <ProtectedRoute isAuthenticated={auth} roles={["Admin", "editor"]}>
              <TowerDetails />
            </ProtectedRoute>
          }
        />
        {/* Match any project sub-paths */}
        <Route
          path="/project/*"
          element={
            <ProjectRoutes isAuthenticated={auth} roles={routeAccess.PROJECTS} />
          }
        />{" "}
        <Route
          path="/leads/*"
          element={<LeadRoutes isAuthenticated={auth} />}
          roles={routeAccess.LEADS}
        />{" "}
        <Route
          path="/customers/*"
          element={
            <CustomerRoutes
              isAuthenticated={auth}
              roles={routeAccess.CUSTOMER}
            />
          }
        />{" "}
        <Route
          path="/mis/*"
          element={
            <CustomerRoutes
              isAuthenticated={auth}
              roles={["Admin", "editor"]}
            />
          }
        />{" "}
        <Route
          path="/users/*"
          element={<UserRoutes isAuthenticated={auth} />}
          roles={routeAccess.USERS}
        />{" "}
        <Route
          path="/my-team/*"
          element={<MyTeamRoutes isAuthenticated={auth} />}
          roles={routeAccess.MY_TEAMS}
        />{" "}

        <Route
          path="/apf/*"
          element={<ApfRoutes isAuthenticated={auth} />}
          roles={routeAccess.APF}
        />{" "}
        <Route
          path="/broker/*"
          element={
            <BrokerRoutes isAuthenticated={auth} roles={routeAccess.BROKER} />
          }
        />{" "}
        <Route
          path="/group-profile/*"
          element={
            <GroupProfileRoutes
              isAuthenticated={auth}
              roles={routeAccess.GROUP_PROFILE}
            />
          }
        />{" "}
      </Route>

      <Route
        path="/login"
        element={
          <PublicRoute isAuthenticated={auth}>
            <LoginContainer />
          </PublicRoute>
        }
      />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppNavigation;
