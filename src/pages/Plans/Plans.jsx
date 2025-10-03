import { useState } from "react";
import "./Plans.scss";
import { Header } from "../../components/Header/Header";
import StepNav from "../../components/StepsNav/StepNav";
import CardCheck from "../../components/CradCheck/CardCheck";
import CardPlan from "../../components/CardPlans/CardPlans";
import { ButtonBack } from "../../components/ButtonBack/ButtomBack";

export const Plans = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const planes = [
    {
      name: "Plan Básico",
      price: 100,
      discountPrice: 80,
      description: "Cobertura básica.",
    },
    {
      name: "Plan Estándar",
      price: 150,
      discountPrice: 120,
      description: "Cobertura media.",
    },
    {
      name: "Plan Premium",
      price: 200,
      discountPrice: 160,
      description: "Cobertura total.",
    },
  ];

  return (
    <>
      <Header />
      <StepNav activeStep={1} />
      <section className="plans__section">
        <div className="grid">
          <div className="plans__content">
            <div className="plans__container">
              <ButtonBack />
              <div className="select">
                <div className="select__titulo">
                  <span>Rocío</span> ¿Para quién deseas cotizar?
                </div>
                <div className="select__subtitulo">
                  Selecciona la opción que se ajuste más a tus necesidades.
                </div>
              </div>
              <div className="planes">
                <div className="planes__options">
                  <CardCheck
                    title="Para mí"
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                    selected={selectedOption === "mio"}
                    onSelect={() => setSelectedOption("mio")}
                    img={"/src/assets/img/paraMi.png"}
                  />
                  <CardCheck
                    title="Para alguien mas"
                    description="Realiza una cotización para uno de tus familiares o cualquier persona."
                    selected={selectedOption === "regalo"}
                    onSelect={() => setSelectedOption("regalo")}
                    img={"/src/assets/img/paraAlguienMas.png"}
                  />
                </div>

                {selectedOption && (
                  <div className="planes__lista">
                    {planes.map((plan, index) => (
                      <CardPlan
                        key={index}
                        name={plan.name}
                        price={plan.price}
                        discountPrice={
                          selectedOption === "regalo"
                            ? plan.discountPrice
                            : null
                        }
                        description={plan.description}
                        recommended={plan.name === "Plan Estándar"}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
