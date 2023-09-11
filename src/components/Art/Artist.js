import React from "react";
import NavBar from "../NavBar/NavBar";
const Artist = () => {
  return (
    <div>
      <NavBar />
      <h1 className=" text-5xl font-serif py-8 px-20">ARTIST</h1>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>
      <div class="grid grid-cols-4 gap-4 py-16 ml-12">
        <div> 
          <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://lkhamgallery.com/wp-content/uploads/2023/04/IMG_99271618759331282-1-2-scaled-295x295.jpg" alt="" />
          <p className="py-5 mx-16 text-md font-bold font-serif">NOMIN BOLD</p>
        </div>
        <div>
          <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://lkhamgallery.com/wp-content/uploads/2023/05/322300584_1300937373807919_5363192751235451823_n-295x295.png" alt="" />
          <p className="py-5 mx-8 text-md font-bold font-serif">BULGANTUYA DECHINDORJ</p>
        </div>
        <div>
          <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://lkhamgallery.com/wp-content/uploads/2023/04/image1-2-295x295.jpeg" alt="" />
          <p className="py-5 mx-10 text-md font-bold font-serif">BADAM OTGONTUVDEN</p>
        </div>
        <div>
          <img className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://lkhamgallery.com/wp-content/uploads/2023/05/photo-cv-295x295.jpg" alt="" />
          <p className="py-5 mx-16 text-md font-bold font-serif">ARYUNA BULUTOVA</p>
        </div>


      </div>
    </div>
  );
};

export default Artist;
