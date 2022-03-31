import Image from "next/image";
import Link from "next/link";

import { Container, Logo, LogInButton, MenuButton,  Navigation } from "./styles";
import Logomark from '../../assets/logomark.png'

function Header() {
  return (
    <Container>
      <Logo>
        <Image src={Logomark} alt="Google Logo" width={35} height={30} />
      </Logo>
      <Navigation>
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
      <MenuButton>Menu</MenuButton>
    </Container>
  );
}

export default Header;
