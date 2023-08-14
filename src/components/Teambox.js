function Teambox(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="box bg-white">
        <img className="img-fluid" src={props.work.path} alt="" />
        <h4 className="text-light p-3">{props.work.hed}</h4>
        <blockquote className="text-black-50 p-3">
          {props.work.quote}
        </blockquote>
      </div>
    </div>
  );
}
export default Teambox;
