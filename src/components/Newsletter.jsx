import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h1>Newsletter</h1>
      <form>
        <input placeholder="your@email.com" />
        <button>Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
