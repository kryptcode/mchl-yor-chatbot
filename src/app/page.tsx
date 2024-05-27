import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full py-16 text-white bg-[#163748] ">
      {/* <div className="flex w-[90%] mx-auto lg:w-[70%] mb-10 justify-end">
        <button className="p-1.5 px-5 rounded-md font-medium bg-[#69f2fa] text-[#163748] hover:opacity-80 transition-opacity duration-300 ease-linear ">Login</button>
      </div> */}
      <div className="flex flex-col-reverse lg:flex-row w-[90%] mx-auto lg:w-[70%] h-[80%]">
        <div className="flex-1">
          <h3 className="text-4xl lg:text-5xl font-semibold lg:leading-normal mb-5">Your Personal AI<br /> Mental Health <br /> <span>Chatbot!</span>  </h3>
          <button className="p-1.5 px-5 rounded-md font-medium bg-[#69f2fa] text-[#163748] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear">Get Started</button>
        </div>
        <div className="flex-1 h-full p-10">
          <img
            src={'/Group 22.png'}
            alt="Bot saying Can I help you "
            className="w-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}
