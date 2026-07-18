
"use client";

import React from 'react'
import CategorySwiper from './CategorySwiper'
import Title from '../ui/Title';
import Container from '../layout/Container';

function Category() {
  return (
    <div className='py-8' id='category'>
      <Container>
        <Title value='سافت کالکشن' />
        <CategorySwiper />
      </Container>
    </div>

  )
}

export default Category
