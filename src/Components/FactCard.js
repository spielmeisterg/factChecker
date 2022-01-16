import React from "react"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Modal from "react-bootstrap/Modal"

class FactCard extends React.Component{
    render(){
        return (
        <>
        <div>
            <Modal.Dialog>
            <Modal.Header>
                <h1>Random facts to waste your time!</h1>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="success">{this.props.fact}</Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={this.props.getNewFact}>Generate a new one!</Button>
            </Modal.Footer>
            </Modal.Dialog>
        </div>
        </>
        )
    }
}

export default FactCard