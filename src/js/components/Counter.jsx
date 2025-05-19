import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // limpieza al desmontar
  }, []);

  const digitOne = Math.floor((seconds / 1) % 10);
  const digitTwo = Math.floor((seconds / 10) % 10);
  const digitThree = Math.floor((seconds / 100) % 10);
  const digitFour = Math.floor((seconds / 1000) % 10);

    //  retorno elemento html

    return (

        <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
             <div className="h1 d-flex gap-2 fs-1 bg-dark text-light p-5 rounded ">
            <div className="calendar">
                <i className="fas fa-clock"></i>  </div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
            </div>
        </div>

    )

}

