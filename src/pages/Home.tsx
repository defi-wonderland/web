import { Outlet } from "react-router-dom";

import { PageContent } from "~/components/app";
import { Footer, Navbar } from "~/containers";

export function Home() {
  return (
    <>
      <Navbar />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
}
