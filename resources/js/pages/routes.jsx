import Home from './Home'
import Offers from './Offers'
import AllStore from './Store/AllStore'
import Services from './Services'
import Sandwitch from './Store/Sandwitch'
import Coffee from './Store/Coffee'
import Bakery from './Store/Bakery'
import Hotfood from './Store/Hotfood'
import Fules from './Fules'
import Contact from './Contact'

const routes = [
    { path: '/', element: <Home /> },
    { path: '/offers', element: <Offers /> },
    { path: '/allstore', element: <AllStore /> },
    { path: '/services', element: <Services /> },
    { path: '/sandwitch', element: <Sandwitch /> },
    { path: '/coffee', element: <Coffee /> },
    { path: '/bakery', element: <Bakery /> },
    { path: '/hotfood', element: <Hotfood /> },
    { path: '/fules', element: <Fules /> },
    { path: '/contact', element: <Contact /> },
];

export default routes;
