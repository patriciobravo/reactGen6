import React from "react";
import { createPortal } from "react-dom";
import "../../assets/css/components/Modal.scss";
//import SVGClose from "../assets/static/icons/close.svg";

const Modal = (props) =>
    props.isOpen
        ? createPortal(

            <div className="modal">
                <figure onClick={props.onClose} className="modal__close">
                    <div className="modal__container">Cerrar</div>
                </figure>
                <div className="modal__container">{props.children}</div>
            </div>,
            document.getElementById("modal"),
        )
        : "";

export default Modal;
