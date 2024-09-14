import Home from './Home'
import Offers from './Offers'
import AllStore from './Store/AllStore'
import Services from './Services'
import StoreCategoryPage  from './Store/StoreCategoryPage'
import Fules from './Fules'
import Contact from './Contact'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/offers', element: <Offers /> },
    { path: '/allstore', element: <AllStore /> },
    { path: '/services', element: <Services /> },
    { path: '/store/:category', element: <StoreCategoryPage /> },
    { path: '/fules', element: <Fules /> },
    { path: '/contact', element: <Contact /> },
];

export default routes;
