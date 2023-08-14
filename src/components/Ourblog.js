function Ourblog(props) {
  return (
    <div className="col-md-6 col-lg-4 ">
      <div className="card">
        <img src={props.card} className="card-img-top" alt="blog post 1" />
        <div className="card-body">
          <span className="text-black-50">8/8/2023</span>
          <h5 className="card-title">Some Awesome Blog Title Here</h5>
        </div>
      </div>
    </div>
  );
}
export default Ourblog;
