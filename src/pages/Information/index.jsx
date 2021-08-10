import React from 'react'
import './Information.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useList } from '@/context/ListContext'

export default function Information({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(errors)
  const {
    state: { cart },
    dispatch,
  } = useList()

  const onSubmit = data => {
    console.log(data)
    dispatch({
      type: '@buyer/add_buyer',
      payload: { data },
    })
    if (data) history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="name"
              {...register('firstName', { required: true, maxLength: 30 })}
              placeholder="Nombre"
              type="text"
            />
            {errors?.firstName?.type === 'required' && <p>This field is required</p>}
            <input
              {...register('lastName', { required: 'Error message' })}
              placeholder="Apellido"
              type="text"
            />
            {errors?.lastName?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('email', { required: 'Error message' })}
              placeholder="Correo Electronico"
              type="text"
            />
            {errors?.email?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('address', { required: 'Error message' })}
              placeholder="Dirección"
              type="text"
            />
            {errors?.address?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('apto', { required: 'Error message' })}
              placeholder="Apartamento"
              type="text"
            />
            {errors?.apto?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('city', { required: 'Error message' })}
              placeholder="Ciudad"
              type="text"
            />
            {errors?.city?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('country', { required: 'Error message' })}
              placeholder="Pais"
              type="text"
            />
            {errors?.country?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('state', { required: 'Error message' })}
              placeholder="Estado"
              type="text"
            />
            {errors?.state?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('cp', { required: 'Error message' })}
              placeholder="Codigo postal"
              type="text"
            />
            {errors?.cp?.type === 'required' && <p>This field is required</p>}

            <input
              {...register('phone', { required: 'Error message' })}
              placeholder="Teléfono"
              type="text"
            />
            {errors?.phone?.type === 'required' && <p>This field is required</p>}

            <div className="Information-buttons">
              <Link className="btn" to="/checkout" type="button">
                Regresar
              </Link>
              <button className="btn btn-submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart?.map(item => (
          <div key={item.id} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
