import { TwoSplitColumnProps } from "../interafce";
import Pane from "./Pane";

const TwoSplitColumn = ({ children, leftVariant = '', rightVariant = '' }: TwoSplitColumnProps) => {

    const [ left, right ] = children;

    return (
        <section className='flex flex-row justify-between h-full'>
            <Pane variant={leftVariant}>
                {left}
            </Pane>
            <Pane variant={rightVariant}>
                {right}
            </Pane>
        </section>
    );
}

export default TwoSplitColumn;
