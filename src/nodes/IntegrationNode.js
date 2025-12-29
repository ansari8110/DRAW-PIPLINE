import { Position } from 'reactflow';
import { BaseNode } from './commonBaseNode';

export const IntegrationNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'trigger' },
    { type: 'source', position: Position.Right, id: 'data' }
  ];
  return (
    <BaseNode id={id} label="Slack Integration" handles={handles}>
      <div style={{ fontSize: '11px' }}>Send notification to channel</div>
    </BaseNode>
  );
};