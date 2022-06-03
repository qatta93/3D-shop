import React from 'react'

export const ItemCard = () => {
  return (
    <>
      <div className="hover:opacity-50">
        <a  href="/chairs">
          <div className="w-full rounded-md lg:h-80">
            <img className='' src="/images/chair.jpg" />
          </div>
          <div className="mt-4 px-6 py-12 bg-slate-200 flex ">
            <h3 className="text-xl text-gray-700 flex-1">CHAIRS</h3>
            <p className="text-xl text-gray-900"> from $95</p>
          </div>
        </a>
      </div>
      {/* <div className="hover:opacity-50">
        <a href="#">
          <div className="w-full min-h-80">
            <img src="/images/table.jpg" />
          </div>
          <div className="mt-4 px-6 flex justify-between bg-slate-200">
            <h3 className="text-sm text-gray-700">TABLES</h3>
            <p className="text-sm font-medium text-gray-900"> from $180</p>
          </div>
        </a>
      </div> */}
    </>
  )
}
