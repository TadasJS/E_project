
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function AdvertCard(props) {

  const navigate = useNavigate();

  const ctx = useContext(UserContext)


  const handleUpdateClick = () => {
    navigate(`/updateMovie/${props.id}`); 
  };

  return (
    <div className="col">
      <div className="cardStyle">
        <img src={props.photo} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Aprasymas: {props.description}</p>
          <p className="card-text">Price: {props.price}</p>
         {ctx.user.role_name === 'admin' && <button onClick={handleUpdateClick} className="btn btn-primary">
            Update
          </button>}
        </div>
      </div>
    </div>
  );
}





