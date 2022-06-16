
import { LayerProps } from "../interafce";
import Header from "./Header";

const LayerWithHeader = ({variant, children}: LayerProps) => {
    return (
        <section className={variant}>
            <Header />
            {children}  
        </section>
    )
}

export default LayerWithHeader;