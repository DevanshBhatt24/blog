import { useEffect, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

export default function ContactForm() {
  const emailInput = useRef();
  const nameInput = useRef();
  const textInput = useRef();
  const formref = useRef();

  const [currstatus, setcurrstatus] = useState("");
  const [error, seterror] = useState("");
  const [response, setresponse] = useState();

  async function getdata(userdata) {
    await fetch("/api/contact-util", {
      method: "post",
      body: JSON.stringify(userdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setresponse(data.message));
  }

  useEffect(() => {
    if (currstatus === "error" || currstatus === "success") {
      const timer = setTimeout(() => {
        setcurrstatus(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currstatus]);

  async function onSubmitHandler(e) {
    e.preventDefault();

    const useremail = emailInput.current.value;
    const username = nameInput.current.value;
    const usertext = textInput.current.value;

    const userdata = {
      email: useremail,
      name: username,
      message: usertext,
    };
    formref.current.reset();
    setcurrstatus("pending");
  
    try {
      await getdata(userdata);
      setcurrstatus("success");
    } catch (e) {
      seterror(e.message);
      setcurrstatus("error");
    }
  }

  let notification;

  if (currstatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Feedback...",
      message: "Waiting for sending message",
    };
  }
  if (currstatus === "success") {
    notification = {
      status: "success",
      title: "Feedback Sent",
      message: response,
    };
  }
  if (currstatus === "error") {
    notification = {
      status: "error",
      title: "Error!!!",
      message: error,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmitHandler} ref={formref}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your Email</label>
            <input type="email" id="email" ref={emailInput} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInput} required />
          </div>
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" ref={textInput} />
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
}
