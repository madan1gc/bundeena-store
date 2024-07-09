import Home from './Home'
import Offers from './Offers'
import AllStore from './Store/AllStore'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/offers', element: <Offers /> },
    { path: '/allstore', element: <AllStore /> },
];

export default routes;
