import { Outlet } from "react-router-dom";
// import StyledNavbar from "../components/StyledNavbar";

const ShareProductLayout = () => {
  return (
    <>
     <h2> products </h2>
      <Outlet />
    </>
  );
};
export default ShareProductLayout;
