
import { LayerProps } from "../interafce";

const Pane = ({variant, children}: LayerProps) => {
    return (
        <div className={variant}>
            {children}  
        </div>
    )
}

export default Pane;