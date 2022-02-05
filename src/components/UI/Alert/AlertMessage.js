import { Alert } from "react-bootstrap"

const AlertMessage = (props) => {
    return (
        <Alert variant={props.variantType} show={props.alertShowStatus}>{props.children}</Alert>
    )
}

export default AlertMessage
