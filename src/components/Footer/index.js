import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./styles";

import Logomark from "../../assets/logomark.png";

import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <Image src={Logomark} alt="Google Logo" width={35} height={30} />
          </a>
        </Link>
        <span>Realty</span>
      </div>
      <span>1415 Americas 19, New York</span>
      <div className="social_media">
        <span>
          <BsFacebook />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaGoogle />
        </span>
        <span>
          <AiTwotoneMail />
        </span>
      </div>
      <span>Copyright © 2022 | Realty | Website by Ribeiro</span>
    </Container>
  );
}

export default Footer;
