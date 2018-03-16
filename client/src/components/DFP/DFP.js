import React from 'react'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

const DFP = () => {
  return (
    <DFPSlotsProvider dfpNetworkId={'35139216'} adUnit={"Actitudfem"}>
      <AdSlot sizes={[ [900, 90], [728, 90]]} />
    </DFPSlotsProvider>
  )
}

export default DFP
