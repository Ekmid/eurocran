import React from 'react'

const Banner2 = () => {
  return (
    <section className="bg-white text-black relative pb-20 ">

      <h className="banner2-h">
        <h2 className="banner2-h2-y mr-3">Спецтехника</h2>
        <h2 className="banner2-h2-b">в аренду</h2>
      </h>
      
      <span className="lieb-fogged">LIEBHERR</span>
      

      <offer className="banner2-offer">

        <left className='w-1/2'>
          <img className='banner2-img' src='assets/images/crane banner2.png'></img>
        </left>

        <right className='banner2-right flex-column-start w-1/2'>
          <h3 className='banner2-h3'>Гусеничные краны</h3>
          
          <span className='banner2-span'>
            Аренда гусеничного крана – 
            актуальная услуга для многих строительных площадок. 
            Использование спецтехники существенно упрощает погрузку -
            выгрузку материалов, оптимизирует рабочий процесс.
          </span>

          <button className="text-white bg-yellow-500 h-12 px-10 mr-10 font-semibold">
            Выбрать спецтехнику
          </button>

        </right>  

      </offer>

    </section>
  )
}

export default Banner2