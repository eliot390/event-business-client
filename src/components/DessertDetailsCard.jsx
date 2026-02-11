
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

const DessertDetailsCard = ({dessertImage, name, description, rows=[]}) => {
  return (
    <div className='w-sm text-left'>
      <img src={dessertImage}/>
      <p className='text-3xl font-semibold mb-2 text-gold'>{name}</p>
      <p className='italic mt-2 mb-2'>{description}</p>
      {rows.map((row, idx) =>
      <OrderRow key={idx} {...row} />
      )}
      
    </div>
  )
}

export default DessertDetailsCard