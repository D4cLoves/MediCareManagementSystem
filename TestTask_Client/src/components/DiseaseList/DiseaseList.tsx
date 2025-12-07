import React, { useState, useEffect } from 'react';
import type {Disease} from "../../types";
import { api } from "../../services/api.ts";

const DiseaseList: React.FC = () => {
    const [diseases, setDiseases] = useState<Disease[]>([]);

    useEffect(() => {
        loadDiseases();
    }, []);

    const loadDiseases = async () => {
        const data = await api.getDiseases();
        setDiseases(data);
    };

    return (
        <div>
            <h2>Disease Registry</h2>
            {diseases.length === 0 ? (
                <div className="empty-state">
                    <p>No diseases found</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diseases.map((disease, index) => (
                            <tr key={disease.id}>
                                <td>{index + 1}</td>
                                <td><strong>{disease.name}</strong></td>
                                <td>{disease.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DiseaseList;
