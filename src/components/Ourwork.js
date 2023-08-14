import Mainhed from "./Mainhed";
import Work from "./Work";
import Workbox from "./Workbox";

function Ourwork() {
  const imges = [
    "work-01.jpg",
    "work-02.jpg",
    "work-03.jpg",
    "work-04.jpg",
    "work-05.jpg",
    "work-06.jpg",
    "work-07.jpg",
    "work-08.jpg",
  ];
  const name = imges.map((ele) => {
    return <Workbox key={ele} name={ele} />;
  });
  const ele = {
    heading: "We Make This",
    title: "PREPARE TO BE AMAZED",
  };
  return (
    <div className="our-work pt-5 pb-5">
      <div className="container">
        <Mainhed ele={ele} />
        <Work />
        <div className="row">{name}</div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="active btn btn-primary rounded-pill text-uppercase width-100">
          I Wont Mor
        </button>
      </div>
    </div>
  );
}
export default Ourwork;
