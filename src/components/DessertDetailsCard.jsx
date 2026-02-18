
const OrderRow = ({orderSize, counter, onDecrease, onIncrease, onAdd}) => {
  return (
    <div className='flex flex-row justify-between items-center mt-4'>
      <div className='bg-light-honey hover:bg-honey w-fit text-2xl text-gray-800 font-semibold px-3 border-3 border-honey rounded-full shadow' >
        <button
          className='mr-2 text-2xl cursor-pointer' 
          onClick={onDecrease}>-</button>
        {counter} 
        <button 
          className='ml-1 text-2xl cursor-pointer'
          onClick={onIncrease}>+</button>
      </div>
      <p>{orderSize}</p>
      <button
        onClick={onAdd} 
        className="bg-light-honey hover:bg-honey text-gray-800 font-semibold py-1 px-3 border-3 border-honey rounded-full shadow cursor-pointer">Add to Cart</button>
    </div>
  )
}

const DessertDetailsCard = ({dessertImage, name, rows=[]}) => {
  return (
    <div className='w-sm text-left '>
      <img src={dessertImage} className="border-3 border-honey shadow-2xs rounded-xl"/>
      <p className='text-3xl font-semibold my-2 text-amber'>{name}</p>
      {rows.map((row) =>
      <OrderRow key={row.orderSize} {...row} />
      )}
      
    </div>
  )
}

export default DessertDetailsCard