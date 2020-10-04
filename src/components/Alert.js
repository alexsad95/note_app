import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  // hide all notifications except "danger" 
  const closeAlert = async () => {
    if (alert.type !== 'danger') {
      await setTimeout(hide, 3000);
    }
  };

  // output button "exit" only if alert.type = danger
  const CloseButton = () => {
    if (alert.type === 'danger') {
      return <button onClick={hide} 
                type="button" 
                className="close" 
                data-dismiss="alert" 
                aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
    }
    return null;
  };

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 400,
        exit: 300
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
      onEnter={closeAlert}
    >
      <div className={`alert alert-${alert.type || `warning`} ${alert.type !== 'danger' ? '' : 'alert-dismissible'} `}>
        {alert.text}
        <CloseButton/>
      </div>
    </CSSTransition>
  );
};

