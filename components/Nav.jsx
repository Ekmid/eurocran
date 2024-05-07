import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="xl:px-20 2xl:px-52 flex flex-center bg-gray-100 h-20">
      
      <links className="text-black font-bold basis-3/4">
        <Link className='pr-8' href="/catalog">Каталог</Link>
        <Link className='pr-8' href="/service">Услуги</Link>
        <Link className='pr-8' href="/about">О компании</Link>
        <Link className='pr-8' href="/objects">Объекты</Link>
        <Link className='pr-8' href="/price">Цены</Link>
        <Link className='pr-8' href="/blog">Блог</Link>
        <Link className='pr-8' href="/contacts">Контакты</Link>
      </links>

      <form className='basis-1/4'>
        <input className='h-8 w-72 border border-stone-500 pl-2 text-black' type="text" placeholder="Поиск..." name="search" />
        <button type="submit relative"><img className='absolute 2xl:right-80 xl:right-24 top-120' src='assets/icons/search.svg'/></button>
      </form>

    </nav>
  )
}

export default Nav