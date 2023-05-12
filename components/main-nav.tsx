import TaikaiIcon from "@/icons/taikai";
import { Navbar, NavbarBrand } from "reactstrap";

export default function MainNav() {
  return (
    <Navbar
      color="white"
      light
      expand="md"
      style={{ borderBottom: "0.0625rem solid rgb(217, 212, 237)" }}
    >
      <NavbarBrand href="/">
        <TaikaiIcon width={86} height={24} />
      </NavbarBrand>
    </Navbar>
  );
}
