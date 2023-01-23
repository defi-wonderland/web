import { Footer, Navbar, PageContent } from "~/components/app";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <PageContent>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </PageContent>
  );
}
