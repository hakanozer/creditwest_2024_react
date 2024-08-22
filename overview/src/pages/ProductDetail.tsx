import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { Product } from '../models/IProducts'

function ProductDetail() {

  const [bigImage, setBigImage] = useState('')
  const params = useParams()
  const [item, setItem] = useState<Product>()
  const [isLoad, setIsLoad] = useState(true)
  useEffect(() => {
    const id = params.id
    if (id) {
        getProductById(id).then(res => {
            setItem(res.data)
            setBigImage(res.data.images[0])
        }).finally(() =>  {
            setIsLoad(false)
        })
    }
  }, [])  

  return (
    <>
        { isLoad && 
        <div className='text-center mt-3'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        }
        { item &&
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>{item.title}</h2>
                    <h3>{item.price}₺</h3>
                    <p>{item.description}</p>
                    <i style={{fontSize: 40}} className="bi bi-suit-heart"></i>
                </div>
                <div className='col-sm-6'>
                    <img src={bigImage} className='img-fluid' style={{maxHeight: 350}} />
                    <hr/>
                    {item.images.map((url, index) =>
                        <img role='button' onClick={() => setBigImage(url)} key={index} src={url} className='img-thumbnail' style={{width: 120}} />
                    )}
                </div>
            </div>
        }
    </>
  )
}

export default ProductDetail