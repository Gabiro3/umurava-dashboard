import {
  IconBrandGmail,
  IconBrandNotion,
  IconBrandSlack,
  IconBrandTelegram,
  IconBrandTrello,
  IconBrandWhatsapp,
  IconBrandZoom,
  IconFileCv
} from '@tabler/icons-react'

export const apps = [
  {
    name: 'Telegram',
    logo: <IconBrandTelegram />,
    connected: false,
    desc: 'Connect with Telegram for real-time communication.',
  },
  {
    name: 'Notion',
    logo: <IconBrandNotion />,
    connected: true,
    desc: 'Effortlessly sync Notion pages for seamless collaboration.',
  },
  {
    name: 'Trello',
    logo: <IconBrandTrello />,
    connected: false,
    desc: 'Sync Trello cards for streamlined project management.',
  },
  {
    name: 'Slack',
    logo: <IconBrandSlack />,
    connected: false,
    desc: 'Integrate Slack for efficient team communication',
  },
  {
    name: 'Zoom',
    logo: <IconBrandZoom />,
    connected: true,
    desc: 'Host Zoom meetings directly from the dashboard.',
  },
  {
    name: 'Gmail',
    logo: <IconBrandGmail />,
    connected: true,
    desc: 'Access and manage Gmail messages effortlessly.',
  },
  {
    name: 'CV Builder',
    logo: <IconFileCv />,
    connected: false,
    desc: 'Craft an oustanding CV with our online cv builder.',
  },
  {
    name: 'WhatsApp',
    logo: <IconBrandWhatsapp />,
    connected: false,
    desc: 'Easily integrate WhatsApp for direct messaging.',
  },
]
