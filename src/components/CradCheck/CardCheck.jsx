
import "./CardCheck.scss";
import check from "../../assets/img/radioButton.png";

const CardCheck = ({ title, description, selected, onSelect, img }) => {
  return (
    <div
      className={`card-opcion ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >

      <div className="card-opcion__check-wrapper">
      <div className="card-opcion__check">
        {selected ? (
          <img
            src={check}
            alt="Seleccionado"
            className="card-opcion__check-img"
          />
        ) : (
          ""
        )}
      </div>
    </div>
      <div className="card-opcion__icon">
      <img src={img} alt={title} />
    </div>

    <h3 className="card-opcion__title">{title}</h3>
    <p className="card-opcion__description">{description}</p>
    </div>
  );
};

export default CardCheck;