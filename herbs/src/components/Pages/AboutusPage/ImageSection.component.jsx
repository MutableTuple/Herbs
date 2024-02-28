import React from "react";

const ImageSection = () => {
  return (
    <section
      className="container position-relative z-3"
      style={{ marginTop: "12px" }}
    >
      <div className="rounded-5 overflow-hidden "></div>
      <div className="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
        <div className="col-md-6 col-lg-5">
          <div className="fs-sm text-uppercase mb-3">What we do</div>
          <h2 className="display-6">
            We are a team who create marketing strategies
          </h2>
        </div>
        <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
          <p className="fs-xl">
            Morbi et massa fames ac scelerisque sit commodo dignissim{" "}
            <strong>faucibus quisque proin</strong> lectus laoreet sem
            adipiscing sollicitudin erat massa tellus lorem enim aenean
            phasellus in hendrerit interdum lorem proin pretium dictum urna
            suspendisse quis risus et.
          </p>
          <p className="fs-xl">
            Sit congue tellus urna phasellus sagittis interdum sed laoreet eget
            curabitur.{" "}
            <strong>
              Vel magna sit aliquet viverra morbi massa mattis urna,
            </strong>{" "}
            feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis
            dolor.
          </p>
          <p className="fs-xl mb-0">
            Ac facilisis eros sem faucibus aliquet venenatis amet fermentum
            nisi. Mauris consectetur sem malesuada. viverra a non sapien odio id
            risus volutpat at.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
