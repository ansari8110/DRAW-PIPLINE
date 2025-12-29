// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] =  useState(data?.text || id.replace('customInput-', 'input_'));

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };
    const handles = [
      { type: 'source', position: Position.Right, id: `${id}-output` }
    ];

  return (
     <BaseNode id={id} label="Input" handles={handles}>
        <div className="container-fluid p-0">
          <div className="row mb-2 align-items-center">
              <div className="col-4">
                <label className="form-label mb-0 cfs-6">Name:</label>
              </div>
              <div className="col-8">
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  value={currText} 
                  onChange={handleTextChange}
                />
              </div>
          </div>
        </div>
     </BaseNode>
  );
}
