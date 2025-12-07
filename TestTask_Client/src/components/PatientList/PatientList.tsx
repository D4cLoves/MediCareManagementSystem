import React, { useState, useEffect } from 'react';
import {type Patient} from "../../types";
import { api } from "../../services/api.ts";

const PatientList: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = async () => {
        const data = await api.getPatients();
        setPatients(data);

    };

    const startEdit = (patient: Patient) => {
        setEditingId(patient.id);
        setNewName(patient.name.value || patient.name.Value || '');
    };

    const cancelEdit = () => {
        setEditingId(null);
        setNewName('');
    };

    const saveEdit = async (id: string) => {
        const nameParts = newName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        if (!firstName || !lastName) {
            alert('Please enter first and last name');
            return;
        }

        try {
            await api.updatePatientName(id, firstName, lastName);
            await loadPatients();
            cancelEdit();
        } catch (error) {
            alert('Error updating name');
        }
    };

    return (
        <div>
            <h2>Patient Registry</h2>
            {patients.length === 0 ? (
                <div className="empty-state">
                    <p>No patients found</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.id}>
                                <td>{index + 1}</td>
                                <td>
                                    {editingId === patient.id ? (
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            style={{ width: '250px' }}
                                        />
                                    ) : (
                                        patient.name.value || patient.name.Value || 'Not specified'
                                    )}
                                </td>
                                <td>{new Date(patient.birthDate).toLocaleDateString('en-US')}</td>
                                <td>
                                    {editingId === patient.id ? (
                                        <>
                                            <button className="primary" onClick={() => saveEdit(patient.id)}>Save</button>
                                            <button className="secondary" onClick={cancelEdit}>Cancel</button>
                                        </>
                                    ) : (
                                        <button onClick={() => startEdit(patient)}>Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PatientList;
