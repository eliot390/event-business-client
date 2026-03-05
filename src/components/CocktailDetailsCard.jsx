import { useState } from "react"

const OrderRow = ({orderSize, orderCost, selected, onSelect}) => {
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
  )
}

const CocktailDetailsCard = ({cocktailImage, name, ingredients, description, onAdd, rows=[]}) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const selectedRow = rows.find((r) => r.orderSize === selectedSize)
  
  return (
    <div className='w-full lg:w-sm text-left'>
      {/* <img src={cocktailImage}/> */}
      <p className='text-3xl font-semibold mb-2 text-honey'>{name}</p>
      <p>{ingredients}</p>
      <p className='text-center italic my-2'>{description}</p>
      <p className="mb-1">Sizes:</p>
      <div className="flex gap-1">
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
          setSelectedSize(null)}}
        className="text-xs lg:text-xl bg-light-honey hover:bg-honey text-gray-800 font-semibold w-full py-2 mt-2 border-3 border-honey rounded-lg shadow cursor-pointer">
          Add to Cart
      </button>
    </div>
  )
}

export default CocktailDetailsCard