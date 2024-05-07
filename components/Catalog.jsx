import React from 'react'
import Tonnage from './UI components/Tonnage'

const Catalog = () => {
  return (
    <section className="catalog ">
        <h1 className="catalog-h1">Каталог техники</h1>

        <tonnage className="catalog-tonnage">
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
            <Tonnage/>
        </tonnage>

        <aside className='catalog-aside'>
            <span className="aside-span">Параметры</span>

            <type className='aside-type'>

                <span className="aside-type-span">Вид техники</span>

                <checkbox className='aside-checkbox'>
                    <input type="checkbox" id="mobileCranes"/>
                    <label for="mobileCranes">Мобильные краны</label>
                </checkbox>

                <checkbox  className='aside-checkbox'>
                    <input type="checkbox" id="crawlerCranes"/>
                    <label for="crawlerCranes">Гусеничные краны</label>
                </checkbox>

                <checkbox  className='aside-checkbox'>
                    <input type="checkbox" id="low-frameTrawls"/>
                    <label for="low-frameTrawls">Низкорамные тралы</label>
                </checkbox>

                <checkbox  className='aside-checkbox'>
                    <input type="checkbox" id="modularPlatforms"/>
                    <label for="modularPlatforms">Модульные платформы</label>
                </checkbox>

            </type>

            <filter></filter>

            <filter></filter>

            <filter></filter>

            <button></button>

            <button></button>

        </aside>

    </section>
  )
}

export default Catalog