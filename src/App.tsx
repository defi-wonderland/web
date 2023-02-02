import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import { Navbar } from "./containers";
import ScrollToTop from "./hooks/ScrollToTop";
import { Landing, Team, Home, Lore, Portfolio, Blog } from "./pages";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Home />}>
            <Route path="lore" element={<Lore />} />
            <Route path="team" element={<Team />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
