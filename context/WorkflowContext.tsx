import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WorkflowContextProps {
    jobId: string | null;
    setJobId: (id: string) => void;
}

const WorkflowContext = createContext<WorkflowContextProps | undefined>(undefined);

export const WorkflowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [jobId, setJobId] = useState<string | null>(null);

    return (
        <WorkflowContext.Provider value={{ jobId, setJobId }}>
            {children}
        </WorkflowContext.Provider>
    );
};

export const useWorkflow = (): WorkflowContextProps => {
    const context = useContext(WorkflowContext);
    if (!context) {
        throw new Error('useWorkflow must be used within a WorkflowProvider');
    }
    return context;
};