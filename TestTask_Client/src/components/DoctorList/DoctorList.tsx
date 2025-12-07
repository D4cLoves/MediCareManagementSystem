import React, { useState } from 'react';
import type { Doctor } from "../../types";
import { api } from "../../services/api.ts";

const DoctorList: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [specialty, setSpecialty] = useState('');

    const searchDoctors = async () => {
        if (!specialty.trim()) return;
        const data = await api.getDoctorsBySpecialty(specialty);
        setDoctors(data);
        
    };

    return (
        <div>
            <h2>Doctor Directory</h2>
            <div className="search-container">
                <input
                    type="text"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="Enter specialty (e.g., Therapist, Cardiologist)"
                    onKeyPress={(e) => e.key === 'Enter' && searchDoctors()}
                />
                <button className="primary" onClick={searchDoctors}>Search</button>
            </div>

            {doctors.length === 0 ? (
                <div className="empty-state">
                    <p>No doctors found. Enter a specialty to search.</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Specialty</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={doctor.id}>
                                <td>{index + 1}</td>
                                <td><strong>{doctor.name.value || doctor.name.Value || 'Not specified'}</strong></td>
                                <td>{doctor.specialty}</td>
                                <td>{new Date(doctor.birthDate).toLocaleDateString('en-US')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DoctorList;
