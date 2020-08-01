import Popup from "reactjs-popup"
import React from "react"

const CustomPopUp = ({popUpText, closePopUp, PopUpButton, ...rest}) => {
    return (
        <Popup
        className="my-pop"
        open
        closeOnDocumentClick
        lockScroll
        onClose={closePopUp}>
        {close => (
          <div className="popWrapper">
          <button type="button" className="btn btn-danger close-popup" onClick={closePopUp}>            
            <i className="fe fe-x"></i>
          </button>
            {/* <a className="close-popup" onClick={closePopUp}>
            </a> */}
            <div className="popup-content-popup">
              <p className="title"> {popUpText} </p>
              <button onClick={closePopUp} className="choose">{PopUpButton}</button>
            </div>
          </div>
        )}
      </Popup>
    )
}
export default CustomPopUp;