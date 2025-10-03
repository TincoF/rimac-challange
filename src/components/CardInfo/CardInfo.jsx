import "./CardInfo.scss";
const CardInfo = ({ name, dni, cel, plan, price }) => {
  return (
    <div className="card-info">
      <div className="card-info__header">
        <h3 className="card-info__title">PRECIOS CALCULADOS PARA:</h3>
        <div className="card-info__user">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z"
              fill="#141938"
            />
            <path
              d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z"
              fill="#141938"
            />
            <path
              d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z"
              fill="#141938"
            />
            <path
              d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z"
              fill="#141938"
            />
          </svg>
          <span className="card-info__name">{name}</span>
        </div>
      </div>
      <div className="card-info__divider"></div>
      <div className="card-info__dates">
        <h2 className="card-info__subtitle">Responsable de pago</h2>
        <p className="card-info__description">DNI: {dni}</p>
        <p className="card-info__description">Celular: {cel}</p>
      </div>
      <div className="card-info__dates">
        <h2 className="card-info__subtitle">Plan elegido</h2>
        <p className="card-info__description">Plan: {plan}</p>
        <p className="card-info__description">Costo del Plan: S/ {price} al mes</p>
      </div>
    </div>
  );
};
export default CardInfo;
