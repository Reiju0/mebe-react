import { lazy } from 'react';
import LandingPage from 'layout/LandingPage';
import Loadable from 'ui-component/Loadable';

// landing page
const LandingDefault = Loadable(lazy(() => import('views/landing-page')));

// ==============================|| LANDING PAGE ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    element: <LandingPage />,
    children: [
        {
            path: 'landingpages',
            element: <LandingDefault />
        }
    ]
};
export default LandingRoutes;
