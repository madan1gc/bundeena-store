import { Header, Footer } from '../components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

const MainPage = () => {
  return (
    <Router>
      <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      <Footer />
    </Router>
  );
};

export default MainPage;
