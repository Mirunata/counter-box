
import boxlayout from "../../styles/Container-layout.module.css";
import Counter from "../counter";

const Counterbox = () => {
    return(
        <div className={ boxlayout.containercounterbox }>
            <div className={ boxlayout.counterposition }>
                <Counter />
            </div>
        </div>
    )
}

export default Counterbox;