import { Outlet } from "react-router-dom";

import { PageContent } from "~/components/app";
import { Footer, Navbar } from "~/containers";

export function Home() {
  return (
    <PageContent>
      <Navbar />
      <Outlet />
      <Footer />
    </PageContent>
  );
}
