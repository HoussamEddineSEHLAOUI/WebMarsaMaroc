import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import ProduitAdd from '../ProduitAdd';
import './ModalAddProduit.css';




export const ModelAddproduit = ({ showModalAdd, setShowModaladd }) => {
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
        <div className="Backgroundproduit" onClick={closeModal} >
          <animated.div style={animation}>
            <div className="ModalWrapperproduit" showModal={showModalAdd}>
              <div className="ModalContentproduit">
                <div className="ModalContentbgproduit">
                  <p className="ModalContenttitlepro">Ajouter un equipement </p>
                </div>
                <ProduitAdd setShowModaladd={setShowModaladd}/>
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