import Lights from '../src/components/Lights';
import Model from '../src/components/Model';
import { NextPage } from 'next'
import React from 'react'
import { Canvas } from '@react-three/fiber';

const Chairs: NextPage = () => {
  return (
    <>
    <div>Chairs</div>
    <Canvas camera={{ position: [0, 0, 300]}} > 
      <Lights />
      <Model />
    </Canvas>
    </>
  )
}

export default Chairs;
