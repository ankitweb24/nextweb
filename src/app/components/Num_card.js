const Num_card = (props) => {
  return (
    <div
      className="card text-center text-light bg-black bg-gradient  border-0"
      style={{ opacity: 0.4 }}
    >
      <div className="card-body">
        <i className="fs-1">{props.icon}</i>
        <div className="card-title mt-3 fs-1" id="counter">
          {props.counter}
        </div>
        <p className="card-text mt-3">{props.title}</p>
      </div>
    </div>
  );
};

export default Num_card;
