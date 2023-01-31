import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import ScrollToTop from "./hooks/ScrollToTop";
import { Landing, Team, Home, Lore, Portfolio, Intro } from "./pages";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
