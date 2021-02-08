import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import useForm from '../../hooks/useForm'

import styles from '../css/Form.module.css'

const TodoForm = ({ dispatch }) => {
  const [{ description }, handleInputChanges, reset] = useForm({
    description: '',
  })

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo,
    }
    dispatch(action)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    handleAddTodo(newTodo)
    reset()
  }
  return (
    <>
      <Typography variant='h5' className={styles.addTitle}>
        Agregar TODO
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid container direction='column' className={styles.formContainer}>
          <input
            type='text'
            name='description'
            placeholder='add a new todo...'
            autoComplete='off'
            value={description}
            onChange={handleInputChanges}
            className={styles.input}
          />
          <Button type='submit'>Agregar</Button>
        </Grid>
      </form>
    </>
  )
}

export default TodoForm
