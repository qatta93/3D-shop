import React from 'react'

export const ItemCard = () => {
  return (
    <>
      <div className="group mb-8">
        <a href="/chairs">
          <div className="w-full min-h-80 rounded-md group-hover:opacity-50 lg:h-80 lg:aspect-none">
            <img src="/images/chair.jpg" />
          </div>
          <div className="mt-4 px-6 flex justify-between bg-slate-200">
            <h3 className="text-sm text-gray-700">CHAIRS</h3>
            <p className="text-sm font-medium text-gray-900"> from $95</p>
          </div>
        </a>
      </div>
      <div className="h-5"></div>
      <div className="">
        <a href="#">
          <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src="/images/table.jpg" />
          </div>
          <div className="mt-4 px-6 flex justify-between bg-slate-200">
            <h3 className="text-sm text-gray-700">TABLES</h3>
            <p className="text-sm font-medium text-gray-900"> from $180</p>
          </div>
        </a>
      </div>
      <div className="h-5"></div>
    </>
  )
}
