import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const ToDoList = () => {

  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    (num === 0) ? alert('Unreachable') : setNum(num - 1);
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1> {num} </h1>
          <div className='btn_div'>
            <Tooltip title="Add">
              <Button onClick={incNum} className='btn_green'>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decNum} className='btn_red'>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
