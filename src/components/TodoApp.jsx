import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../hooks/todoReducer'
import { Box, Divider, Grid } from '@material-ui/core'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

import styles from './css/App.module.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Box>
      <Grid className={styles.title}>ToDo App</Grid>
      <Grid className={styles.subtitle}>
        A simple and powerfull Todo App on React!
      </Grid>
      <Grid className={styles.dividerContainer}>
        <Divider />
      </Grid>

      <Grid container direction='row' spacing={5}>
        <Grid item xs>
          <TodoForm dispatch={dispatch} />
        </Grid>
        <Grid className={styles.verticalDivider}>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item xs>
          <TodoList dispatch={dispatch} todos={todos} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TodoApp
