// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];
  return (
      <BaseNode id={id} label="Output" handles={handles}>
        <div className="container-fluid p-0">
          <div className="row mb-2 align-items-center">
            <div className="col-4">
              <label className="form-label mb-0 cfs-6">Name:</label>
            </div>
            <div className="col-8">
              <input 
                type="text" 
                className="form-control form-control-sm" 
                value={currName} 
                onChange={handleNameChange}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-label mb-0 cfs-6">Type:</label>
            </div>
            <div className="col-8">
              <select 
                className="form-select form-select-sm" 
                value={outputType} 
                onChange={handleTypeChange}
              >
                <option value="Text">Text</option>
                <option value="File">Image</option>
              </select>
            </div>
          </div>
        </div>
      </BaseNode>
  );
}
