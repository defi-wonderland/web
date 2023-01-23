import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import { Navbar } from "./containers";
import { Home, Lore } from "~/pages";
import Team from "./pages/Team";
import PortFolio from "./pages/Portfolio";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Lore />} />
          <Route path="*" element={<Home />}>
            <Route path="lore" element={<Lore />} />
            <Route path="team" element={<Team />} />
            <Route path="portfolio" element={<PortFolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
