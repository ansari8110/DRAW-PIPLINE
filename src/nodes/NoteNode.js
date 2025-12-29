import { BaseNode } from './commonBaseNode';

export const NoteNode = ({ id, data }) => (
  <BaseNode id={id} label="Note" handles={[]}>
    <textarea 
      placeholder="Write a note..."
      className="form-control form-control-sm cfs-6" 
    />
  </BaseNode>
);