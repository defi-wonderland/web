import { Outlet } from "react-router-dom";

import { PageContent } from "~/components/app";
import { Footer, Navbar, StarsBackground } from "~/containers";

export function Home() {
  return (
    <>
      <Navbar />
      <StarsBackground />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
}
