import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
