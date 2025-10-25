import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MassageList.css"; // Make sure path matches your project

const DRUPAL_ENDPOINT =
  "https://drupal-portfolio.lndo.site/jsonapi/node/contact_submission";

export default function MassageList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(DRUPAL_ENDPOINT, {
          headers: {
            Accept: "application/vnd.api+json",
          },
        });
        setMessages(res.data.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load messages. Check your endpoint or CORS.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="ml-container">
      <h2>Contact Submissions</h2>

      {loading && <p>Loading messages...</p>}
      {error && <p className="ml-error">{error}</p>}

      {!loading && !error && messages.length === 0 && <p>No messages found.</p>}

      {!loading && !error && messages.length > 0 && (
        <table className="ml-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.attributes.field_name}</td>
                <td>{msg.attributes.field_email}</td>
                <td>{msg.attributes.field_phone}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: msg.attributes.field_massage?.processed || "",
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
