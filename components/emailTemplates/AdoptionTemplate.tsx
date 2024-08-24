import React from "react";

const AdoptionTemplate = (
  animalName: string,
  animalImage: string,
  firstName: string,
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
        <h4
          style={{ color: "#6f7474", textAlign: "center", margin: "25px auto" }}
        >
          Hi {firstName}. Thank you for manifesting your interest in {animalName} adoption. In the link below you will find an application form to complete the adoption process. We have registered your request in our database and we will be attending it soon.
        </h4>

        <div
          style={{
            display: "block",
            height: "120px",
          }}
        ></div>
      </div>

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

export default AdoptionTemplate;
