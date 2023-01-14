import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { Header } from '../Header/Header';
import { NomineeCard } from '../NomineeCard/NomineeCard';

const Ballot = () => {
  const [nominees, setNominees] = useState([])
  useEffect(() => {
    api.getBallotData()
    .then((data) => setNominees(data.items))
  }, [])
  return (
    <div className='ballot'>
      <div>
        <h1>Awards 2021</h1>
      </div>
        {nominees.map((item) => ( 
        <>
        <Header id={item.id} title={item.title} />
        {item.items.map((nominee) => (
          <NomineeCard title={nominee.title} img={nominee.photoUrL} key={nominee.id} />
        ))} 
        </> 
      ))
    }
    </div>
  )
}

export default Ballot;