import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/main-layout/index.jsx";
import {LandingPage} from "../pages/landing-page/index.jsx";
import {CreatePostPage} from "../pages/create-post-page/index.jsx";
import {DashboardPage} from "../pages/dashboard-page/index.jsx";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/dashboard/create-post',
                element: <CreatePostPage />
            },
            {
                path: '/dashboard',
                element: <DashboardPage />
            },
            {
                path: '/dashboard/:id',
                element: <CreatePostPage />
            }
        ]
    }
])