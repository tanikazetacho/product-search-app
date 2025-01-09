import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts(
    $currentPage: Int
    $pageSize: Int
    $search: String
    $store: String
  ) {
    products(
      currentPage: $currentPage
      pageSize: $pageSize
      search: $search
      store: $store
    ) {
      items {
        id
        name
        image {
          url
          label
        }
        price_range {
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
                amount_off
                percent_off
            }
          }
        }
      }
      pagination {
        current
        total_pages
        next
        prev
      }
    }
  }
`
