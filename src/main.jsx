import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header'

import Categories from './Components/Categories'
import Banner from './Components/Banner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
    <Categories cat_name='Celebration wear for Men' cat_desc='Beautiful collection of Denims, Jackets, Salwar suits for engagement, wedding and other ethnic occasions'/>
    <Categories cat_name='Celebration wear for Women' cat_desc='Beautiful collection of Lehenga cholis, Sarees, Salwar suits for engagement, wedding and other ethnic occasions'/>
    <Categories cat_name='Trending Products' cat_desc='Trending collection of cloths and jewels for casual occasions'/>

  </StrictMode>,
)
