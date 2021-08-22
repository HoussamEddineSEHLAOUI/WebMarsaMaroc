


import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import CategorieUpdate from '../CategorieUpdate';
import './ModelAdd.css';





// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

export const ModelUpdate = ({ showModalAdd, setShowModaladd ,Id ,Nom }) => {
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
                <CategorieUpdate Id={Id} Nom={Nom} setShowModaladd={setShowModaladd}/>
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