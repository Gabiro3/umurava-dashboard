import {
  IconBrowserCheck,
  IconHelp,
  IconLayoutDashboard,
  IconNotification,
  IconPackages,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUsers,
} from '@tabler/icons-react'
import { BriefcaseBusinessIcon, Command, FileBadge2Icon, UserCircle2Icon } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Gabiro',
    email: 'gabirodev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Umurava Ltd.',
      logo: Command,
      plan: 'Talent dashboard',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Talent Profile',
          url: '/settings/account',
          icon: UserCircle2Icon,
        },
        {
          title: 'Apps',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Job Board',
          url: '/jobs',
          badge: '3',
          icon: BriefcaseBusinessIcon,
        },
        {
          title: 'Project Management',
          url: '/tasks',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Finance',
      items: [
        {
          title: 'Contracts',
          icon: FileBadge2Icon,
          items: [
            {
              title: 'Employee contract',
              url: '/contracts',
            },
            {
              title: 'Non-disclosure agreement',
              url: '/contracts',
            },
            {
              title: 'Freelancing contract',
              url: '/contracts',
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
