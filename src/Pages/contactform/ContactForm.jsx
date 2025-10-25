import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // make sure path matches your project

const DRUPAL_ENDPOINT =
  "https://drupal-portfolio.lndo.site/jsonapi/node/contact_submission";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    massage: "", // keep as 'massage' to match Drupal field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", text: "" }); // idle | submitting | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.massage.trim()) e.massage = "Message is required."; // validate 'massage'
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status.state !== "idle") setStatus({ state: "idle", text: "" });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus({ state: "submitting", text: "Submitting..." });

    const payload = {
      data: {
        type: "node--contact_submission",
        attributes: {
          title: form.name || "Contact",
          field_name: form.name,
          field_email: form.email,
          field_phone: form.phone,
          field_massage: form.massage, // match machine name
        },
      },
    };

    try {
      const res = await axios.post(DRUPAL_ENDPOINT, payload, {
        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/vnd.api+json",
        },
      });

      if (res.status === 201 || res.status === 200) {
        setStatus({ state: "success", text: "Message sent — thank you!" });
        setForm({ name: "", email: "", phone: "", massage: "" });
        setErrors({});
      } else {
        setStatus({
          state: "error",
          text: `Unexpected response: ${res.status}`,
        });
      }
    } catch (err) {
      let message = "Failed to send. Please try again.";
      if (err.response) {
        const code = err.response.status;
        if (code === 403) message = "Permission denied (403). Enable create permission.";
        else if (code === 415)
          message = "Unsupported media type (415). Check Content-Type header.";
        else if (code === 400) message = "Bad request (400). Check field names and JSON structure.";
        else message = `Server error (${code}): ${err.response.statusText || ""}`;
      } else if (err.request) {
        message = "No response from server. Possible CORS or network issue.";
      } else {
        message = err.message;
      }
      setStatus({ state: "error", text: message });
    }
  };

  return (
    <div className="cf-container" aria-live="polite">
      <form className="cf-form" onSubmit={handleSubmit} noValidate>
        <h2 className="cf-title">Contact Us</h2>

        <label className="cf-label" htmlFor="name">
          Name <span className="cf-required" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`cf-input ${errors.name ? "cf-invalid" : ""}`}
          type="text"
          placeholder="Your name"
          aria-required="true"
          aria-invalid={!!errors.name}
        />
        {errors.name && <div className="cf-error">{errors.name}</div>}

        <label className="cf-label" htmlFor="email">
          Email <span className="cf-required" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`cf-input ${errors.email ? "cf-invalid" : ""}`}
          type="email"
          placeholder="you@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
        />
        {errors.email && <div className="cf-error">{errors.email}</div>}

        <label className="cf-label" htmlFor="phone">
          Phone <span className="cf-optional">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="cf-input"
          type="tel"
          placeholder="+358 40 123 4567"
          aria-required="false"
        />

        <label className="cf-label" htmlFor="massage">
          Message <span className="cf-required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="massage"
          name="massage"
          value={form.massage} // fixed value binding
          onChange={handleChange}
          className={`cf-textarea ${errors.massage ? "cf-invalid" : ""}`}
          placeholder="Write your message..."
          rows="5"
          aria-required="true"
          aria-invalid={!!errors.massage}
        />
        {errors.massage && <div className="cf-error">{errors.massage}</div>}

        <div className="cf-actions">
          <button
            type="submit"
            className="cf-button"
            disabled={status.state === "submitting"}
            aria-disabled={status.state === "submitting"}
          >
            {status.state === "submitting" ? "Submitting…" : "Send Message"}
          </button>
        </div>

        {status.state === "success" && (
          <div className="cf-status cf-status-success" role="status">
            {status.text}
          </div>
        )}
        {status.state === "error" && (
          <div className="cf-status cf-status-error" role="alert">
            {status.text}
          </div>
        )}
      </form>

      <div className="cf-note">
        <small>
          By sending you agree to our terms. If you get a 403 error — enable
          "Create new content" permission for your contact content type in Drupal.
        </small>
      </div>
    </div>
  );
}
