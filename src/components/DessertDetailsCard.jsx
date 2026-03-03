import { useState } from "react"

const OrderRow = ({orderSize, orderCost, selected, onSelect, counter, onDecrease, onIncrease, onAdd}) => {
  return (
    <div
      onClick={onSelect} 
      className={`flex flex-col text-center border-2  rounded-sm py-1 w-1/3 cursor-pointer
        ${
          selected
            ? "bg-frozen-water border-frozen-water"
            : "border-frozen-water hover:bg-light-frozen active:bg-frozen-water"
        }`}>
      <p className="font-semibold">{orderSize}</p>
      <p>${orderCost}</p>
    </div>
    // <div className='flex flex-row justify-between items-center mt-2 lg:mt-4'>
    //   <div className='text-lg lg:text-2xl bg-light-honey hover:bg-honey w-fit text-2xl text-gray-800 font-semibold px-3 border-3 border-honey rounded-full shadow' >
    //     <button
    //       className='mr-2 text-2xl cursor-pointer' 
    //       onClick={onDecrease}>-</button>
    //     {counter} 
    //     <button 
    //       className='ml-1 lg:ml-2 text-2xl cursor-pointer'
    //       onClick={onIncrease}>+</button>
    //   </div>
    //   <p>{orderSize}</p>
    //   <button
    //     onClick={onAdd} 
    //     className="text-xs lg:text-xl bg-light-honey hover:bg-honey text-gray-800 font-semibold py-2 lg:py-1 px-3 border-3 border-honey rounded-full shadow cursor-pointer">Add to Cart</button>
    // </div>
  )
}

const DessertDetailsCard = ({dessertImage, name, description, onAdd, rows=[]}) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const selectedRow = rows.find((r) => r.orderSize === selectedSize)

  return (
    <div className='w-full lg:w-sm text-left'>
      <img src={dessertImage} className="lg:w-full border-3 border-honey shadow-2xs rounded-xl"/>
      <p className='text-xl lg:text-3xl font-semibold my-2 text-amber'>{name}</p>
      <p className="font-medium mb-10">{description}</p>
      <div className="flex gap-1 justify-between">
        {rows.map((row) => (
          <OrderRow 
            key={row.orderSize} 
            {...row}
            selected={selectedSize === row.orderSize}
            onSelect={() => setSelectedSize(row.orderSize)} />
        ))}
      </div>
      
      <button
        disabled={!selectedRow}
        onClick={() => {
          onAdd(selectedRow)
          setSelectedSize(null)
        }}
        className="text-xs lg:text-xl bg-light-honey hover:bg-honey text-gray-800 font-semibold w-full py-2 mt-2 border-3 border-honey rounded-lg shadow cursor-pointer">
          Add to Cart
      </button>
    </div>
  )
}

export default DessertDetailsCard