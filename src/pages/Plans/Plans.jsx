import { useState, useEffect } from "react";
import "./Plans.scss";
import { Header } from "../../components/Header/Header";
import StepNav from "../../components/StepsNav/StepNav";
import CardCheck from "../../components/CradCheck/CardCheck";
import CardPlan from "../../components/CardPlans/CardPlans";
import { ButtonBack } from "../../components/ButtonBack/ButtomBack";
import { calculateAge } from "../../utils/age";
import { getPlans } from "../../services/plans";
import ingMio from "../../assets/img/paraMi.png";
import ingRegalo from "../../assets/img/paraAlguienMas.png";

export const Plans = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [planes, setPlanes] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Obtener usuario desde localStorage
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (!storedUser) return;

        const userAge = calculateAge(storedUser.birthDay);

        // Consumir API
        const plansApi = await getPlans();
        const data = plansApi;
        setUserName(storedUser.name);

        // Filtrar planes según la edad
        const validPlans = data.list.filter((plan) => userAge <= plan.age);

        setPlanes(validPlans);
      } catch (err) {
        console.error("Error al cargar planes:", err);
      }
    };

    fetchPlans();
  }, []);
  const handleSelectPlan = (plan, finalPrice) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
    window.location.href = "/resumen"; // 👈 redirección
  };
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
                  <span>{userName}</span> ¿Para quién deseas cotizar?
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
                    img={ingMio}
                  />
                  <CardCheck
                    title="Para alguien mas"
                    description="Realiza una cotización para uno de tus familiares o cualquier persona."
                    selected={selectedOption === "regalo"}
                    onSelect={() => setSelectedOption("regalo")}
                    img={ingRegalo}
                  />
                </div>

                {selectedOption && (
                  <div className="planes__lista">
                    {planes.map((plan, index) => {
                      const finalPrice =
                        selectedOption === "regalo"
                          ? plan.price * 0.95
                          : plan.price;
                      return (
                        <CardPlan
                          key={index}
                          name={plan.name}
                          price={plan.price}
                          discountPrice={finalPrice}
                          description={plan.description}
                          recommended={plan.name === "Plan en Casa y Clínica"}
                          onSelect={() => handleSelectPlan(plan, finalPrice)}
                        />
                      );
                    })}
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
