// @vendors
import React from 'react';
import { useSelector } from 'react-redux';

export const Locations = () => {
    const { locations } = useSelector((state) => state);
    return (
        <ul>
            { locations.map(({ name }) => <li>{name}</li>) }
        </ul>
    );
};

export default Locations;
