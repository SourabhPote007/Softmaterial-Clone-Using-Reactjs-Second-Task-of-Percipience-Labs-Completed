import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
// import { usAea } from '@react-jvectormap/UnitedStates';

import React from 'react'

function UsaMap() {
    const countries ={
        AL: 50,
        AK: 30,
        AZ: 80,
        AR: 10,
        CA: 70,
        CO: 40,
        CT: 60,
        DE: 20,
        FL: 90,
        GA: 30,
        HI: 40,
        ID: 70,
        IL: 80,
        IN: 10,
        IA: 50,
        KS: 30,
        KY: 60,
        LA: 20,
        ME: 70,
        MD: 40,
        MA: 80,
        MI: 90,
        MN: 10,
        MS: 50,
        MO: 30,
        MT: 60,
        NE: 20,
        NV: 40,
        NH: 70,
        NJ: 80,
        NM: 10,
        NY: 50,
        NC: 30,
        ND: 60,
        OH: 20,
        OK: 70,
        OR: 40,
        PA: 80,
        RI: 90,
        SC: 10,
        SD: 50,
        TN: 30,
        TX: 60,
        UT: 20,
        VT: 70,
        VA: 40,
        WA: 80,
        WV: 10,
        WI: 50,
        WY: 30,
    };
    const colorScale = ["#1e88e5","#5E32CA"];
  return (

      <VectorMap map={worldMill} 
        // containerStyle={{width:"1000px",height:"1000px"}}
        // backgroundColor="#f2f2f2"
        series={{
            regions:[
                {
                    values:countries,
                    scale: colorScale,
                    min:0,
                    max:100,
                    initial: {
                        fill: '#3366cc', // Set the color of the regions
                    },
                },
                
            ]
        }}
        onRegionTipShow={function reginalTrip(event, label, code){
            return label.html(`
            <div style{{backgroundColor:"#4f5467",borderRadius:"6px",color:"white",width:"145px",padding:"0px 10px"}}>
            <p>
            <b>
            ${label.html()}
            </b>
            </p>
            <p>
            ${countries[code]}
            </p>
            </div>
            `)
        }}
        />
  )
}

export default UsaMap;