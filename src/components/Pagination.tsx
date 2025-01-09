import React from 'react'

type PaginationProps = {
  currentPage: number
  hasNext: boolean
  hasPrev: boolean
  onNext: () => void
  onPrev: () => void
}

const Pagination = (
  {
    currentPage,
    hasNext,
    hasPrev,
    onNext,
    onPrev
  }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span>Página {currentPage}</span>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination