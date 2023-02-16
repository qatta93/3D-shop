import React from 'react'
import furnitureTypes from "../../../public/api/productsTypes.json"
import { FurnitureTypesProps } from '../types'
import FurnitureTypesCard from './furnitureTypesCard'

export const FurnitureTypes = () => {
  return (
    <>
      {furnitureTypes.map((furniture:FurnitureTypesProps) => (
        <FurnitureTypesCard key={furniture.id} furniture={furniture}/>
      ))}
    </>
  )
}

export default FurnitureTypes;