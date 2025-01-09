import React, { useState } from 'react'

type SearchBarProps = {
  onSearch: (term: string, store: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState('')
  const [store, setStore] = useState('amazon')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(term, store)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row sm:gap-4 gap-2 mb-4 w-full"
    >
      <input
        type="text"
        placeholder="Buscar productos..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto"
      />
      <select
        value={store}
        onChange={(e) => setStore(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto"
      >
        <option value="amazon">Amazon</option>
        <option value="ebay">Ebay</option>
        <option value="target">Target</option>
      </select>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded w-full sm:w-auto"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
