import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Sample from '../pages/Sample';
import Control from '../pages/Control';
import Likes from '../pages/Likes';
import ProductDetail from '../pages/ProductDetail';


export const route =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={ <Control item={<Dashboard />} /> } />
        <Route path='/sample/:id' element={ <Control item={<Sample />} /> } />
        <Route path='/likes' element={ <Control item={<Likes />} /> } />
        <Route path='/productDetail/:id' element={ <Control item={<ProductDetail />} /> } />
        <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>