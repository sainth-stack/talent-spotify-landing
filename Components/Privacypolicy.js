import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Reusable style objects
const containerStyle = {
  backgroundColor: "#EAE3D6",
  maxWidth: "50rem",
  overflowY: "auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const titleStyle = {
  fontWeight: "bolder",
  margin: ".5rem 0",
};

const ulNoneStyle = {
  marginBottom: ".5rem",
  listStyle: "none",
};

const ulDiscStyle = {
  marginBottom: ".5rem",
  listStyle: "disc",
};

const liStyle = {
  marginBottom: ".5rem",
};

// Reusable Section component
const Section = ({ children }) => (
  <section className="mb-4">{children}</section>
);

export default function PrivacyPolicy() {
  return (
    <div
      className="container py-5 mt-5 px-4 rounded mb-4"
      style={containerStyle}
    >
      <p style={titleStyle}>TalentSpotify Privacy Policy</p>

      <p className="">
        <strong>Last Updated:</strong> February 5, 2025
      </p>

      <Section>
        <p style={titleStyle}>Welcome to TalentSpotify</p>
        <p>
          At TalentSpotify, safeguarding your privacy and securing your personal
          information is our top priority. This Privacy Policy outlines how we
          collect, use, share, and protect your data when you interact with our
          website,{" "}
          <a href="https://www.talentspotify.com">www.talentspotify.com</a>. By
          accessing or using our services, you consent to the practices
          described below.
        </p>
      </Section>

      <Section>
        <strong className="font-weight-bold">1. Information We Collect</strong>
        <p>
          We gather the following categories of information to deliver and
          enhance our services:
        </p>
        <ul style={ulNoneStyle}>
          <li style={liStyle}>
            <strong>A. Personal Information:</strong>
            <p>When you create an account, we collect:</p>
            <ul style={ulDiscStyle}>
              <li>Full Name</li>
              <li>Email Address</li>
            </ul>
          </li>
        </ul>
        {/* B */}
        <ul style={ulNoneStyle}>
          <li style={liStyle}>
            <strong>B. Usage Data </strong>
            <p>
              We automatically collect technical and interaction details, such
              as:
            </p>
            <ul style={ulDiscStyle}>
              <li> IP address and device identifiers</li>
              <li> Browser type and version</li>
              <li> Operating system</li>
              <li>
                {" "}
                Pages visited, duration of visits, and navigation patterns
              </li>
            </ul>
          </li>
        </ul>

        {/* c */}
        <ul style={ulNoneStyle}>
          <li style={liStyle}>
            <strong>C. Cookies and Tracking Technologies </strong>
            <p>
              We use cookies (small text files stored on your device) to enhance
              functionality and personalize your experience. These include:
            </p>
            <ul style={ulDiscStyle}>
              <li>
                {" "}
                <strong> Session cookies:</strong> Expire when you close your
                browser.
              </li>
              <li>
                {" "}
                <strong> Persistent cookies:</strong> Remain until deleted or
                expired.
              </li>
              <p>
                You may adjust cookie settings via your browser, though this may
                affect website performance
              </p>
            </ul>
          </li>
        </ul>
      </Section>

      <Section>
        <strong className="font-weight-bold">
          2. How We Use Your Information
        </strong>
        <p>Your data enables us to:</p>
        <ul style={ulDiscStyle}>
          <li>
            <strong>Provide Services:</strong> Create and manage your account.
          </li>
          <li>
            <strong>Communicate:</strong> Send service updates, security alerts,
            and (with your consent) marketing materials.
          </li>
          <li>
            <strong>Personalize:</strong> Customize content and recommendations
            based on your usage.
          </li>
          <li>
            <strong>Analyze:</strong> Improve website performance, features, and
            user experience through analytics.
          </li>
          <li>
            <strong>Secure:</strong> Protect against fraud, spam, and
            unauthorized access.
          </li>
        </ul>
      </Section>

      <Section>
        <strong className="font-weight-bold">3. Sharing of Information</strong>
        <p>We only share your data under these circumstances:</p>
        <ul style={ulDiscStyle}>
          <li>
            <strong>Trusted Service Providers:</strong> Partners assisting with
            website operations, analytics, or marketing, bound by
            confidentiality agreements.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Disclosures required by law,
            regulatory requests, or to protect our rights and safety.
          </li>
          <li>
            <strong>Business Transfers:</strong> In mergers, acquisitions, or
            asset sales, with notice of any privacy implications.
          </li>
        </ul>
      </Section>

      <Section>
        <strong className="font-weight-bold">4. Your Rights and Choices</strong>
        <p>You retain control over your data:</p>
        <ul style={ulDiscStyle}>
          <li>
            <strong>Access/Update:</strong> Review or correct your information
            via account settings or by contacting us.
          </li>
          <li>
            <strong>Deletion:</strong> Request removal of data no longer
            necessary for our services.
          </li>
          <li>
            <strong>Opt-Out:</strong> Unsubscribe from marketing emails using
            the link in each message or by contacting us.
          </li>
          <li>
            <strong>Cookie Preferences:</strong> Adjust browser settings to
            manage cookies.
          </li>
        </ul>
      </Section>

      <Section>
        <strong className="font-weight-bold">5. Security Measures</strong>
        <p>We implement industry-standard safeguards to protect your data:</p>
        <ul style={ulDiscStyle}>
          <li>
            <strong>Encryption:</strong> Secures data during transmission (SSL)
            and storage.
          </li>
          <li>
            <strong>Access Controls:</strong> Restrict data access to authorized
            personnel.
          </li>
          <li>
            <strong>Regular Audits:</strong> Monitor and update security
            practices to address emerging threats.
          </li>
        </ul>
      </Section>

      <Section>
        <p>
          While we strive to protect your data, no system is entirely risk-free.
          Promptly report suspicious activity to{" "}
          <a href="mailto:Contact@talentspotify.com" className="text-primary">
            Contact@talentspotify.com
          </a>
          .
        </p>
      </Section>

      <Section>
        <strong className="font-weight-bold">6. Policy Updates</strong>
        <p>
          We may revise this policy to reflect legal, operational, or regulatory
          changes. Material updates will be communicated via email or a website
          notice. The “Last Updated” date at the top reflects the latest
          version. Continued use of our services constitutes acceptance of
          revisions.
        </p>
      </Section>

      <Section>
        <strong className="font-weight-bold">7.Contact Us</strong>
        <br />
        <span>
          For questions, data requests, or concerns about this policy, reach us
          at:
          <br />
        </span>
        <strong>Email:</strong>
        <a href="mailto:Contact@talentspotify.com" className="text-primary">
          Contact@talentspotify.com
        </a>
      </Section>

      <Section>
        <strong className="font-weight-bold">
          8. Governing Law and Dispute Resolution
        </strong>
        <p>
          This policy is governed by the laws of India. Disputes will be
          resolved through binding arbitration under the Arbitration and
          Conciliation Act, 1996.
        </p>
      </Section>

      <p className="mt-4">
        By using TalentSpotify, you confirm that you have read, understood, and
        agree to this Privacy Policy.
        <br />
        <strong style={{ textAlign: "start", marginTop: "3rem " }}>
          Thank you for trusting TalentSpotify.
        </strong>
      </p>
    </div>
  );
}
