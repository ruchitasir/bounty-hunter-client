import React from 'react';

const ShowBounty= props=> {

   let display = <h3>Catch those criminals</h3>
    if(props.currentBounty.name){
        display=(
            <div> 
                <h2>{props.currentBounty.name}: ${props.currentBounty.reward}</h2>
                <h3>Wanted For:  {props.currentBounty.wantedFor}</h3>
                <p>
                    Last seen on the  {props.currentBounty.ship}
                </p>
                <p>Hunters on the job:&nbsp;&nbsp;
                 {(props.currentBounty.hunters || []).join(', ') }</p>
                <p><strong>STATUS: </strong> {props.currentBounty.captured ? 'CAUGHT' : 'AT LARGE'}</p>
            </div>
        )
    }

   return(
        <div className = "show-bounty">
            {display}
        </div>
        )
 }

export default ShowBounty