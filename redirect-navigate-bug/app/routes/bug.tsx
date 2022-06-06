import { useEffect } from "react";
import { useNavigate, useSubmit } from "@remix-run/react";
import { redirect } from "@remix-run/node";

export const action = () => {
  return redirect("/?success");
};

export default function BugPage() {
  const navigate = useNavigate();
  const submit = useSubmit();

  useEffect(() => {
    // submit first
    submit(new URLSearchParams(), { method: "post", action: "/bug" });
    // then navigate
    navigate("/");
    // outcome: navigate seems to happen first without aborting submission
    // then the submit action gets messed up (might fire to wrong action)
  }, []);

  return (
    <div>
      <h1>Submitting & Navigating...</h1>
    </div>
  );
}
