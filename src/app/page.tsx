"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isYoruba, setIsYoruba] = useState(true);
  return (
    <main className="min-h-[200vh] w-full text-neutral-800 bg-white relative ">
      <div className="h-[10vh] shadow-md bg-white flex items-center sticky top-0 left-0 justify-center z-50 border-[#111] border-b ">
        <div className="w-[90%] flex justify-between items-center mx-auto ">
          <div>
            <Link
              href="/"
              className="text-2xl text-black  font-montalt font-bold"
            >
              
              Ọ̀rẹ́ Ọkàn
            </Link>
          </div>

          <div className="flex space-x-3 items-center ">
            <div className="" onClick={() => setIsYoruba(!isYoruba)}>
              Translate to{" "}
              <span className="cursor-pointer underline ">
                {isYoruba ? "English" : "Yoruba"}
              </span>
            </div>
            <div className="hidden lg:inline-block">
              <SignedOut>
                <button className="p-1.5 px-5 rounded-md font-medium bg-[#000] text-[#fff] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear">
                  <SignInButton children="Get Started" />
                </button>
              </SignedOut>
              <SignedIn>
                <Link
                  href={"/chat"}
                  className="p-1.5 px-5 rounded-md font-medium bg-[#000] text-[#fff] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear"
                >
                  Continue chatting
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="z-0 text-neutral-100 bg-cover bg-center lg:h-screen relative">
        <div className="py-16 lg:pt-32 w-[90%] z-[10]  mx-auto">
          <div className="text-center lg:w-2/3 mx-auto">
            <h2 className="font-montalt font-bold text-[#4ddb4d] text-6xl lg:text-9xl mb-6 ">
              Ọ̀rẹ́ Ọkàn
            </h2>
            <p className=" text-2xl lg:text-4xl font-semibold text-neutral-300 mb-6">
              {isYoruba
                ? "Ẹ káàbọ̀ sí Ọ̀rẹ́ Ọkàn - Ayékan àbójútó àyíká rẹ ní èdè Yorùbá!"
                : "Welcome to Ọ̀rẹ́ Ọkàn - Your mental health companion in Yoruba!"}
            </p>
            {/* <p className="text-lg mb-6">
              {isYoruba
                ? "Ọ̀rẹ́ Ọkàn jẹ́ ẹlẹ́rọ̀nà-ìbànújẹ́ àti àbójútó àyíká tó n jẹ́ kí àwọn ènìyàn lò éde Yorùbá láti ṣe ìbáṣepọ̀ àti ké gbọ́ ìtẹ́wọ́gbà tí wọ́n fẹ́."
                : "Ọ̀rẹ́ Ọkàn is a digital mental health companion that allows people to converse in Yoruba for the support and acceptance they need."}
            </p> */}
            <div>
              <SignedOut>
                <button className="p-1.5 px-10 rounded-md font-medium bg-[#4ddb4d] text-[#000] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear">
                  <SignInButton children="Get Started" />
                </button>
              </SignedOut>
              <SignedIn>
                <Link
                  href={"/chat"}
                  className="p-1.5 px-10 rounded-md font-medium bg-[#4ddb4d] text-[#000] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear"
                >
                  Continue chatting
                </Link>
              </SignedIn>
            </div>
          </div>

          {/* <div className="flex-1"></div> */}
        </div>
        <div className="absolute w-full h-full -z-[2] top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      </div>
      <div className="w-[90%] flex flex-col lg:flex-row gap-5 text-lg lg:text-3xl tracking-wide leading-relaxed justify-between mx-auto py-24 lg:pt-44 ">
        {/* <h6 className="text-4xl text-center text-neutral-900 font-bold mb-3">
          {isYoruba ? "Kí ló jẹ́ Ọ̀rẹ́ Ọkàn?" : "What is Ọ̀rẹ́ Ọkàn?"}
          </h6> */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./2.jpg"
            alt=" "
            className="max-w-[400px] w-[80%] lg:w-full robot-bounce "
          />
        </div>
        <div className="flex-1">
          {isYoruba
            ? "Ọ̀rẹ́ Ọkàn jẹ́ chatbot tí a ṣe ètò fún àbójútó ọ̀ràn ọkàn àti èdè Yorùbá. A ti ṣe é láti máa sọ̀rọ̀ pẹ̀lú rẹ nípa ohun tí o n ṣàdédé. O lè bá a sọ̀rọ̀ nígbàkùgbà, nígbà gbogbo ní èdè tí o dá lójú."
            : "Ọ̀rẹ́ Ọkàn is designed to address mental health issues and provide support in Yoruba. It is created to engage with you about your concerns at any time, in the language you are comfortable with."}
        </div>
      </div>
      <div className="lg:py-24"></div>
      <div className="w-[90%] mx-auto ">
        <h5 className="text-center text-4xl font-semibold mb-7 text-black">
          {isYoruba ? "Báwo ni Ọ̀rẹ́ Ọkàn ṣe n ṣiṣẹ́?" : "How Does Ọ̀rẹ́ Ọkàn Work?"}
        </h5>

        <div className="grid lg:grid-cols-3 text-center gap-8">
          <div className="border shadow-md rounded-lg p-5  min-h-[200px]">
            <div className="flex justify-center items-center mb-5">
              <img
                src="https://www.svgrepo.com/show/506603/thumbs-up-fill.svg"
                className="w-24 h-24"
                alt=""
              />
            </div>
            <h6 className="text-2xl font-semibold mb-1">
              {isYoruba ? "Bá a Kọ̀kọ́ Bẹrẹ" : "Get Started"}
            </h6>

            <p className="text-lg">
              {isYoruba
                ? "Ìbẹ̀rẹ̀ jẹ́ ẹ̀fẹ̀, fi orúkọ rẹ tàbí orúkọ tí o fẹ́ lo sínú àyíká ìbáṣepọ̀."
                : "It's easy to begin. Just enter your name or a preferred nickname into the chat interface."}
            </p>
          </div>

          <div className="border shadow-md rounded-lg p-5 min-h-[200px]">
            <div className="flex justify-center items-center mb-5">
              <img
                src="https://www.svgrepo.com/show/510890/chat-circle.svg"
                className="w-24 h-24"
                alt=""
              />
            </div>
            {isYoruba ? (
              <>
                <h6 className="text-2xl font-semibold mb-1">
                  Sọ̀rọ̀ Pẹ̀lú Ọ̀rẹ́ Ọkàn
                </h6>
                <p className="text-lg">
                  Sọ ohun tí ó n dákẹ̀dákẹ̀, ohun tí ó n fún ọ ní ìbànújẹ́ tàbí
                  àníyàn. Ọ̀rẹ́ Ọkàn yóò fetísí, yóò sì fún ọ ní ìmọ̀ràn tí yóò ràn
                  ọ́ lọ́wọ́.
                </p>
              </>
            ) : (
              <>
                <h6 className="text-2xl font-semibold mb-1">
                  Talk to Ọ̀rẹ́ Ọkàn
                </h6>
                <p className="text-lg">
                  Share what is troubling you, what is causing you sadness or
                  anxiety. Ọ̀rẹ́ Ọkàn will listen and provide advice to help you.
                </p>
              </>
            )}
          </div>

          <div className="border shadow-md rounded-lg p-5 min-h-[200px]">
            <div className="flex justify-center items-center mb-5">
              <img
                src="https://www.svgrepo.com/show/499037/bridge.svg"
                className="w-24 h-24"
                alt=""
              />
            </div>
            {isYoruba ? (
              <>
                <h6 className="text-2xl font-semibold mb-1">
                  Gba Ìmúdájú Òótọ́
                </h6>
                <p className="text-lg">
                  Àwọn ìmọ̀ràn tí Ọ̀rẹ́ Ọkàn yóò fún ni pẹ̀lú àwọn àmúyẹràn tó wúlò
                  fún ìmúdàgba àti àláàfíà ọkàn rẹ.
                </p>
              </>
            ) : (
              <>
                <h6 className="text-2xl font-semibold mb-1">
                  Receive Genuine Support
                </h6>
                <p className="text-lg">
                  The advice given by Ọ̀rẹ́ Ọkàn will be accompanied by practical
                  tips for your growth and mental well-being.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto w-[90%] lg:w-2/3 text-center py-24 ">
        <h6 className="text-4xl text-center text-neutral-900 font-bold mb-3">
          {isYoruba ? "Ẹ́ Ṣàkọsílẹ̀ Lónìí!" : "Sign Up Today!"}
        </h6>
        <p>
          {isYoruba
            ? "Ẹ yáwọlé sí ìgbé ayé aláàánú àti ìfẹ́, bá a Ọ̀rẹ́ Ọkàn sòwò lónìí."
            : "Step into a life of compassion and love by talking to Ọ̀rẹ́ Ọkàn today."}
        </p>
      </div>
      {/* <div className="flex flex-col-reverse lg:flex-row w-[90%] mx-auto lg:w-[70%] h-[80%]">
        <div className="flex-1">
          <h3 className="text-4xl lg:text-5xl font-semibold lg:leading-normal mb-5">
            Your Personal AI
            <br /> Mental Health <br />{" "}
            <span className="text-[#69f2fa]">Chatbot!</span>{" "}
          </h3>

          <div>
            <SignedOut>
              <button className="p-1.5 px-5 rounded-md font-medium bg-[#69f2fa] text-[#163748] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear">

              <SignInButton  />
              </button>
            </SignedOut>
            <SignedIn>
              <Link href={"/chat"} className="p-1.5 px-5 rounded-md font-medium bg-[#69f2fa] text-[#163748] text-lg hover:opacity-80 transition-opacity duration-300 ease-linear">
                Continue chatting
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 h-full p-10">
          <img
            src={"/Group 22.png"}
            alt="Bot saying Can I help you "
            className="w-full object-contain"
          />
        </div>
      </div> */}
    </main>
  );
}

      {/* <div className="flex flex-col w-[90%] lg:w-[70%] mx-auto lg:flex-row py-12 lg:space-x-7">
        <div className="flex-1 flex flex-col justify-evenly space-y-5">
          <div className="rounded-xl p-4 border">
            <h6 className="text-[#2fe06f] text-xl font-semibold mb-3">
              {isYoruba
                ? "Àwọn Èyàn Wo Nìkan yóò Rànlọ́wọ́?"
                : "Who Can It Help?"}
            </h6>
            <ul className="space-y-1.5">
              <li className="">
                -{" "}
                {isYoruba
                  ? "Àwọn tó n dojú kọ àwọn ìṣòro ìbànújẹ́"
                  : "Those facing depression "}
              </li>
              <li>
                -{" "}
                {isYoruba ? "Àwọn tó n dáníní àníyàn" : "Those facing anxiety"}
              </li>
              <li>
                -{" "}
                {isYoruba
                  ? "Àwọn tó n dojúkọ ìṣòro ìdààmú ọkàn"
                  : "Those dealing with mental health issues"}
              </li>
              <li>
                -{" "}
                {isYoruba
                  ? "Àwọn tó fẹ́ ké bá a sọ̀rọ̀ nípa ìrírí ayé wọn"
                  : "Those wanting to talk about their life experiences"}
              </li>
              <li>
                -{" "}
                {isYoruba
                  ? "Àwọn tó n fẹ́ ìbáṣepọ̀ ìtẹ́wọ́gbà ní èdè Yorùbá"
                  : "Those seeking supportive interaction in Yoruba"}
              </li>
            </ul>
          </div>

          <div className="rounded-xl p-4 border">
            <h6 className="text-[#2fe06f] text-xl font-semibold mb-3">
              {isYoruba ? "Àwọn Àǹfààní Ọ̀rẹ́ Ọkàn:" : "Benefits of Ọ̀rẹ́ Ọkàn:"}
            </h6>
            <ul className="space-y-1.5">
              <li className="">
                -{" "}
                {isYoruba ? (
                  <span>
                    <b className="text-neutral-300">Àyíká Aláàyè:</b> Ìbáṣepọ̀ ní
                    èdè Yorùbá yóò jẹ́ kí o rí ààyè láti sọ ohun tó wà nínú rẹ ní
                    irọrun.
                  </span>
                ) : (
                  <span>
                    <b className="text-neutral-300">Comfortable Environment:</b>{" "}
                    Interaction in Yoruba will allow you to express your
                    feelings more freely.
                  </span>
                )}
              </li>
              <li className="">
                -{" "}
                {isYoruba ? (
                  <span>
                    <b className="text-neutral-300">Ìbòwò àti Ìtẹ́wọ́gbà:</b> Ọ̀rẹ́
                    Ọkàn yóò jẹ́kí o lérò pẹ̀lú ìfẹ́ àti ìtẹ́wọ́gbà.
                  </span>
                ) : (
                  <span>
                    <b className="text-neutral-300">Respect and Acceptance:</b>{" "}
                    Ọ̀rẹ́ Ọkàn will make you feel loved and accepted.
                  </span>
                )}
              </li>
              <li className="">
                -{" "}
                {isYoruba ? (
                  <span>
                    <b className="text-neutral-300">Ìrọrun àti Ìdánáwo:</b> Sọ̀rọ̀
                    nígbàkùgbà, nígbà gbogbo, kó yé ó kó ni láti jáde lọ.
                  </span>
                ) : (
                  <span>
                    <b className="text-neutral-300">
                      Convenience and Assistance:
                    </b>{" "}
                    Talk anytime, anywhere, without needing to leave your home.
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl flex-1 p-4 border">
          <h6 className="text-[#2fe06f] text-xl font-semibold mb-3">
            {isYoruba
              ? "Báwo ni Ọ̀rẹ́ Ọkàn ṣe n ṣiṣẹ́?"
              : "How Does Ọ̀rẹ́ Ọkàn Work?"}
          </h6>

          <ul className=" text-xl space-y-1.5">
            <li className="">
              -{" "}
              {isYoruba ? (
                <span>
                  <b className="text-neutral-300">Bá a Kọ̀kọ́ Bẹrẹ: </b> Ìbẹ̀rẹ̀ jẹ́
                  ẹ̀fẹ̀, fi orúkọ rẹ tàbí orúkọ tí o fẹ́ lo sínú àyíká ìbáṣepọ̀.
                </span>
              ) : (
                <span>
                  <b className="text-neutral-300">Get Started:</b> It's easy to
                  begin. Just enter your name or a preferred nickname into the
                  chat interface.
                </span>
              )}
            </li>
            <li className=" my-5">
              -{" "}
              {isYoruba ? (
                <span>
                  <b className="text-neutral-300">Sọ̀rọ̀ Pẹ̀lú Ọ̀rẹ́ Ọkàn: </b> Sọ
                  ohun tí ó n dákẹ̀dákẹ̀, ohun tí ó n fún ọ ní ìbànújẹ́ tàbí
                  àníyàn. Ọ̀rẹ́ Ọkàn yóò fetísí, yóò sì fún ọ ní ìmọ̀ràn tí yóò ràn
                  ọ́ lọ́wọ́.
                </span>
              ) : (
                <span>
                  <b className="text-neutral-300">Talk to Ọ̀rẹ́ Ọkàn: </b> Share
                  what is troubling you, what is causing you sadness or anxiety.
                  Ọ̀rẹ́ Ọkàn will listen and provide advice to help you.
                </span>
              )}
            </li>
            <li className="">
              -{" "}
              {isYoruba ? (
                <span>
                  <b className="text-neutral-300">Gba Ìmúdájú Òótọ́: </b> Àwọn
                  ìmọ̀ràn tí Ọ̀rẹ́ Ọkàn yóò fún ni pẹ̀lú àwọn àmúyẹràn tó wúlò fún
                  ìmúdàgba àti àláàfíà ọkàn rẹ.
                </span>
              ) : (
                <span>
                  <b className="text-neutral-300">Receive Genuine Support: </b>{" "}
                  The advice given by Ọ̀rẹ́ Ọkàn will be accompanied by practical
                  tips for your growth and mental well-being.
                </span>
              )}
            </li>
          </ul>
        </div>
      </div> */}