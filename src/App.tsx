import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import ScrollToTop from "./hooks/ScrollToTop";
import {
  Landing,
  Team,
  Home,
  Lore,
  Portfolio,
  Blog,
  IntroductionPage,
  Posts,
} from "./pages";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="*" element={<Home />}>
            <Route path="landing" element={<Landing />} />
            <Route path="lore" element={<Lore />} />
            <Route path="team" element={<Team />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
