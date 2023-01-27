import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView } from "~/components/app";
import { Navbar } from "./containers";
import ScrollToTop from "./hooks/ScrollToTop";
<<<<<<< HEAD
import { Landing, Team, Home, Lore, Portfolio } from "./pages";
=======
import { Landing, Team, Home, Lore, PortFolio } from "./pages";
>>>>>>> b519e39471adb86f2f00a3c5e310a6a8c7d0a04b

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
          </Route>
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
