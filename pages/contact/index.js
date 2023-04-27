import ContactForm from "@/component/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Send us your enquiry!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
