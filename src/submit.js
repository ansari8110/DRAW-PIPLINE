// submit.js
import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import Snackbar from "./alerts/Snackbar";
import './scss/submitBtn.css'

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ show: false, message: '', type: '' });
    

    const showSnackbar = (message, type) => {
        setSnackbar({ show: true, message, type });
        // setTimeout(() => setSnackbar({ show: false, message: '', type: '' , duration: 1000000}));
    };

    const handleSubmit = async () => {
        setLoading(true); // Start loading
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error('Failed to parse pipeline');

            const result = await response.json();
            
            // Success Message
            showSnackbar( `Success! Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, DAG: ${result.is_dag ? 'Yes' : 'No'}`, 'success');
        } catch (error) {
            // Error Message
            showSnackbar("Error: Could not connect to the backend server.", "error");
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <button 
                type="button" 
                onClick={handleSubmit}
                disabled={loading}
                className={`submit_btn ${loading ? "submit-btn-loading" : "submit-btn-failed"}`}
            >
                {loading ? 'Processing...' : 'Submit'}
            </button>

            <Snackbar show={snackbar.show} message={snackbar.message} type={snackbar.type} />
        </div>
    );
};