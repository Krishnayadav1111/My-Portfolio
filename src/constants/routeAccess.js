import users from "./users";

const routeAccess = {};

routeAccess.DASHBOARD  = [users.ADMIN, users.DEVELOPER, users.SALES_EXECUTIVE, users.BROKER_AR  ,users.BROKER_ADMIN , users.BROKER_INDIVIDUAL, "editor" , users.SALES_MANAGER];
routeAccess.USERS = [users.ADMIN];
routeAccess.GROUP_PROFILE = [users.ADMIN];
routeAccess.CUSTOMER = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE];
routeAccess.MY_TEAMS = [users.SALES_MANAGER , users.BROKER_ADMIN];
routeAccess.PROJECTS = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL];
routeAccess.LEADS = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL];
routeAccess.BROKER = [users.ADMIN , users.SALES_MANAGER , users.BROKER_ADMIN , users.BROKER_INDIVIDUAL];
routeAccess.PERFORMANCE = [users.ADMIN , users.SALES_EXECUTIVE];
routeAccess.TARGETS = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR];
routeAccess.APF = [users.ADMIN];
routeAccess.APPROVAL = [users.ADMIN];
routeAccess.TODO = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL];
routeAccess.REQUESTS = [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE];
routeAccess.MASTER = [users.ADMIN];

export default routeAccess;