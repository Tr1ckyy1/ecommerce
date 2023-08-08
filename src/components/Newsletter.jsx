import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Newsletter.css";
function Newsletter() {
  const [email, setEmail] = useState("");
  const { pathname } = useLocation();

  function handleEmail(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setEmail("");
  }

  useEffect(() => {
    setEmail("");
  }, [pathname]);

  return (
    <section className="newsletter">
      <h1>Newsletter</h1>
      <form onSubmit={handleEmail}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="your@email.com"
        />
        <button>Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
