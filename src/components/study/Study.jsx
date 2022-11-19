import ButtonSecundary from '../buttons/ButtonSecundary';
import BlockTitle from '../BlockTitle'
import ItemBlock from '../ItemBlock';
import React from 'react';
import './Study.scss'

export default props =>{
  return (
    <section className='py-5'>
      <div className='py-lg-5 container mainEffect mainEffect mainEffect--secondary'>
        <BlockTitle title="ESTUDOS" align="center" color="#ffffff"/>
        <div className='gap-3 d-flex justify-content-center BlockList mt-3 row'>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
          <ItemBlock name="Calculadora"></ItemBlock>
        </div>
        <div className="mt-4">
          <ButtonSecundary alignAll="center" titleButton="Ver Mais"></ButtonSecundary>
        </div>
      </div>
    </section>
  )
}