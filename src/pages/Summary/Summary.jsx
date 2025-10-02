import { Header } from "../../components/Header/Header"
import StepNav from "../../components/StepsNav/StepNav"

export const Summary = () => {
     return (
                <>
                <Header />
                <StepNav activeStep={2} />
                <section className='summary__section'>
                    <div className='grid'>
                    </div>
                </section>
                </>
            )
}