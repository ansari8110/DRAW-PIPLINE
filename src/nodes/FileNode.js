import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';

export const FileNode = ({ id }) => {
  const handles = [{ type: 'source', position: Position.Right, id: 'file-out' }];
  return (
    <BaseNode id={id} label="File Upload" handles={handles}>
      <input type="file" style={{ fontSize: '10px' }} />
    </BaseNode>
  );
};
