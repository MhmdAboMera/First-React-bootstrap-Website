function Workbox(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="box mb-3 bg-white" data-work="Application">
        <img src={props.name} className="img-fluid" alt="" />
      </div>
    </div>
  );
}
export default Workbox;
