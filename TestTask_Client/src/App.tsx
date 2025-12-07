import React, { useState } from 'react';
import PatientList from "./components/PatientList/PatientList.tsx";
import DoctorList from "./components/DoctorList/DoctorList.tsx";
import DiseaseList from "./components/DiseaseList/DiseaseList.tsx";
import './App.css';

type Tab = 'patients' | 'doctors' | 'diseases';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('patients');

    return (
        <div className="App">
            <header className="app-header">
                <h1>MediCare Management System</h1>
                <p className="app-subtitle">Medical Records Management Platform</p>
            </header>

            <nav className="tabs">
                <button
                    onClick={() => setActiveTab('patients')}
                    className={activeTab === 'patients' ? 'active' : ''}
                >
                    Patients
                </button>
                <button
                    onClick={() => setActiveTab('doctors')}
                    className={activeTab === 'doctors' ? 'active' : ''}
                >
                    Doctors
                </button>
                <button
                    onClick={() => setActiveTab('diseases')}
                    className={activeTab === 'diseases' ? 'active' : ''}
                >
                    Diseases
                </button>
            </nav>

            <main className="content">
                {activeTab === 'patients' && <PatientList />}
                {activeTab === 'doctors' && <DoctorList />}
                {activeTab === 'diseases' && <DiseaseList />}
            </main>
        </div>
    );
};

export default App;