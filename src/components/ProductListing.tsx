import React from 'react'
import ProductCard from '@/components/ProductCard'

type Product = {
  id: string
  name: string
  image: {
    url: string
    label: string
  }
  price_range: {
    maximum_price: {
      regular_price: {
        value: number
        currency: string
      }
      final_price: {
        value: number
        currency: string
      }
      discount: {
        amount_off: number
        percent_off: number
      }
    }
  }
}

type ProductListingProps = {
  products: Product[]
}

const ProductListing = ({ products }: ProductListingProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          priceRegular={product.price_range.maximum_price.regular_price}
          priceFinal={product.price_range.maximum_price.final_price}
          discount={product.price_range.maximum_price.discount}
        />
      ))}
    </div>
  )
}

export default ProductListing