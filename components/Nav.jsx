import React from 'react'

const Nav = () => {
  return (
    <section className="xl:px-20 2xl:px-52 flex flex-center bg-gray-100 h-20">
      
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
          <input className='h-8 w-72 border border-stone-500 pl-2 text-black' type="text" placeholder="Поиск..." name="search" />
          <button type="submit relative"><img className='absolute 2xl:right-80 xl:right-24 top-120' src='assets/icons/search.svg'/></button>
        </form>
      </search>

    </section>
  )
}

export default Nav