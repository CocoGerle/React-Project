import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 font-serif">
        <div className="h-[80vh]">
          {/* left side */}
          <img
            src="https://lkhamgallery.com/wp-content/uploads/2023/03/WhatsApp-Image-2022-11-21-at-22.42.07-720x634.jpeg"
            alt=""
          />
        </div>
        {/* right side */}
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-5xl md:text-6xl font-bold ">LIVE PAINTING</h3>
          <p className="text-2xl py-6">
            Yellow room invites you to the Live Painting Masterclass by
            Otgontuvden Badam. During this masterclass, the artist will draw in
            front of the people, answer the questions and talk about his
            practice.
          </p>
          <p className="pb-6">The event is free and open to the public.</p>
        </div>
      </div>
      <div className="h-1 bg-yellow-400 w-5/6 ms-14"></div>

      <div className="max-w-[1400px] m-auto py-18 px-4 grid lg:grid-cols-2 gap-4 w-full h-[450px] bg-yellow-500 w-screen mt-5">
        {/* left side */}
        <div className="flex flex-col h-full py-5 ">
          <h1 className=" text-4xl font-serif font-bold">WORKSHOP</h1>
          <p className="text-base py-3">
            Contemporary art gallery located in Ulaanbaatar and specialized in
            the promotion of artists of Central Asia.
          </p>
          <p>Date: 20.12.22 Time: 20:00</p>
        </div>
        {/* right side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
          <img
            className="row-span-3 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt=""
          />
          <img
            className="row-span-6 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1526389157-6a5cc2bb4afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
            alt=""
          />
          <img
            className="row-span-3 object-cover w-full h-full p-1 "
            src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 mt-52 ml-12">
        <div>
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src="https://lkhamgallery.com/wp-content/uploads/2023/04/IMG_99271618759331282-1-2-scaled-295x295.jpg"
            alt=""
          />
          <p className="py-5 mx-16 text-md font-bold font-serif">NOMIN BOLD</p>
        </div>
        <div>
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src="https://lkhamgallery.com/wp-content/uploads/2023/05/322300584_1300937373807919_5363192751235451823_n-295x295.png"
            alt=""
          />
          <p className="py-5 mx-8 text-md font-bold font-serif">
            BULGANTUYA DECHINDORJ
          </p>
        </div>
        <div>
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src="https://lkhamgallery.com/wp-content/uploads/2023/04/image1-2-295x295.jpeg"
            alt=""
          />
          <p className="py-5 mx-10 text-md font-bold font-serif">
            BADAM OTGONTUVDEN
          </p>
        </div>
        <div>
          <img
            className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src="https://lkhamgallery.com/wp-content/uploads/2023/05/photo-cv-295x295.jpg"
            alt=""
          />
          <p className="py-5 mx-16 text-md font-bold font-serif">
            ARYUNA BULUTOVA
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
