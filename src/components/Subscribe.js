function Subscribe() {
  return (
    <div className="subscribe pt-5 pb-5 text-center text-md-start">
      <div className="container">
        <form className="row align-items-center">
          <div className="col-md-6 col-lg-3">
            <div className="fw-bold fs-5 mb-3">
              Subscribe to our Newsletter :
            </div>
          </div>
          <div className="col-md-6 col-lg-7 mb-5">
            <input
              className="w-100 text-light p-2 bg-transparent"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="col-md-6 col-lg-2">
            <input
              className="btn rounded-pill"
              type="submit"
              value="Subscribe"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Subscribe;
