import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, Paper, Typography} from "@mui/material";
import { CanvasInputs } from "../../models/models";
import styles from './styles.module.scss';

type CheckProps = {
    inputs: CanvasInputs,
    setInputs: (arg: CanvasInputs) => void
}
const CheckBoxes = ({inputs, setInputs}: CheckProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: {
                ...inputs[event.target.name],
                status: event.target.checked
            },
        });
    };

    const {drawNumberCenterType, drawNumberBordersType, drawCarBordersType, drawTimestampsType} = inputs;

    return (
        <Paper className={styles.checkboxWrapper} elevation={3}>
            <Typography variant="h5" gutterBottom>
                Выберите нужное отображение
            </Typography>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox color="secondary" checked={drawNumberCenterType.status} onChange={handleChange}
                                  name="drawNumberCenterType"/>
                    }
                    label="Точки распознавания центра ГРЗ"
                />
                <FormControlLabel
                    control={
                        <Checkbox color="secondary" checked={drawNumberBordersType.status} onChange={handleChange}
                                  name="drawNumberBordersType"/>
                    }
                    label="Рамки ГРЗ"
                />
                <FormControlLabel
                    control={
                        <Checkbox color="secondary" checked={drawCarBordersType.status} onChange={handleChange}
                                  name="drawCarBordersType"/>
                    }
                    label=" Границы ТС"
                />
                <FormControlLabel
                    control={
                        <Checkbox color="secondary" checked={drawTimestampsType.status} onChange={handleChange}
                                  name="drawTimestampsType"/>
                    }
                    label="Временные метки"
                />
            </FormGroup>
        </Paper>
    );
}

export default CheckBoxes;