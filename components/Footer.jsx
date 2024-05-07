import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 flex-row-between py-12 2xl:px-52 '>

      <logo className='flex-column-start text-xs font-normal'>
        <img className='h-16' src='assets/icons/logo.svg'/>
        <span className='py-4'>Аренда мобильных и <br/> гусеничных кранов<br/>LIEBHERR</span>
        <span> © 2000-2021 Все права защищены</span>
      </logo>


      <menu className='bg-zinc-900 flex-row-center'>

        <forclients className='mr-10 flex-column-start'>
          <Link href='#' className='mb-4 font-bold'>Клиентам</Link>
          <Link href='*'>О компании</Link>
          <Link href='*'>Услуги</Link>
          <Link href='*'>Каталог техники</Link>
          <Link href='*'>Аренда кранов</Link>
          <Link href='*'>Наши работы</Link>
          <Link href='*'>Прайс-лист</Link>
          <Link href='*'>Контакты</Link>
        </forclients>


        <technique className='mr-10 flex-column-start'>
          <Link href='*' className='mb-4 font-bold'>Техника</Link>
          <Link href='*'>Гусеничные краны</Link>
          <Link href='*'>Мобильные краны</Link>
          <Link href='*'>Низеорамные краны</Link>
          <Link href='*'>Модульные платформы</Link>
        </technique>


        <services className='flex-column-start'>
          <Link href='*' className='mb-4 font-bold'>Услуги</Link>
          <Link href='*'>Аренда гусеничного крана</Link>
          <Link href='*'>Аренда мобильного крана</Link>
          <Link href='*'>Аренда башенного крана</Link>
          <Link href='*'>Перевозка негабаритного груза </Link>
          <Link href='*'>Разработка ппрк</Link>
        </services>

      </menu>


      <social>
        <button className='mb-10 font-bold py-1.5 px-4 h-11 bg-white text-black hover:ease-in hover:duration-200 hover:bg-yellow-500'>
          Свяжитесь со мной
        </button>
        <div className='flex-row-between flex-center'>
          <Link href='*'><img className='h-8' src='assets/icons/inst.svg'/></Link>
          <Link href='*'><img className='h-8' src='assets/icons/twit.svg'/></Link>
          <Link href='*'><img className='h-8' src='assets/icons/whats.svg'/></Link>
          <Link href='*'><img className='h-8' src='assets/icons/vk.svg'/></Link>
          <Link href='*'><img className='w-8' src='assets/icons/yandex.svg'/></Link>
        </div>
      </social>


      <numbers className='flex-column-start'>
        <Link href='*' className='mb-4 font-bold'>Контакты</Link>
        <Link href='*'>+7 (499) 929-96-66</Link>
        <Link href='*'>+7 (985) 364-55-18</Link>
        <Link href='*'>+7 (985) 226-20-30</Link>
      </numbers>

    </footer>
  )
}

export default Footer