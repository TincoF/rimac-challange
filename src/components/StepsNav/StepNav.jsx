import "./StepNav.scss";

const StepNav = ({ activeStep }) => {
  const steps = [
    { id: 1, label: "Planes y cobertura" },
    { id: 2, label: "Resumen" },
  ];
  return (
    <nav className="step-nav">
      <ul className="step-nav__list">
        {steps.map((step) => (
          <li
            key={step.id}
            className={`step-nav__item ${
              activeStep === step.id ? "step-nav__item--active" : ""
            }`}
          >
            <div className="step-nav__circle">{step.id}</div>
            <span className="step-nav__label">{step.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default StepNav;
