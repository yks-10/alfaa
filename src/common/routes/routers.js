import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../routes'; 
import Index from '../index/index';

const RouteContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path={ROUTES.INDEX} element={<Index />} />
            {/* Add a route to match the root path "/" */}
        </Routes>
    );
}

export default RouteContainer;
