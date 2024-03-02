import React from "react";

const FaqText = () => {
  return (
    <div className="accordion-item bg-light">
      <h3 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#questionOne"
          aria-expanded="false"
          aria-controls="questionOne"
        >
          Is there a free trial?
        </button>
      </h3>
      <div
        className="accordion-collapse collapse"
        id="questionOne"
        aria-labelledby="headingOne"
        data-bs-parent="#faq"
        style={{}}
      >
        <div className="accordion-body fs-sm">
          Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa
          platea urna curabitur habitant pulvinar lacinia neque. Netus gravida
          amet, aliquam quam turpis aliquet cras. Find aute irure dolor in
          reprehenderit voluptate velit esse cillum dolore eu nulla pariatur.
          Sit amet, adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default FaqText;
