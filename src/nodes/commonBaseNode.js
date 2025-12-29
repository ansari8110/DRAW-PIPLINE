// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store'; // Import the store

export const BaseNode = ({id , label, children, handles = [] }) => {
  const deleteNode = useStore((state) => state.deleteNode);
  return (
    <div className="Container_d">
      <div className="_label_title d-flex justify-content-between">
        {label}

         <i  onClick={() => deleteNode(id)} className={`delete_btn_style bi-trash`}></i>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        {children}
      </div>

      {handles.map((handle, index) => (
        <Handle
          key={handle.id}
          type={handle.type} // 'source' or 'target'
          position={handle.position || Position.Right}
          id={`${index}-value`}
          style={handle?.style || {}}
        />
      ))}
    </div>
  );
};