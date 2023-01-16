import React, { useEffect, useState } from 'react';
import api from '../../Api/Api';
import "./Ballot.css"
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
        {nominees.map((item, i) => ( 
          <>
          <Header title={item.title} key={item.id} />
          <div className='nominee-cards-container'>
          {item.items.map((nominee) => (
            <NomineeCard id={item.id} title={nominee.title} img={nominee.photoUrL} key={nominee.id}  />
          ))}
          {!nominees[i + 1] ? 
            <div className='submit-ballot-btn'>
              <button>Submit Ballot</button>
            </div>
          :
          null
          }
          </div> 
          </> 
          ))
        }
      
    </div>
  )
}

export default Ballot;