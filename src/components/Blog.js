import Mainhed from "./Mainhed";
import Ourblog from "./Ourblog";

function Blog() {
  const cards = ["blog-1.jpg", "blog-2.jpg", "blog-3.jpg"];
  const ele = {
    heading: "Read Our Blog",
    title: "NEW STORIES",
  };
  const card = cards.map((card) => {
    return <Ourblog key={card} card={card} />;
  });
  return (
    <div className="blog pt-5 pb-5">
      <div className="container">
        <Mainhed ele={ele} />
        <div className="row">
          {card}
          <div className="d-flex justify-content-center mt-3">
            <button className="active btn btn-primary rounded-pill text-uppercase width-100">
              More Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
