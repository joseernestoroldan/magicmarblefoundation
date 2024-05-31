import React, { useState } from "react";
import Container from "../layouts/container/Container";
import Icons from "../socialMedia/Icons";

const Infobar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="w-full bg-gray-800 py-1 text-white">
      <Container>
        <div className="w-full flex flex-col md:flex-row ">
          <div className="w-full flex justify-center md:justify-between">
            <div className="text-lg hidden md:flex">+1 312 - 600 - 8182</div>
            <div className="flex">
              <div className="text-lg hidden md:flex px-4">
                info@magicmarblefoundation.org
              </div>
              <Icons color="text-gray-200" show={show} setShow = {setShow} />
            </div>
          </div>
        
          <div className={`w-full ${show ? 'flex flex-col items-center' : 'hidden'} justify-between  py-4`}>
            <div className="text-lg">+1 312 - 600 - 8182</div>
            <div className="text-lg ">info@magicmarblefoundation.org</div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Infobar;
