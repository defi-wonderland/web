import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageView } from '~/components/app';
import ScrollToTop from './hooks/ScrollToTop';
import { Landing, Squad, Home, Ethos, Creations, Insights, IntroductionPage, Posts } from './pages';

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<IntroductionPage />} />
          <Route path='*' element={<Home />}>
            <Route path='landing' element={<Landing />} />
            <Route path='ethos' element={<Ethos />} />
            <Route path='squad' element={<Squad />} />
            <Route path='creations' element={<Creations />} />
            <Route path='insights' element={<Insights />} />
            <Route path='insights/:id' element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
