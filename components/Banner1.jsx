import React from 'react'

const Banner = () => {
  return (
    <section className='font-sans flex offer h-screen'>

        <offer className='w-1/2 fog py-32 xl:pl-52 pl-48 relative'>

          <h1 className='text-black flex-start font-extrabold text-4xl text-left pb-7'>
            Аренда спецтехники <br/>
            Liebherr для любых задач
          </h1>

          <span className='text-black text-left flex-start font-normal'>Мобильные, гусеничные и башенные краны <br/> 
            LIEBHERR в аренду для любых задач и грузов. <br/> 
            Работаем по всей России
          </span>

          <btns className='flex-start pt-10 font-semibold'>
            <button className='text-white bg-yellow-500 h-12 px-10 mr-10 hover:ease-in hover:duration-300 hover:bg-gray-800'>Заказать звонок</button>
            <button className='text-black border border-black h-12 px-10 hover:ease-in hover:duration-300 hover:bg-yellow-500'>Каталог техники</button>
          </btns>

          <button className='border-2 border-white xl:p-6 p-8 absolute bottom-0 right-0'>
            <img className='origin-center rotate-180 h-5 w-5' src='assets/icons/arrow.svg'/>
          </button>
        </offer>

        <rightside className='w-1/2 relative'>

          <div className='flex-end pt-10 pr-10'>
            <counter className='font-roboto font-black text-4xl text-slate-100'>01/</counter>
            <span className='pt-2 font-roboto font-black text-slate-200'>04</span>
          </div>


          <button className='absolute bottom-0 left-0 xl:p-6 p-8 bg-yellow-500 flex-left-end border-2 border-yellow-500'>
            <img src='assets/icons/arrow.svg' className='h-5 w-5 arrow-icon'/>
          </button>

        </rightside>
        
    </section>
  )
}



export default Banner

