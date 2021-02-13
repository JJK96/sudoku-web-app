import React from 'react';

export default function ModalConfirmRestart({modalHandler}) {
    const cancelHandler = () => modalHandler('cancel');
    const restartHandler = () => modalHandler('restart-confirmed');
    return (
        <div className="modal confirm-restart">
            <h1>Restart the puzzle?</h1>
            <p>Are you sure you wish to discard all the numbers and pencil-marks
            you've entered?</p>
            <div className="buttons">
                <button className="cancel" onClick={cancelHandler}>Cancel</button>
                <button className="danger" onClick={restartHandler} autoFocus>Restart</button>
            </div>
        </div>
    )
}
