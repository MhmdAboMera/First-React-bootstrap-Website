import Teambox from "./Teambox";

function Team() {
  const work = {
    path: "team-1.png",
    hed: "Luke Skywalker",
    quote:
      "I don't understand how we got by those troops. I thought we were dead.",
  };
  const work2 = {
    path: "team-2.png",
    hed: "Luke Skywalker",
    quote:
      "I don't understand how we got by those troops. I thought we were dead.",
  };
  const work3 = {
    path: "team-3.png",
    hed: "Luke Skywalker",
    quote:
      "I don't understand how we got by those troops. I thought we were dead.",
  };
  const work4 = {
    path: "team-4.png",
    hed: "Luke Skywalker",
    quote:
      "I don't understand how we got by those troops. I thought we were dead.",
  };
  return (
    <div className="team text-center pt-5 pb-5">
      <div className="container pt-5 pb-5">
        <h2 className="fw-bold">Meet the team</h2>
        <p className="text-black-50 mb-5">
          Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
          eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
          dapibus. Proin eget tortor risus. Donec sollicitudin molestie
          malesuada.
        </p>
        <div className="row">
          <Teambox work={work} />
          <Teambox work={work2} />
          <Teambox work={work3} />
          <Teambox work={work4} />
        </div>
      </div>
    </div>
  );
}
export default Team;
