"use client"

import { useState } from "react"
import useUrlState from "@/hooks/useUrlState"
import useProductQuery from "@/hooks/useProductQuery"
import SearchBar from "@/components/SearchBar"
import ProductListing from "@/components/ProductListing"
import Pagination from "@/components/Pagination"
import ErrorMessage from "@/components/ErrorMessage"
import Image from "next/image"

const HomePageContent = () => {
  const { search, setSearch, store, setStore, currentPage, setCurrentPage } = useUrlState()
  // this param is not used beacuse all the products are fetched at set 16 per
  const pageSize = 6

  const { products, current, next, prev, loading, error } = useProductQuery({
    search,
    store,
    currentPage,
    pageSize
  })

  const [hasSearched, setHasSearched] = useState(!!search && !!store)

  const handleSearch = (term: string, selectedStore: string) => {
    setSearch(term)
    setStore(selectedStore)
    setCurrentPage(1)
    setHasSearched(true)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />

      {!hasSearched && (
        <div className="relative flex justify-center items-center h-screen">
          <div className="absolute top-0 left-0 w-full h-[69%] -z-10">
            <Image
              src="https://chupapreciosimg.s3.us-east-2.amazonaws.com/bannersMesa-de-trabajo-3_1.png"
              alt="Banner inicial"
              fill
              priority={true}
              className="px-7 object-contain"
            />
          </div>
        </div>
      )}

      {hasSearched && loading && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      )}

      {hasSearched && error && <ErrorMessage message={error.message} />}

      {hasSearched && !loading && products.length === 0 && (
        <ErrorMessage message={"No se encontraron productos para tu búsqueda."} />
      )}

      {hasSearched && !loading && products.length > 0 && (
        <>
          <ProductListing products={products} />
          <Pagination
            currentPage={current}
            hasNext={!!next}
            hasPrev={!!prev}
            onNext={() => handlePageChange(current + 1)}
            onPrev={() => handlePageChange(current - 1)}
          />
        </>
      )}
    </div>
  )
}

export default HomePageContent;