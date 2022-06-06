import { Link } from "@remix-run/react";

export default function PageOne() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>One</h1>
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/two">Page two</Link>
      </div>
    </div>
  );
}
