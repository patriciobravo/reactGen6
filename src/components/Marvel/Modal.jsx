import React from "react";
import { createPortal } from "react-dom";
import "../../assets/css/components/Modal.scss";
//import SVGClose from "../assets/static/icons/close.svg";

const Modal = (props) =>
    props.isOpen
        ? createPortal(

            <div className="modal">
                <figure onClick={props.onClose} className="modal__close">
                <span className="cerrar" aria-hidden="true">&times;</span>
                </figure>
                {/* <button type="button" class="close" aria-label="Close">
                <span className="cerrar" aria-hidden="true">&times;</span>
                </button> */}
                <div className="modal__container">{props.children}</div>
            </div>,
            document.getElementById("modal"),
        )
        : "";

export default Modal;
