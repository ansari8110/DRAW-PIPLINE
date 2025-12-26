// draggableNode.js

export const DraggableNode = ({ type, label , icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`_btn_cls ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')} 
        draggable
      >
        {/* <i className={`bi text-white ${icon}`} style={{ fontSize: '1.5rem' }}></i> */}
        <span className="text-white">{label}</span>
      </div>
    );
  };
  