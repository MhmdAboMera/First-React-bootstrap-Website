function Mainhed(props) {
  return (
    <div className="main-title mb-5 mt-5 position-relative text-center">
      <img src=" title.png" className="mb-4"></img>
      <h2>{props.ele.heading}</h2>
      <p className="text-black-50 text-uppercase">{props.ele.title}</p>
    </div>
  );
}

export default Mainhed;
