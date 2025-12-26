// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const handles = [
        { id:1 , type: 'customInput', label: 'Input', icon: 'bi-box-arrow-in-right' },
        { id:2 , type: 'llm', label: 'LLM', icon: 'bi-cpu' },
        { id:3 , type: 'customOutput', label: 'Output', icon: 'bi-box-arrow-right' },
        { id:4 , type: 'text', label: 'Text', icon: 'bi-chat-left-text' },
        { id:5 , type: 'note' , label: 'Note' , },
        { id:6 , type: 'file' , label: 'File' , },
        { id:7 , type: 'integration' , label: 'Slack' , },
        { id:8 , type: 'condition' , label: 'Logic' , },
        { id:9 , type: 'prompt' , label: 'Prompt' , },
    ];

    return (
        <>
        <div className="lable_btn_cls">
            { handles.map((e) => (
                <div className="p-2" key={e.id}> 
                    <DraggableNode type={e.type} label={e.label} icon={e.icon} />
                </div>
            ))}
            </div>
        </>
    );
};
