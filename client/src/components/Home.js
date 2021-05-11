import React from 'react'
import card from '../images/creditCard.jpg'
import bank from '../images/bank.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <h1>Sparks Foundation Bank</h1>
      <p>
        The TSF bank Corporation is an Indian multinational investment bank and
        financial services holding company headquartered in Bangaluru.
         TSF bank
        was formed through NationsBank's acquisition in 1999.
        The bank TSF Bank is the first in India to launch Aadhaar-linked cashless merchant solution.
      </p>
      <div className='images'>
        <img src={card} alt='' />
        <img src={bank} alt='' />
      </div>
      <p>
        The second aspect to note is that the deposits are AAA rated by CRISIL, 
        which is the highest level of safety. This is for the bank's fixed deposit programme.
         So, based on the above parameters, we can fairly conclude that the savings bank account
          of IDFC First is rather safe at the moment.
          If one was to pick a few amongst these for a list of best, safe banks in India (2021) then its best to pick with larger ones like State Bank of India (SBI),The Sparks Foundation Bnak (TSF) etc
          The bank serves corporate and private customers in India including the infrastructure sector that TSF specialized in from its founding in 1997. The bank also aims to provide services to people in rural areas and to the self-employed.
     
      </p>
    </div>
  )
}
export default Home
