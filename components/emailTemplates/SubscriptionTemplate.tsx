import React from "react";

const SubscriptionTemplate = (
  Link: string,
  message: string,
  title: string,
  image: string,
  description: string,
  unSubscriptionLink: string
) => {
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
          width={100}
          height={100}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "#ffffff",
            textAlign: "center",
            margin: "25px auto",
            backgroundColor: "#06b6d4",
            borderRadius: "7px",
            padding: "10px",
            width: "300px",
          }}
        >
          Magic Marble Foundation
        </h1>
      </div>

      <div
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        <img
          src={image}
          style={{
            borderRadius: "5px",
            marginRight: "12px",
            width: "250px",
            height: "200px",
          }}
        />
        <div
          style={{
            display: "block",
            height: "120px",
          }}
        >
          <h2 style={{color: "#6f7474" }}>{title}</h2>
          <p style={{color: "#6f7474" }}>{description}</p>
        </div>
      </div>

      {message === "subscription" && (
        <h2
          style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
        >
          Read Our New Diary
          <a style={{ marginLeft: "4px", marginRight: "4px" }} href={Link}>
            Here
          </a>
          .
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
      <h4 style={{ textAlign: "center", marginTop: "12px" }}>
        <a
          href={unSubscriptionLink}
          style={{
            color: "#06b6d4",
            textAlign: "center",
            margin: "auto",
            padding: "0 4px",
            fontStyle: "italic",
          }}
        >
          Unsubscribe
        </a>
      </h4>
    </div>
  );
};

export default SubscriptionTemplate;
