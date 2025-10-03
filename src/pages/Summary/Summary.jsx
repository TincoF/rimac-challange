import { ButtonBack } from "../../components/ButtonBack/ButtomBack";
import CardInfo from "../../components/CardInfo/CardInfo";
import { Header } from "../../components/Header/Header";
import StepNav from "../../components/StepsNav/StepNav";
import "./Summary.scss";

export const Summary = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const formData = JSON.parse(localStorage.getItem("formData"));
  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
  const finalPrice = JSON.parse(localStorage.getItem("finalPrice"));
  return (
    <>
    <div style={{height: '100%'}}>
      <Header />
      <StepNav activeStep={2} />
      <section className="summary__section">
        <div className="grid">
          <div className="summary__content">
            <div className="summary__container">
              <ButtonBack />
              <div className="summary__titulo">
                  Resumen del seguro
                </div>
            <CardInfo
              name={`${userData?.name} ${userData?.lastName}`}
              dni={formData?.dni}
              cel={formData?.telefono}
              plan={selectedPlan?.name}
              price={finalPrice}
            />
          </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
