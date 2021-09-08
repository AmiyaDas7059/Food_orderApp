import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from '../UI/Modal.module.css'

const BackDrop =(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}/>
}
const ModalOverlay =(porps)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{porps.children}</div>
        </div>
    )
}
const PotalEle= document.getElementById('Overlay')
const Modal =(props)=>{
    return <Fragment >
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,PotalEle)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            PotalEle
        )}
    </Fragment>
};
export default Modal;