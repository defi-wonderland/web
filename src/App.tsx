import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageView, Navbar } from "@/components/app";
import { Home, Lore } from "@/pages";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<Lore />} />
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
