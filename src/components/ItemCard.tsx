import React from 'react'

export const ItemCard = (item) => {
  return (
    <>
      <div className="hover:opacity-50 mb-12 border-1  border-indigo-600 shadow-xl">
        <a  href="/chairs">
          <div className="w-full rounded-md lg:h-80">
            <img className='' src={item.item.img}/>
          </div>
          <div className="px-6 py-6 bg-slate-200 flex ">
            <h3 className="text-xl text-gray-700 flex-1 font-semibold uppercase">{item.item.name}</h3>
            <p className="text-xl text-gray-900">from  {item.item.price}</p>
          </div>
        </a>
      </div>
    </>
  )
}
