import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import ScrollToTop from "./hooks/ScrollToTop";
import {
  Landing,
  Intro,
  Team,
  Home,
  Lore,
  Portfolio,
  Blog,
  Blogpost,
} from "./pages";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="*" element={<Home />}>
            <Route path="landing" element={<Landing />} />
            <Route path="lore" element={<Lore />} />
            <Route path="team" element={<Team />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Blogpost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
