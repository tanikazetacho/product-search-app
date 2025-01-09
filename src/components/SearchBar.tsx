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
    <form onSubmit={handleSearch} className="flex gap-4 mb-2.5">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={store}
        onChange={(e) => setStore(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="amazon">Amazon</option>
        <option value="ebay">Ebay</option>
        <option value="target">Target</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar