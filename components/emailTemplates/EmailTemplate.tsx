/* eslint-disable @next/next/no-img-element */
import React from "react";

const EmailTemplate = (Link: string, message: string) => {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGKUDFa_w5EFlNfyYP7dNRuVKpiiHtUrlYQ&s"
          alt="magic marble foundation"
        />
      </div>

      <h1
        style={{
          color: "#ffffff",
          textAlign: "center",
          margin: "25px auto",
          backgroundColor: "#06b6d4",
          borderRadius: "7px",
          padding: "50px",
          width: "",
        }}
      >
        Magic Marble Foundation
      </h1>

      {message === "reset" && (
        <h2
          style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
        >
          Click <a href={Link}>Here</a> to reset password.
        </h2>
      )}

      {message === "verification" && (
        <h2
          style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
        >
          Click <a href={Link}>Here</a> to verify your account.
        </h2>
      )}

      {message === "subscription" && (
        <h2
          style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
        >
          Read Our New Diary<a href={Link}>Here</a>.
        </h2>
      )}

      <h4
        style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
      >
        We are a USA based tax-exempt charitable organization (tax-id number
        86-1626792) under Section 501(c)(3) of the Internal Revenue Code.
        Donations are tax-deductible as allowed by law.
      </h4>

      <h4
        style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
      >
        Register Address: 455 E. Eisenhower Parkway #355 Ann Arbor, Michigan,
        48108 USA
      </h4>

      <h3 style={{ color: "#6f7474", textAlign: "center", margin: "auto" }}>
        For more information visit:
        <a
          href="http://www.magicmarblefoundation.org"
          style={{
            color: "#06b6d4",
            textAlign: "center",
            margin: "auto",
            padding: "0 4px",
          }}
        >
          www.magicmarblefoundation.org
        </a>
      </h3>
    </div>
  );
};

export default EmailTemplate;
