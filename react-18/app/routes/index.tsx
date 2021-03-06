import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/one">Page one</Link>
        <Link to="/two">Page two</Link>
      </div>
    </div>
  );
}
