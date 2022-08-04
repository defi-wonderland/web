import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PageView, Navbar } from "@/components/app";
import { Lore } from "@/pages";

function App() {
  return (
    <PageView>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Lore />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </PageView>
  );
}

export default App;
