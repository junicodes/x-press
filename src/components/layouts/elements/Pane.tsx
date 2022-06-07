
import { PaneProps } from "../interafce";

const Pane = ({variant, children}: PaneProps) => {
    return (
        <div className={variant}>
            {children}  
        </div>
    )
}

export default Pane;