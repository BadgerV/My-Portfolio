import React from 'react'

import './services.css'

import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Ui / UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

          </ul>
        </article> 

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cntent Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem, ispum dolor sit amet consectuer elit.</p>
            </li>

          </ul>
        </article> 
      </div>
    </section>
  )
}

export default Services