import { ICardContainerProps } from "../interfaces/ICardContainerProps"
import CardContainer from "./CardContainer"

function StarterMenu(props: ICardContainerProps) {
    return (
        props.items && <CardContainer items={props.items} />
    )
}

export default StarterMenu