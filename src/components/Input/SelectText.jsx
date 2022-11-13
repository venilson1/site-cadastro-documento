import { useEffect, useState } from 'react'
import { getProcess } from '../../services/api';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export default function SelectText({id, label, process, handleChange}) {

  const [processes, setProcesses] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try{
          const response = await getProcess();
          setProcesses(response.data)
        }catch(error) {
          setError(true)
        } finally{
          setIsLoading(false);
        }
    })();
}, []);

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
          {processes.map(({id, nome}) => {
            return (
              <MenuItem key={id} value={id}>{nome}</MenuItem>
            )
          })}
        </Select>
    </FormControl>
  )
}
