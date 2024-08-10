import React from 'react'

export const Hero = ({ isYoruba } : { isYoruba: boolean }) => {
  return (
    <div className='py-24'>
        <div className="mx-auto w-[90%] flex flex-col-reverse lg:flex-row space-y-7 lg:space-y-0 lg:space-x-7 ">
            <div className='flex-[1.5] '>
                <h2 className='font-montalt text-5xl lg:text-8xl font-bold text-[#ff4f5a] mb-5 '>Ọ̀rẹ́ Ọkàn</h2>
                <h6 className=" text-xl lg:text-2xl font-medium mb-6">
              {isYoruba
                ? "Ayékan àbójútó àyíká rẹ ní èdè Yorùbá!"
                : "Your mental health companion in Yoruba!"}
            </h6>
            <p className='text-black/70 text-lg'>
            {isYoruba
            ? "Ọ̀rẹ́ Ọkàn jẹ́ chatbot tí a ṣe ètò fún àbójútó ọ̀ràn ọkàn àti èdè Yorùbá. A ti ṣe é láti máa sọ̀rọ̀ pẹ̀lú rẹ nípa ohun tí o n ṣàdédé. O lè bá a sọ̀rọ̀ nígbàkùgbà, nígbà gbogbo ní èdè tí o dá lójú."
            : "Ọ̀rẹ́ Ọkàn is designed to address mental health issues and provide support in Yoruba. It is created to engage with you about your concerns at any time, in the language you are comfortable with."}
            </p>
            </div>

            <div className='flex justify-center flex-1 items-center'>
                <img src="./art-hero.png" className='w-[75%] ' alt="Hero RObot Image | Image by heroset on freepik" />
            </div>
        </div>
    </div>
  )
}
