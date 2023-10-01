import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center text-center mt-auto">
            <span className="fw-bolder fs-2">404</span>
            <p className="fw-normal">Oh! Page not found</p>
            <Link to='/'><button type="button" className="btn btn-outline-primary">GO HOME</button></Link>
        </div>
    )
}
export default NotFound