import { ButtonBack } from "../../components/ButtonBack/ButtomBack";
import CardInfo from "../../components/CardInfo/CardInfo";
import { Header } from "../../components/Header/Header";
import StepNav from "../../components/StepsNav/StepNav";
import "./Summary.scss";

export const Summary = () => {
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
              name="Juan Pérez"
              dni="12345678"
              cel="987654321"
              plan="Plan Básico"
              price="29.90"
            />
          </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
