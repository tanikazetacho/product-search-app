import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '@/graphql/queries/getProducts'
import { useEffect, useState } from 'react'

interface UseProductQueryParams {
  search: string
  store: string
  currentPage: number
  pageSize: number
  skip?: boolean
}

const useProductQuery = (
  {
    search,
    store,
    currentPage,
    pageSize,
    skip
  }: UseProductQueryParams) => {
  const [variables, setVariables] = useState({
    search,
    store,
    currentPage,
    pageSize
  })

  useEffect(() => {
    if (!skip) {
      setVariables({
        search,
        store,
        currentPage,
        pageSize
      })
    }
  }, [search, store, currentPage, pageSize, skip])

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables,
    skip,
    fetchPolicy: 'network-only'
  })

  const products = data?.products.items || []
  const current = data?.products.pagination?.current || 1
  const next = data?.products.pagination?.next || null
  const prev = data?.products.pagination?.prev || null

  return {
    products,
    current,
    next,
    prev,
    loading,
    error
  }
}

export default useProductQuery