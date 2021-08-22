


import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import UtilisateurUpdate from '../UtilisateurUpdate';


import './ModelAddUtilisateur.css';


export const ModelUpdateUtilisateur = ({ showModalAdd, setShowModaladd ,id ,nomUtil ,entiteaffectation ,prenomUtil , dateAffectation }) => {
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
                  <p className="ModalContenttitle">Modifier l'utilisateur</p>
                </div>
                <UtilisateurUpdate
                 id={id} 
                 nomUtil={nomUtil} 
                 dateAffectation={dateAffectation} 
                 prenomUtil={prenomUtil} 
                 entiteaffectation={entiteaffectation} 
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