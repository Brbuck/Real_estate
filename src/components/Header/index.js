import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Container,
  CloseMenu,
  Logo,
  LogInButton,
  MenuButton,
  Navigation,
} from "./styles";
import Logomark from "../../assets/logomark.png";

function Header() {
  const [menu, setMenu] = useState(false);

  function togleMenu() {
    setMenu(!menu);
  }
  return (
    <Container>
      <Logo>
        <Link href="/">
          <a>
            <Image src={Logomark} alt="Google Logo" width={35} height={30} />
          </a>
        </Link>
      </Logo>
      <Navigation menu={menu} onClick={togleMenu}>
        <li className="menu-responsive">
          <CloseMenu onClick={togleMenu} />
        </li>
        <li className="menu-responsive">
          <Link href="/">
            <a>
              <Image src={Logomark} alt="Google Logo" width={35} height={30} />
            </a>
          </Link>
        </li>
        <li className="menu-responsive">
          <Link href="#">
            <a>Log In</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>For sale</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>For lease</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Launches</a>
          </Link>
        </li>
      </Navigation>
      <LogInButton>Log In</LogInButton>
      <MenuButton onClick={togleMenu}>Menu</MenuButton>
    </Container>
  );
}

export default Header;
