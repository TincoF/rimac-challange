import "./CardPlans.scss";
const CardPlan = ({ name, price, discountPrice, description, recommended, onSelect }) => {
  
  return (
    <div className="card-plan">
      {recommended && (
        <div className="card-plan__recommended">Plan Recomendado</div>
      )}
      <div className="card-plan__header">
        <div className="card-plan__info">
          <h4 className="card-plan__name">{name}</h4>
          <div className="card-plan__prices">
            {discountPrice ? (
              <>
              <h2 className="card-plan__title">COSTO DEL PLAN</h2>
                <span className="card-plan__price-old">S/ {price} antes</span>
                <span className="card-plan__price">
                  S/ {discountPrice} al mes
                </span>
              </>
            ) : (
              <>
              <h2 className="card-plan__title">COSTO DEL PLAN</h2>
              <span className="card-plan__price">S/ {price} al mes</span>
              </>
            )}
          </div>
        </div>
        <div className="card-plan__image">
          <img src="/src/assets/img/IcHome.png" alt="Plan Icon" />
        </div>
      </div>

            <div className="divider"></div>
      <p className="card-plan__description">{description}</p>
      <button className="card-plan__button" onClick={onSelect}>Seleccionar</button>
    </div>
  );
};

export default CardPlan;
