import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const TaskListPage = () => {
  return (
    <div>
      <Button variant="contained" sx={{ marginRight: 5 }}>
        <Link to="/createtask">Create</Link>
      </Button>

      <Button variant="contained">
        <Link to="/task/123">Test Task</Link>
      </Button>
    </div>
  );
};
