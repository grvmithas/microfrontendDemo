import React, { useRef, useEffect, useState } from 'react'

import { mount } from 'minicart/MinicartApp'

import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/ShoppingBasket';

//const loadMinicartModule = () =>import(/* webpackChunkName: "minicart" */ 'minicart/MinicartApp');


//exporting mount function from minicart/src/bootstrap.js because a
// a react component will be framework specific, we want to keep it framework agnostic
export default function MinicartApp({ }) {
    const minicartRef = useRef(null)
    const [isMiniCartLoaded, setIsMiniCartLoaded] = useState(false);

    const loadMiniCart = () => {
        setIsMiniCartLoaded(!isMiniCartLoaded);
    };

    /*   const lazyMinicart = async () => {
          // Dynamically import the minicart module
          const minicartModule = await loadMinicartModule();
  
          // Use the mount function from the imported module
          minicartModule.mount(minicartRef.current, {
              isOpen: isMiniCartLoaded,
          });
  
          setIsMiniCartLoaded(!isMiniCartLoaded);
      };
   */
    useEffect(() => {
        const handleCartClosed = (event) => {
            // Handle the cart closed event

            console.log("event.detail.open", event.detail)
            setIsMiniCartLoaded(event.detail.open)
        };

        window.addEventListener('cartClosed', handleCartClosed);

        return () => {
            window.removeEventListener('cartClosed', handleCartClosed);
        };
    }, []);

    useEffect(() => {
        mount(minicartRef.current, {
            isOpen: isMiniCartLoaded
        })

    }, [isMiniCartLoaded])

    return (

        <>
            <Button onClick={loadMiniCart}><CartIcon /></Button>
            <div ref={minicartRef}></div>
        </>



    )
}
