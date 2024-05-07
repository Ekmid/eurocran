import React from 'react'

const Card = () => {
  return (
    <card className='card bg-white text-black flex-column-center'>
        <img className='' src="assets/images/cracen2.png" alt='Картинка'></img>

        <h6 className='card-title flex-center'>
          Гусеничный кран <br/> 
          Liebherr LR 1750
        </h6>

        <ul className='card-all-char'>
          <li className='card-li'>Грузоподъёмность: 40 тонн</li>
          <li className='card-li'>Длина стрелы: 35 м</li>

          <li className='card-li'>
            <button className='flex-row-center card-btn-all-char'>
              Все характеристики

              <img className='card-btn-img-all-char' src='assets/icons/Arrow 1.svg'></img>
            </button>
          </li>

        </ul>
        
        <button className='card-btn-rent'>
          Арендовать
        </button>
    </card>
  )
}

export default Card