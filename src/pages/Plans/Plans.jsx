import { Header } from "../../components/Header/Header"
import StepNav from "../../components/StepsNav/StepNav"


export const Plans = () => {
    return (
            <>
            <Header />
            <StepNav activeStep={1} />
            <section className='plans__section'>
                <div className='grid'>
                    
                </div>
            </section>
            </>
        )
}