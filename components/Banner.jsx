import React from 'react'

const Banner = () => {
  return (
    <section className='font-sans flex offer'>
        <offer className='w-1/2 fog py-32 pl-48'>

          <h1 className='text-black flex-start font-extrabold text-4xl text-left pb-7'>
            Аренда спецтехники <br/>
            Liebherr для любых задач
          </h1>

          <span className='text-black text-left flex-start font-normal'>Мобильные, гусеничные и башенные краны <br/> 
            LIEBHERR в аренду для любых задач и грузов. <br/> 
            Работаем по всей России
          </span>

          <btns className='flex-start pt-10 font-semibold'>
            <button className='text-white bg-yellow-500 h-12 px-10 mr-10'>Заказать звонок</button>
            <button className='text-black border border-black h-12 px-10'>Каталог техники</button>
          </btns>
        </offer>

        <rightside>Home</rightside>
        
    </section>
  )
}

export default Banner

