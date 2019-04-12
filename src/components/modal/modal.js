import React from 'react';
import './modal.scss';

class Modal extends React.Component {
    render(){
        const {children, isOpen, defaultAction, defaultActionText='Okay', secondaryAction=null, secondaryActionText='Cancel'} = this.props;
        if(isOpen){
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {children}
                        <div className="ws-modal-actions center">
                            <button className="btn btn-large purple darken-2" onClick={defaultAction}>{defaultActionText}</button>
                            {
                                secondaryAction
                                ? <button onClick={secondaryAction} className="btn btn-large purple lighten-1">{secondaryActionText}</button>
                                : null
                            }
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal;