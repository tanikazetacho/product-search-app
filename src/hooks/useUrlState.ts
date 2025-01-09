import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

interface UseUrlStateReturn {
  search: string
  setSearch: (value: string) => void
  store: string
  setStore: (value: string) => void
  currentPage: number
  setCurrentPage: (value: number) => void
}

const useUrlState = (): UseUrlStateReturn => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialSearch = searchParams.get('search') || ''
  const initialStore = searchParams.get('store') || ''
  const initialPage = parseInt(searchParams.get('page') || '1', 10)

  const [search, setSearch] = useState(initialSearch)
  const [store, setStore] = useState(initialStore)
  const [currentPage, setCurrentPage] = useState(initialPage)

  useEffect(() => {
    const query = new URLSearchParams()

    if (search) query.set('search', search)
    if (store) query.set('store', store)
    if (currentPage > 1) query.set('page', currentPage.toString())

    const newUrl = `/?${query.toString()}`

    if (newUrl !== window.location.search) {
      router.push(newUrl)
    }
  }, [search, store, currentPage, router])

  return { search, setSearch, store, setStore, currentPage, setCurrentPage }
}

export default useUrlState