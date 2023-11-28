import { Business, Dashboard, ExitToApp, Group, Settings } from "@mui/icons-material";

export const items = [
  {
    title: 'OverView',
    path: '/overView',
    icon: (
       <Dashboard />
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: (
        <Group />
    )
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: (
        <Business />
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <Settings />
    )
  },
  {
    title: 'Logout',
    path: '/login',
    icon: (
      <ExitToApp />
    )
  },
];