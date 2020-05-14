import React,{useState} from 'react';


const API_URL = 'https://react-bounty-api.herokuapp.com/v1/bounties/'

//const API_URL='https://bounty-api-brandi.herokuapp.com/v1/bounties/'

const BountyForm= props=> {

    let [name, setName] = useState('')
    let [wantedFor, setWantedFor] = useState('')
    let [client, setClient] = useState('')
    let [hunters, setHunters] = useState('')
    let [reward, setReward] = useState(10000)
    let [ship, setShip] = useState('')

    const submit = e=>{
        e.preventDefault()
        console.log('submit', name, client, ship, hunters, reward, wantedFor)
        fetch(API_URL,{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                client,
                hunters: hunters.split(',').map(h=>h.trim()),
                reward,
                ship,
                wantedFor
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(response=> {
            // refresh the bounties
            props.refresh()
            //clear the state variables
            setName('')
            setWantedFor('')
            setClient('')
            setReward(10000)
            setShip('')
            setHunters('')

        })
    }

    return(
          <div className="bounty-form">
              <h3>Add New Bounty</h3>
              <form onSubmit={submit}>
                  <div>
                      <label>Name: </label>
                      <input name="name" value={name} onChange={e=> setName(e.target.value)} required/>
                  </div>
                  <div>
                      <label>Wanted For: </label>
                      <input name="wantedFor" value={wantedFor} onChange={e=> setWantedFor(e.target.value)}/>
                  </div>
                  <div>
                      <label>Client: </label>
                      <input name="client" value={client} onChange={e=> setClient(e.target.value)}/>
                  </div>
                  <div>
                      <label>Ship: </label>
                      <input name="ship" value={ship} onChange={e=> setShip(e.target.value)}/>
                  </div>
                  <div>
                      <label>Reward: </label>
                      <input name="reward" type="number" value={reward} onChange={e=> setReward(e.target.value)}/>
                  </div>
                  <div>
                      <label>Hunters (Comma-Separated List) </label>
                      <input name="hunters"  value={hunters} onChange={e=> setHunters(e.target.value)}/>
                  </div>
                  <input type="submit" value="Make it a Bounty!" />
              </form>
          </div>
          )
    }

export default BountyForm