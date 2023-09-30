import { ICardContainerProps } from "../interfaces/ICardContainerProps"
import CardContainer from "./CardContainer"

function Side(props: ICardContainerProps) {
    return (
        props.items && <CardContainer items={props.items} />
    )
}
export default Side