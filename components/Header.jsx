import React from 'react'

const Header = () => {
  return (
    <section className='flex px-52 py-2 font-sans bg-zinc-900'>

        <logo className='basis-1/4 flex-center'>
            <img className="w-36 mr-10" src='/assets/icons/logo.svg' alt="Еврокран" />
            <text className='flex flex-col'>
                <span className=' text-white'>
                    Аренда спецтехники
                </span>
                <span className=' text-white'>
                LIEBHERR c 2000 года
                </span>
            </text>
        </logo>

        <info className='basis-3/4 flex-center'>
            <timeadres className='pr-28  flex flex-justify-between flex-center'>
                <worktime className='p-6 flex flex-center'>
                    <img className='h-8 pr-3' src='/assets/icons/clock.svg' alt='Clock icon'/>
                    <span className=' text-white'>10:00-17:00</span>
                </worktime>

                <adres className='flex flex-center'>
                    <img className='h-8 pr-3' src='/assets/icons/marker.svg' alt='Marker icon'/>
                    <text className='flex flex-col'>
                        <span className=' text-white'>
                            г. Москва, 
                        </span>
                        <span className=' text-white'>
                            ул. Куликовская, 12
                        </span>
                    </text>
                </adres>
            </timeadres>

            <button className='font-bold py-1.5 px-4 h-11 border-2 border-yellow-500 hover:ease-in hover:duration-200 hover:bg-yellow-500'>
                Свяжитесь со мной
            </button>

            <phone className='pl-28 flex flex-row flex-center'>
                <img className='h-8 pr-3' src='/assets/icons/phone.svg' alt='Phone icon'/>
                <text className='flex flex-col'>
                    <span className=' text-white'>
                        +7 (499)929-96-66
                    </span>
                    <span className=' text-white'>
                        +7 (985)364-55-18
                    </span>
                    <span className=' text-white'>
                        +7 (985)226-20-30 
                    </span>
                </text>
            </phone>
        </info>
    </section>
  )
}

export default Header