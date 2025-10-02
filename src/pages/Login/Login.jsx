import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./Login.scss";
export const Login = () => {
  return (
    <>
      <Header />
      <section className="login__section">
        <div className="grid">
          <div className="login__content">
            <div className="login__container">
              <div className="login__image">
                <img src="/src/assets/img/portada-login.png" alt="" />
              </div>
              <div className="login__form"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
