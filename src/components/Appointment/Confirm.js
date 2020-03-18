import React from "react";
import "Appointment/styles.scss";
import Button from "components/Button";

export default function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button danger>props.onCancel</Button>
        <Button danger>props.onCancel</Button>
      </section>
    </main>
  );
}
