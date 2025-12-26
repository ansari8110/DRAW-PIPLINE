// inputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';
import { useStore } from '../store';
import { useCallback } from "react";
import debounce from "lodash.debounce";


export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(data?.input || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };


  const debouncedUpdate = useCallback(
    debounce((id, value) => {
      updateNodeField(id, "inputName", value);
    }, 1000),
    []
  );

   const handleNameChange = (e) => {
    setCurrName(e.target.value);
    debouncedUpdate(id, e.target.value);
    // updateNodeField(id, 'inputName', e.target.value)
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
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
                value={currName} 
                onChange={handleNameChange}
              />
            </div>
        </div>

          <div className="row align-items-center">
            <div className="col-4">
              <label className="form-label mb-0 cfs-6">Type</label>
            </div>
            <div className="col-8">
              <select 
                className="form-select form-select-sm" 
                value={inputType} 
                onChange={handleTypeChange}
              >
                <option value="Text">Text</option>
                <option value="File">File</option>
              </select>
            </div>
        </div>

      </div>
    </BaseNode>
  );
};