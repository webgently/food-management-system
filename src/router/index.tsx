import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { Home } from '../pages/Home';
import { Category } from '../pages/Category';
import { Filter } from '../pages/Filter';

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
