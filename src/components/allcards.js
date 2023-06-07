import React from "react";
import {useNavigate } from "react-router-dom";

const Allcards = (props) => {
//   const{()} = props.data;
const summary = props.data.show.summary
const image = props.data.show.image.original
const title = props.data.show.name
const datas = {
    param1:summary,
    param2:image,
    param3:title,
}
const navigate = useNavigate()
function goToSummary(){
    navigate('/info',{state : datas},)
}
// console.log(title)

  return (
    <div>
      <div className="card my-2" style={{ width: "22rem" }}>
        <img
          src={props.data.show.image.original}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.show.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Language : {props.data.show.language} {props.data.show.genres[0]}{" "}
          </li>

          <li className="list-group-item"></li>
          <li className="list-group-item">
            Watch show on every : {props.data.show.schedule.days[0]}
          </li>
          <li className="list-group-item"></li>
        </ul>
        <div className="card-body">
          <a href={props.data.show.url} className="card-link">
            Check Out (Official Link)
          </a>
        </div>
        {/* <Link to={"/info"}> */}
          <button
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
            class="btn btn-primary"
            type="submit"
            onClick={goToSummary}
          >
            More Info
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Allcards;
