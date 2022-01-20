// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';

// @actions
import { fetchLocations } from '../../actions/index';

// @components
import Locations from '../Locations';

const App = () => {
    const dispatch = useDispatch();
    const { fetchLocationsLoading } = useSelector((state) => state);
    console.log({ fetchLocationsLoading });

    useEffect(() => dispatch(fetchLocations()), []);

    if (fetchLocationsLoading) {
        return <CircularProgress />;
    }

    return <Locations />;
};

export default App;
