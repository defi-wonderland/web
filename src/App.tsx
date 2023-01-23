import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PageView, Navbar } from "~/components/app";
import { Home, Lore } from "~/pages";
import Team from "./pages/Team";
import PortFolio from "./pages/Portfolio";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <Navbar />

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
