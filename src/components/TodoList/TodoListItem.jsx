import React from 'react'
import { Grid, IconButton, ListItemText, Typography } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'

import styles from '../css/List.module.css'

const TodoListItem = ({ todo, handleDelete, handleToggle }) => {
  return (
    <Grid key={todo.id}>
      <ListItemText>
        <Grid container direction='row'>
          <Grid item xs>
            <Typography
              variant='h5'
              className={
                todo.done === false ? styles.description : styles.completed
              }
              onClick={() => handleToggle(todo.id)}
            >
              {todo.desc}
            </Typography>
          </Grid>
          <Grid item xs>
            <IconButton onClick={() => handleDelete(todo.id)}>
              <DeleteTwoToneIcon className={styles.deleteIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </ListItemText>
    </Grid>
  )
}

export default TodoListItem
