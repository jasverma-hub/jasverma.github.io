import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
  return (
    <div className="text-center">
      <p>
        <FontAwesomeIcon icon={faCopyright}/>
        {" "}
        Jas Verma. Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" />
      </p>
      <div className="h-1 bg-black w-20 mx-auto mt-2"></div>
    </div>
  );
}

export default Copyright;
