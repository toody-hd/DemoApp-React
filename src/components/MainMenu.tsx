import { ICardContainerProps } from "../interfaces/ICardContainerProps"
import CardContainer from "./CardContainer"

function Main(props: ICardContainerProps) {
    return (
        props.items && <CardContainer items={props.items} />
    )
}

export default Main