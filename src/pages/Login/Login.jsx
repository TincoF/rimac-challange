import { Footer } from "../../components/Footer/Footer";
import Formulario from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import "./Login.scss";
export const Login = () => {
  return (
    <>
      <Header />
      <section className="hero__section">
        <div className="grid">
          <div className="hero__content">
            <div className="login">
              <div className="login__image-container">
                <img
                  src="/src/assets/img/portada-login.png"
                  alt="Imagen principal"
                  className="login__image"
                />
              </div>
              <div className="login__form-container">
                <div className="login__title">
                  <div>
                    <div className="mesaje">
                      Seguro Salud Flexible
                    </div>
                    <h2>
                      Creado para ti y tu familia
                    </h2>
                  </div>
                  <img src="/src/assets/img/portada-small.png" className="login__title-image" alt="" />
                </div>
                {/* <h2 className="login__title">
                  Creado para ti y tu familia
                  <img
                    src="/src/assets/img/portada-small.png"
                    alt=""
                    aria-hidden="true"
                    className="login__title-image"
                  />
                </h2> */}

                <Formulario />

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};
