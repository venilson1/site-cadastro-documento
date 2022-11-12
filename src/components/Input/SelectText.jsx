import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function SelectText({id, label, process, handleChange}) {

  return (
    <FormControl fullWidth>
    <InputLabel id={`${id}-label`}>{label} *</InputLabel>
        <Select
            labelId={`${id}-label`}
            id={id}
            value={process}
            label={label}
            onChange={handleChange}
        >
            <MenuItem value={1}>A</MenuItem>
            <MenuItem value={2}>B</MenuItem>
            <MenuItem value={3}>C</MenuItem>
            <MenuItem value={4}>D</MenuItem>
        </Select>
    </FormControl>
  )
}
