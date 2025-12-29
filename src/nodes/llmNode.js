// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';

export const LLMNode = ({ id, data }) => {
 const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style:{top: `${100/3}%`}},
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style:{top: `${200/3}%`}},
    { type: 'source', position: Position.Right, id: `${id}-response`}
  ];

  return (
    <BaseNode id={id} label="LLM" handles={handles}>
        <div className="container-fluid p-0">
          <div className="row mb-2 align-items-center">
              <div className="col-auto">
                <label className="form-label mb-0 cfs-6">This is a LLM.</label>
              </div>
          </div>
        </div>
    </BaseNode>
  );
}
