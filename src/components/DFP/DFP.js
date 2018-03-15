import React from 'react'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const DFP = () => {
  return (
    <DFPSlotsProvider dfpNetworkId={'35139216'} adUnit={"Actitudfem"}>
      <AdSlot sizes={[ [900, 90], [728, 90]]} />
      <AdSlot adUnit={"home/mobile"} sizes={[ [300, 250], [300, 600]]}/>
    </DFPSlotsProvider>
  )
}

export default DFP
