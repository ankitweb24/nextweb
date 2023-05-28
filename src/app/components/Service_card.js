const Service_card = (props) => {
  return (
    <div className="card text-light bg-dark bg-gradient border p-3 mt-4">
      <div className="card-body">
        <i className="fs-1">{props.icon}</i>
        <div className="card-title mt-3">{props.title}</div>
        <p className="card-text mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sapiente reiciendis dolore! Praesentium dignissimos exercitationem suscipit cum eius quae iure quibusdam, est libero error asperiores assumenda magnam quaerat at obcaecati.</p>
        <button type="button" class="btn btn-secondary">Read More</button>
      </div>
    </div>
  )
}

export default Service_card