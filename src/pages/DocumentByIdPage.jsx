import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { findDocumentById } from '../services/api';

export default function DocumentById() {
  
    let { id } = useParams();

    const [document, setDocument] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try{
                const response = await findDocumentById(id);
                setDocument(response.data);
            }catch(error) {
                setError(true)
            } finally{
                setIsLoading(true)
            }
        })();
    }, []);

  return (
    <Box>
        {isError ? 'id informado não encontrado': ''}
      <Typography variant='h4' sx={{marginY: 4, fontWeight: 'bold'}}># {id} </Typography>
      <Box sx={{ height: '68vh', width: '100%'
        }}>
      </Box>
    </Box>
  )
}
