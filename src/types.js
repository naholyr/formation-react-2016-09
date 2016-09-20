import { PropTypes as T } from 'react';

export const TodoItem = T.shape({
  id: T.string.isRequired,
  text: T.string.isRequired,
  done: T.bool
});
