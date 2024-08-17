import React from "react";

const AdoptionDynamicPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
       <div className="w-full h-auto flex justify-start flex-col md:flex-row">
        <div className="md:w-[60%] w-full h-auto flex flex-col justify-start items-center space-y-2">
          <div className="w-full bg-gray-400 aspect-video rounded-[5px]">
            Video
          </div>
          <div className="w-full h-min flex">
            <div className="w-full flex flex-row justify-center items-center space-x-2">
              <div className="w-1/3 aspect-square  rounded-[5px]  bg-gray-400"></div>
              <div className="w-1/3 aspect-square  rounded-[5px]  bg-gray-400"></div>
              <div className="w-1/3 aspect-square  rounded-[5px]  bg-gray-400"></div>
            </div>
          </div>
          <div className="h-[20vh] w-[60%] md:flex hidden md:flex-row justify-center items-center space-x-0 md:space-x-4">
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Adopt
            </button>
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Sponsor
            </button>
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Donate
            </button>
          </div>
        </div>
        <div className="md:w-[40%] w-full h-auto flex justify-end z-10">
          <div className="w-[95%] h-full border-l border-gray-200 text-gray-500 indent-4 text-justify px-4 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              necessitatibus amet libero fugiat laboriosam odit? Praesentium
              sapiente nostrum ullam quam vel sequi, maxime magnam iste,
              expedita, qui accusamus aut commodi incidunt fugiat? Consectetur,
              nam maiores! Harum obcaecati soluta mollitia enim!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, inventore quisquam doloremque incidunt corrupti quia
              mollitia! Iusto exercitationem dolorum dicta, quis ut inventore
              laboriosam officiis, numquam eius ipsa facere. Accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam odio quis distinctio deserunt non omnis unde error illo
              doloremque quaerat, voluptatem, molestias ipsam aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              numquam cupiditate qui voluptatem aperiam amet vitae corporis
              possimus ducimus tenetur ad quis magni dolorem eligendi excepturi
              dolor debitis aspernatur, ipsa fuga fugit!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quod
              dolorum illo sapiente, adipisci dicta vitae. Impedit dolore ea
              alias sapiente expedita nobis eaque. Nostrum debitis consectetur
              cupiditate nihil accusamus neque nobis a. Debitis iste vitae
              soluta porro in perspiciatis quaerat unde, corporis modi
              consectetur molestiae magni architecto culpa. Ex!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ea incidunt esse voluptatem placeat atque pariatur
              veniam accusantium laudantium unde, sapiente, rerum maiores illum
              deserunt praesentium debitis voluptate fugit temporibus rem
              reiciendis optio beatae quis?
            </p>
          </div>
          
        </div>

      </div>
      <div className="h-[20vh] w-full flex flex-col md:hidden justify-center items-center space-x-0 md:space-x-4">
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Adopt
            </button>
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Sponsor
            </button>
            <button className="bg-cyan-500 text-white rounded-full py-2 w-full max-w-[200px]">
              Donate
            </button>
          </div>
    </div>
  );
};

export default AdoptionDynamicPage;
