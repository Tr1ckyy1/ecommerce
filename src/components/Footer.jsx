import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-links">
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          About
        </Link>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Store locator
        </Link>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          FAQs
        </Link>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          News
        </Link>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Careers
        </Link>

        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Contact Us
        </Link>
      </div>
      <h1>
        Design by{" "}
        <span>
          <Link target="_blank" to="https://github.com/Abderraouf-Rahmani">
            Abderraouf
          </Link>
        </span>
      </h1>
      <h1>
        Inspired by{" "}
        <span>
          <Link target="_blank" to="https://github.com/stefvndev">
            Stefvndev
          </Link>
        </span>
      </h1>
    </section>
  );
}

export default Footer;
