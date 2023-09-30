import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ICardContainerProps } from "../interfaces/ICardContainerProps";

function CardContainer(props: ICardContainerProps) {
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                {props.items.map(item =>
                    <Card as={Link} to={item.toLowerCase()} key={item} className="col-sm m-1 cursor-pointer">
                        <Card.Img variant="top" src={'/src/assets/' + item.toLowerCase() + '.svg'} onError={(e: any) => e.target.src = '/src/assets/react.svg'} />
                        <Card.Body>
                            <Card.Title>{item}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default CardContainer