import { AppLayout } from '@/layouts/AppLayout'
import { Friends } from '@/pages/Friends'
import { Home } from '@/pages/Home'
import { Profiles } from '@/pages/Profiles'
import { PublicPosts } from '@/pages/PublicPosts'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/friends', element: <Friends /> },
      { path: '/public', element: <PublicPosts /> },
      { path: '/profiles', element: <Profiles /> },
    ],
  },
])
