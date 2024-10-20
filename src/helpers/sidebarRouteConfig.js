// routeConfig.js
import Dashboard from "pages/Dashboard";
import Profile from "pages/Profile";
import Stats from "pages/Stats";
import Customers from "pages/Customers";
import TowerDetails from "pages/TowerDetails";
import Leads from "pages/Leads";
import Performance from "pages/Performance";
import Targets from "pages/Targets";
import Requests from "pages/ Requests";
import Todo from "pages/  Todo";
import { MenuBook } from "@mui/icons-material";
import AddProject from "pages/AddProject";
import TestComponents from "pages/TestComponents";
import LeadsDetails from "pages/LeadsDetails";
import ProjectInfo from "pages/AddProject";
import Projects from "pages/Projects";
import BrokerList from "pages/broker/BrokerList";
import Broker from "pages/Broker";
import ApfContainer from "containers/apf/Apf";
import UserDashboard from "pages/userpage/UserDashboard";
import Approval from "pages/Approval";
import GroupProfileDashboard from "pages/GroupProfileDashboard";
import GroupProfile from "pages/GroupProfile";
import Master from "pages/Master";
import MyTeam from "pages/MyTeam";
import images from "./images";
import users from "constants/users";

const sidebarRouteConfig = [
  {
    path: "/",
    component: Dashboard,
    name: "Dashboard",
    icon: (
      <img
        src="/assets/icons/dashboardIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    roles: [users.ADMIN, users.DEVELOPER, users.SALES_EXECUTIVE, users.BROKER_AR  ,users.BROKER_ADMIN , users.BROKER_INDIVIDUAL , users.SALES_MANAGER], // Roles that have access to this route
  },
  {
    path: "/group-profile",
    component: GroupProfileDashboard,
    name: "Group Profile",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/GroupProf.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/users",
    component: UserDashboard,
    name: "Users",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/usersicon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    IconButton: <MenuBook />,
    path: "/stats",
    component: Stats,
    name: "Stats",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/CustomerIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/customers",
    component: Customers,
    name: "Customers",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/Customer.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/my-team",
    roles : [users.SALES_MANAGER , users.BROKER_ADMIN] ,
    component: MyTeam,
    name: "My Team",
    icon: (
      <img
        src="/assets/icons/usersicon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/project",
    component: Projects,
    name: "Projects",
    type: "accordian",
    children: [
      {
        name: "Project Info",
        path: "project-info",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: ProjectInfo,
      },
      {
        name: "Project Inventory",
        path: "project-inventory",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: ProjectInfo,
      },
      {
        name: "Payment Plan",
        path: "payment-plan",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: ProjectInfo,
      },
      {
        name: "Construction Update",
        path: "construction-update",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: ProjectInfo,
      },
    ],
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/TowerDetailsIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/leads",
    component: Leads,
    name: "Leads",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/people_white.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/broker",
    component: Broker,
    name: "Broker",
    type: "accordian",
    children: [
      {
        name: "Broker list",
        path: "broker-list",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: BrokerList,
      },
      // {
      //   name: "Incentive",
      //   path: "broker-list",
      //   //ADD YOUR RESPECTIVE COMPONENT HERE
      //   component: BrokerList,
      // },
    ],
    roles: [users.ADMIN , users.SALES_MANAGER , users.BROKER_ADMIN , users.BROKER_INDIVIDUAL], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/broker.svg"
        alt="Broker-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/mis",
    component:Customers,
    name: "MIS",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL], // Roles that have access to this route
    icon: (
      <img
        src={images.book}
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/performance",
    component: Performance,
    name: "Performance",
    roles: [users.ADMIN , users.SALES_EXECUTIVE], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/PerformanceIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/targets",
    component: Targets,
    name: "Targets",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/TargetIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/apf",
    component: ApfContainer,
    name: "APF",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/TodoIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/requests",
    component: Requests,
    name: "Requests",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/RequestIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/approval",
    component: Approval,
    name: "Approval",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/RequestIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/todo",
    component: Todo,
    name: "Todo",
    roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/TodoIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/master",
    component: Master,
    name: "Master",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/filter-square.svg"
        alt="Master-icon"
        width="24"
        height="24"
      />
    ),
  },
  {
    path: "/testComponents",
    component: TestComponents,
    name: "TestComponents",
    roles: [users.ADMIN], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/TodoIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },


  // Add more routes with their corresponding components and roles...
];

export default sidebarRouteConfig;
