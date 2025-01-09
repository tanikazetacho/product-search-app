import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
  id: string
  name: string
  image: {
    url: string
    label: string
  }
  priceRegular: {
    value: number
    currency: string
  }
  priceFinal: {
    value: number
    currency: string
  }
  discount: {
    amount_off: number
    percent_off: number
  }
}

const formatToMXN = (amount: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

const ProductCard = ({
  id,
  name,
  image,
  priceFinal,
  priceRegular,
  discount
}: ProductCardProps) => {
  return (
    <div
      key={id}
      className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition"
    >
      <div className="relative w-52 h-64">
        <Image
          src={image.url}
          alt={image.label}
          fill
          className="object-contain"
          priority={true}
        />
      </div>
      <h2 className="text-lg font-medium mb-2 text-center">{name}</h2>
      <p className="text-sm text-gray-700 text-center">
        {`Precio sin descuento: ${formatToMXN(priceRegular.value)} ${priceRegular.currency}`}
      </p>
      <p className="text-lg text-red-400 text-center">
        {`Precio con descuento: ${formatToMXN(priceFinal.value)} ${priceFinal.currency}`}
      </p>
      {discount.percent_off > 0 && (
        <div className="top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full shadow">
          {`-${discount.percent_off}%`}
        </div>
      )}
    </div>
  )
}

export default ProductCard
