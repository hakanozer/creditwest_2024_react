import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { Product } from '../models/IProducts'

function ProductDetail() {

  const params = useParams()
  const [item, setItem] = useState<Product>()
  useEffect(() => {
    const id = params.id
    if (id) {
        getProductById(id).then(res => {
            setItem(res.data)
        })
    }
  }, [])  

  return (
    <>
        { item &&
            <>
                <h2>{item.title}</h2>
            </>
        }
    </>
  )
}

export default ProductDetail