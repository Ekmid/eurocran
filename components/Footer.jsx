import React from 'react'

const Footer = () => {
  return (
    <section className='bg-zinc-900 flex-row-between py-12 px-52 xl:px-10'>

      <logo className='flex-column-start text-xs font-normal'>
        <img className='h-16' src='assets/icons/logo.svg'/>
        <span className='py-4'>Аренда мобильных и <br/> гусеничных кранов<br/>LIEBHERR</span>
        <span> © 2000-2021 Все права защищены</span>
      </logo>


      <menu className='bg-zinc-900 flex-row-center'>

        <forclients className='mr-10 flex-column-start'>
          <a href='*' className='mb-4 font-bold'>Клиентам</a>
          <a href='*' >О компании</a>
          <a href='*' >Услуги</a>
          <a href='*' >Каталог техники</a>
          <a href='*' >Аренда кранов</a>
          <a href='*' >Наши работы</a>
          <a href='*' >Прайс-лист</a>
          <a href='*' className>Контакты</a>
        </forclients>


        <technique className='mr-10 flex-column-start'>
          <a href='*' className='mb-4 font-bold'>Техника</a>
          <a href='*'>Гусеничные краны</a>
          <a href='*'>Мобильные краны</a>
          <a href='*'>Низеорамные краны</a>
          <a href='*'>Модульные платформы</a>
        </technique>


        <services className='flex-column-start'>
          <a href='*' className='mb-4 font-bold'>Услуги</a>
          <a href='*'>Аренда гусеничного крана</a>
          <a href='*'>Аренда мобильного крана</a>
          <a href='*'>Аренда башенного крана</a>
          <a href='*'>Перевозка негабаритного груза </a>
          <a href='*'>Разработка ппрк</a>
        </services>

      </menu>


      <social>
        <button className='mb-10 font-bold py-1.5 px-4 h-11 bg-white text-black hover:ease-in hover:duration-200 hover:bg-yellow-500'>
          Свяжитесь со мной
        </button>
        <div className='flex-row-between flex-center'>
          <a href='*'><img className='h-8' src='assets/icons/inst.svg'/></a>
          <a href='*'><img className='h-8' src='assets/icons/twit.svg'/></a>
          <a href='*'><img className='h-8' src='assets/icons/whats.svg'/></a>
          <a href='*'><img className='h-8' src='assets/icons/vk.svg'/></a>
          <a href='*'><img className='w-8' src='assets/icons/yandex.svg'/></a>
        </div>
      </social>


      <numbers className='flex-column-start'>
        <a href='*' className='mb-4 font-bold'>Контакты</a>
        <a href='*'>+7 (499) 929-96-66</a>
        <a href='*'>+7 (985) 364-55-18</a>
        <a href='*'>+7 (985) 226-20-30</a>
      </numbers>

    </section>
  )
}

export default Footer