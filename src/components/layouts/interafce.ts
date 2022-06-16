import { ReactNode } from "react";

//Pane Props components/layout/elements/Pane.tsx
export interface LayerProps {
    variant: string,
    children: ReactNode
}

//Pane Props components/layout/elements/TwoSplitColumn.tsx
export interface TwoSplitColumnProps {
    children: ReactNode[],
    leftVariant: string,
    rightVariant: string,
}