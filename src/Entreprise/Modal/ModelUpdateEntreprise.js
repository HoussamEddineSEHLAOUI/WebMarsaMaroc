


import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import EntrepriseUpdate from '../EntrepriseUpdate';

import './ModelAddEntreprise.css';


export const ModelUpdateEntreprise = ({ showModalAdd, setShowModaladd ,numE ,nomE ,emailRespo ,teleRespo , siteWeb }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalAdd ? 1 : 0,
    transform: showModalAdd ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModaladd(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalAdd) {
        setShowModaladd(false);
        console.log('I pressed');
      }
    },
    [setShowModaladd, showModalAdd]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModalAdd ? (
        <div className="Background" onClick={closeModal} >
          <animated.div style={animation}>
            <div className="ModalWrapper" showModal={showModalAdd}>
              <div className="ModalContent">
                <div className="ModalContentbg">
                  <p className="ModalContenttitle">Modifier une categorie</p>
                </div>
                <EntrepriseUpdate 
                 numE={numE} 
                 nomE={nomE} 
                 emailRespo={emailRespo} 
                 teleRespo={teleRespo} 
                 siteWeb={siteWeb} 
                 setShowModaladd={setShowModaladd}/>
              </div>
              <p
                className="CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModaladd(false)}>
                  X
              </p>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};