import React from 'react'

export const ItemCard = (item) => {
  return (
    <>
      <div className="hover:opacity-50">
        <a  href="/chairs">
          <div className="w-full rounded-md lg:h-80">
            <img className='' src={item.item.img} />
          </div>
          <div className="mt-4 px-6 py-12 bg-slate-200 flex ">
            <h3 className="text-xl text-gray-700 flex-1">{item.item.name}</h3>
            <p className="text-xl text-gray-900">{item.item.price}</p>
          </div>
        </a>
      </div>
    </>
  )
}
