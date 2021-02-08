import React from 'react'
import { List, Typography } from '@material-ui/core'
import TodoListItem from './TodoListItem'

import styles from '../css/List.module.css'

const TodoList = ({ todos, dispatch }) => {
  const handleDelete = (todoID) => {
    const action = {
      type: 'delete',
      payload: todoID,
    }
    dispatch(action)
  }

  const handleToggle = (todoID) => {
    const action = {
      type: 'toggle',
      payload: todoID,
    }
    dispatch(action)
  }

  return (
    <>
      <Typography variant='h5' className={styles.addTitle}>
        Listado de TODOS
      </Typography>
      <List className={styles.listContainer}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </List>
    </>
  )
}

export default TodoList
