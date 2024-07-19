import Home from './Home'
import Offers from './Offers'
import AllStore from './Store/AllStore'
import Services from './Services'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/offers', element: <Offers /> },
    { path: '/allstore', element: <AllStore /> },
    { path: '/services', element: <Services /> },
];

export default routes;
