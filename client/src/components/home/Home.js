import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector} from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
 padding: 10px;
 background: #F2F2F2;
`

const Home = () => {
  const { products } = useSelector( state=> state.getProducts)

   const dispatch = useDispatch();

  useEffect(()=> {
   dispatch(getProducts())

  },[dispatch])
  return (
    <>
      <NavBar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title='Deal of the Day' timer={true}/>
      <MidSection />
      <Slide products={products} title='Discounts for You' timer={false}/>
      <Slide products={products} title='suggesting Items' timer={false}/>
      <Slide products={products} title='Top Selection' timer={false}/>
      <Slide products={products} titel='Recommended Items' timer={false}/>
      <Slide products={products} title='Treding Offers' timer={false}/>
      <Slide products={products} title="Season's top picks" timer={false}/>
      <Slide products={products} title=" Top Deals on Accessories" timer={false}/>
      </Component>
    </>
  )
}

export default Home
