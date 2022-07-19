import React from "react"
import { OuterCircle, InnerCircle, CircleSize } from "./Chip.styles"

export type ChipProps = {
    size: CircleSize,
    color: string
}

export const Chip: React.FC<ChipProps> = ({ size, color }) => {
    return (
        <OuterCircle size={size} color={color}>
            {size !== CircleSize.SMALL && <InnerCircle size={size}/>}
        </OuterCircle>
    )
}