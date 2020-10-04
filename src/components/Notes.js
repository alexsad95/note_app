import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({notes, onRemove}) => (
  <TransitionGroup component="ul" className="list-group notes">
    {notes.map(note => (
      <CSSTransition
        key={note.id}
        classNames={'note'}
        timeout={{
          enter: 300,
          exit: 200
        }}
      >
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small 
              title={new Date(note.date).toUTCString()}
            >
              {new Date(note.date).toLocaleDateString()}
            </small>
          </div>

          <button type="button" 
            className="btn btn-outline-danger ctrl-btn"
            onClick={() => onRemove(note.id)}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
          </svg>
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
