import users from "constants/users";

export const userModulesData = [
    { name: 'Dashboard', path: '/', roles: [users.ADMIN, users.DEVELOPER, users.SALES_EXECUTIVE, users.BROKER_AR  ,users.BROKER_ADMIN , users.BROKER_INDIVIDUAL] },
    // { name: 'Stats', path: '/stats' },
    { name: 'Customers', path: '/customer' },
    { name: 'MIS', path: '/mis' },
    { name: 'Customers', path: '/customer' ,  roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE],},
    { name: 'TowerDetails', path: '/towerdetails' },
    { name: 'Leads', path: '/leads' , roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL],},
     {name: 'Group Profile', path: '/group-profile' , roles: [users.ADMIN],},
    { name: 'Performance', path: '/performance' , roles : [users.ADMIN , users.SALES_EXECUTIVE], },
    { name: 'Targets', path: '/targets' , roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR],},
    { name: 'APF' , path:'/apf' ,  roles: [users.ADMIN],},
    { name: 'Requests', path: '/requests' , roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE],},
    { name: 'Todo', path: '/todo' , roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL],},
    { name: 'Master', path: '/master' , roles: [users.ADMIN],},
    { name: 'My Team', path: '/my-team' , role : [users.SALES_MANAGER , users.BROKER_ADMIN],},

    // { name: 'Projects' , path:'/add-project'},
    { name: 'TestComponents' , path:'/testComponents'},

    { name: 'Projects' , path:'/project' , roles: [users.ADMIN , users.SALES_MANAGER , users.SALES_EXECUTIVE , users.BROKER_ADMIN , users.BROKER_AR , users.BROKER_INDIVIDUAL],},
    { name: 'Construction update' , path:'construction-update'},
    { name: 'TestComponents' , path:'construction-update'},
    { name: 'Broker' , path:'broker' , roles: [users.ADMIN , users.SALES_MANAGER , users.BROKER_ADMIN , users.BROKER_INDIVIDUAL],},
    // { name: 'Broker' , path:'/broker'},
    { name: 'Users' , path:'/users' , roles: [users.ADMIN],},
    { name: 'Approval' , path:'approval' , roles: [users.ADMIN],},

//*Not Required */ 
    { name: 'LeadsDetails' , path:'/LeadsDetails'},
    { name: 'Tower Info' , path:'/tower-info'},
    { name: 'Profile' , path:'/profile'},
    { name: 'details' , path:'/details'},
    { name: 'My Team details' , path:'/team-details'},





    // ... more module objects based on the user's access
  ];
