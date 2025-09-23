import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllorders = async (params) => {

    if (!token) {
      return null;
    }
    try {
      const responce = await axios.post(backendUrl + '/api/orders/list', {}, { headers: { token } })
      if (responce.data.success) {
        setOrders(responce.data.Orders)
      } else {
        toast.error(responce.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }
  useEffect(() => {
    fetchAllorders();
  }, [token])


  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((Order, index) => {
            <div key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length-1) {
                    return <p key={index}>{item.name}x {item.qusntity} <span> {item.size}</span></p>
                  }
                  else {

                  }
                })}
              </div>

            </div>

          })
        }
      </div>

    </div>
  )
}

export default Orders
