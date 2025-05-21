import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import Spinner from '../../../components/Spinner';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [], refetch, isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: () =>
      fetch(`https://recycle-cloth-server.vercel.app/booking?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://recycle-cloth-server.vercel.app/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          toast.success('Order deleted successfully');
          refetch();
        }
      })
      .catch(() => toast.error('Failed to delete the order.'));
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="text-4xl py-3 text-start">My Orders</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={order?.image} alt={order?.product_name || 'Product'} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{order?.product_name}</td>
                  <td>{order?.price || 'N/A'}</td>
                  <td>
                    {order?.price && !order?.paid ? (
                      <Link to={`/dashboard/payment/${order?.product_id}`}>
                        <button className="btn btn-outline btn-sm text-error border-primary">Pay</button>
                      </Link>
                    ) : (
                      <span className="text-green-600 font-semibold">Paid</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order?._id)}
                      className="btn btn-outline btn-sm text-error border-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-xl py-6">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
