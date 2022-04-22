import Link from "next/link";
import { Container } from "../styles/pages/404";

export default function PageNotFound() {
  return (
    <Container>
      <span>Page Not Found</span>
      <Link href="/">
        <a>Back</a>
      </Link>
    </Container>
  );
}
