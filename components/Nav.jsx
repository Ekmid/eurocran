import React from 'react'

const Nav = () => {
  return (
    <section className="px-52 flex flex-center bg-gray-200 h-20">
      
      <links className="text-black font-bold basis-3/4">
        <a className='pr-8' href="https://">Каталог</a>
        <a className='pr-8' href="https://">Услуги</a>
        <a className='pr-8' href="https://">О компании</a>
        <a className='pr-8' href="https://">Объекты</a>
        <a className='pr-8' href="https://">Цены</a>
        <a className='pr-8' href="https://">Блог</a>
        <a className='pr-8' href="https://">Контакты</a>
      </links>

      <search className='basis-1/4'>
        <form className=''>
          <input className='h-8 w-72 border border-black' type="text" placeholder="Поиск..." name="search" />
          <button type="submit"></button>
        </form>
      </search>

    </section>
  )
}

export default Nav