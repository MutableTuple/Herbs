import React from "react";

const Message = () => {
  return (
    <div className="col-xl-8">
      <div className="card h-100 border-0">
        {/* Header */}
        <div className="navbar card-header w-100 mx-0 px-4">
          <div className="d-flex align-items-center w-100 px-sm-3">
            <button
              className="navbar-toggler d-xl-none me-3 me-sm-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#contactsList"
              aria-controls="contactsList"
              aria-label="Toggle contacts list"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="position-relative flex-shrink-0">
              <img
                className="rounded-circle"
                src="./src/assets/img/avatar/19.jpg"
                width="48"
                alt="Avatar"
              />
              <span
                className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1"
                style={{ width: ".625rem", height: ".625rem" }}
              ></span>
            </div>
            <div className="h6 ps-2 ms-1 mb-0">Mark Virgows</div>
            <div className="dropdown ms-auto">
              <button
                className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2"
                type="button"
                data-bs-toggle="dropdown"
                aria-label="Actions"
              >
                <i className="ai-dots-vertical fs-4 fw-bold"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end my-1">
                <a className="dropdown-item" href="#">
                  <i className="ai-user fs-base opacity-80 me-2"></i>
                  View profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ai-bell-off fs-base opacity-80 me-2"></i>
                  Disable notifications
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ai-edit fs-base opacity-80 me-2"></i>
                  Edit contact
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ai-trash fs-base opacity-80 me-2"></i>
                  Delete contact
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ai-logout fs-base opacity-80 me-2"></i>
                  Leave chat
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ai-circle-slash fs-base opacity-80 me-2"></i>
                  Block user
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className="card-body pb-0 pt-4 simplebar-scrollable-y"
          data-simplebar="init"
          style={{ maxHeight: "580px" }}
        >
          <div
            className="simplebar-wrapper"
            style={{ margin: "-24px -38px 0px" }}
          >
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "0px", bottom: "0px" }}
              >
                <div
                  className="simplebar-content-wrapper"
                  tabIndex="0"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "auto", overflow: "hidden scroll" }}
                >
                  <div
                    className="simplebar-content"
                    style={{ padding: "24px 38px 0px" }}
                  >
                    <div className="text-body-secondary text-center mb-4">
                      May 27, 2023
                    </div>
                    <div className="mb-3" style={{ maxWidth: "392px" }}>
                      <div className="d-flex align-items-end mb-2">
                        <div className="flex-shrink-0 pe-2 me-1">
                          <img
                            className="rounded-circle"
                            src="./src/assets/img/avatar/19.jpg"
                            width="48"
                            alt="Avatar"
                          />
                        </div>
                        <div className="message-box-start text-dark">
                          Thank you for recommending me as a designer. I have an
                          interview tomorrow!
                        </div>
                      </div>
                      <div className="fs-xs text-body-secondary text-end">
                        11:32 am
                      </div>
                    </div>
                    <div className="ms-auto mb-3" style={{ maxWidth: "392px" }}>
                      <div className="d-flex align-items-end mb-2">
                        <div className="message-box-end bg-primary text-white">
                          Oh no thanks! I just know that you are a great
                          specialist!
                        </div>
                        <div className="flex-shrink-0 ps-2 ms-1">
                          <img
                            className="rounded-circle"
                            src="./src/assets/img/avatar/01.jpg"
                            width="48"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div className="fs-xs text-body-secondary">
                        <i className="ai-checks text-primary fs-xl mt-n1 me-1"></i>
                        2:18 pm
                      </div>
                    </div>
                    <div className="text-body-secondary text-center my-4">
                      May 29, 2023
                    </div>
                    <div className="mb-3" style={{ maxWidth: "392px" }}>
                      <div className="d-flex align-items-end mb-2">
                        <div className="flex-shrink-0 pe-2 me-1">
                          <img
                            className="rounded-circle"
                            src="./src/assets/img/avatar/19.jpg"
                            width="48"
                            alt="Avatar"
                          />
                        </div>
                        <div className="w-100">
                          <div className="message-box-start text-dark mb-2">
                            I have great news, I've been hired! 🚀
                          </div>
                          <div className="message-box-start text-dark">
                            Thanks again!
                          </div>
                        </div>
                      </div>
                      <div className="fs-xs text-body-secondary text-end">
                        4:04 am
                      </div>
                    </div>
                    <div className="ms-auto mb-3" style={{ maxWidth: "392px" }}>
                      <div className="d-flex align-items-end mb-2">
                        <div className="message-box-end bg-primary text-white">
                          You are welcome!
                        </div>
                        <div className="flex-shrink-0 ps-2 ms-1">
                          <img
                            className="rounded-circle"
                            src="./src/assets/img/avatar/01.jpg"
                            width="48"
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div className="fs-xs text-body-secondary">
                        <i className="ai-check text-primary fs-xl mt-n1 me-1"></i>
                        2:18 pm
                      </div>
                    </div>
                    <div className="text-body-secondary text-center my-4">
                      Today
                    </div>
                    <div className="mb-3" style={{ maxWidth: "392px" }}>
                      <div className="d-flex align-items-end mb-2">
                        <div className="flex-shrink-0 pe-2 me-1">
                          <img
                            className="rounded-circle"
                            src="./src/assets/img/avatar/19.jpg"
                            width="48"
                            alt="Avatar"
                          />
                        </div>
                        <div className="message-box-start text-dark">
                          I'm so happy to be part of the team and work with you
                          on this new exciting project. Can't thank you enough
                          😊
                        </div>
                      </div>
                      <div className="fs-xs text-body-secondary text-end">
                        10:17 am
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Textarea) */}
        <div className="card-footer w-100 border-0 mx-0 px-4">
          <div className="d-flex align-items-end border rounded-3 pb-3 pe-3 mx-sm-3">
            <textarea
              className="form-control border-0"
              rows="3"
              placeholder="Type a message"
              style={{ resize: "none" }}
            ></textarea>
            <div className="nav flex-nowrap align-items-center">
              <a
                className="nav-link text-body-secondary p-1 me-1"
                href="#"
                aria-label="Attach"
              >
                <i className="ai-paperclip fs-xl"></i>
              </a>
              <a
                className="nav-link text-body-secondary p-1"
                href="#"
                aria-label="Emoji"
              >
                <i className="ai-emoji-smile fs-xl"></i>
              </a>
              <button className="btn btn-sm btn-secondary ms-3" type="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
