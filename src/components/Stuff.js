import Mainhed from "./Mainhed";

function Stuff() {
  const ele = {
    heading: "Some Stuff About Us",
    title: "THE GREAT TEAM",
  };
  return (
    <div className="stuff pt-5">
      <div className="container">
        <Mainhed ele={ele} />
        <p className="description text-center text-black-50 mb-5 m-auto">
          Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
          eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
          dapibus. Proin eget tortor risus. Donec sollicitudin molestie
          malesuada.
        </p>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 text-center text-md-start">
            <div className="text">
              <h4>Retina Design</h4>
              <p className="text-black-50 fs-6">
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                a.
              </p>
              <p className="text-black-50 fs-6">
                Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
                elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id
                orci porta dapibus. Proin eget tortor risus. Donec sollicitudin
                molestie malesuada.
              </p>
              <button className="active btn btn-primary rounded-pill text-uppercase width-100">
                Order me one
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="imgas">
              <img className="img-fluid" src="laptop.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stuff;
