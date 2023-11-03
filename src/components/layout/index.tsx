import { FC, Fragment, ReactNode } from "react";
import CustomHead from "./custonHead";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import style from "./layout.module.css";

type LayoutProps = {
  title: string;
  description: string;
  logo: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <CustomHead {...props} />
      <Navbar />
      <main className={style.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
