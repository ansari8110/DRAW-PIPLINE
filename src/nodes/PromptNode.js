import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';
import { useStore } from '../store';

export const PromptNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const handles = [
    { type: 'target', position: Position.Left, id: 'context' },
    { type: 'source', position: Position.Right, id: 'prompt' }
  ];

  return (
    <BaseNode id={id} label="System Prompt" handles={handles}>
      <select 
        onChange={(e) => updateNodeField(id, 'role', e.target.value)}
        style={{ width: '100%', fontSize: '11px' }}
      >
        <option value="assistant">Assistant</option>
        <option value="user">User</option>
        <option value="system">System</option>
      </select>
    </BaseNode>
  );
};