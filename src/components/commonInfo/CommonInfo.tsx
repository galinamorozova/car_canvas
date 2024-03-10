import React from 'react';
import db from '../../db/trace.json';
import {Paper, Typography} from "@mui/material";
import styles from './styles.module.scss'

const CommonInfo = () => {

    return (
        <Paper className={styles.infoContainer} elevation={3}>
            <Typography variant="h5">
                Данные о траспотном средстве:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Госномер ТС: {db.history.plate}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Тип ТС: {db.history.class}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Время: {db.timestamp}
            </Typography>
        </Paper>
    );
}

export default CommonInfo;