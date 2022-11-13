import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Grid, List, Typography } from '@mui/material';
import { findDocumentById, api } from '../services/api';
import ListItem from '@mui/material/ListItem';

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
        {isError ? 
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'red'}}>O id #<span style={{textDecoration: 'underline'}}>{id}</span> não foi encontrado</Typography>
        : render()}
    </Box>
  )

    function render(){
        return (
        <Box sx={{ height: '68vh', width: '100%'}}>
            <Grid item xs={12} md={6}>
            {Object.keys(document).map((el, i) => {
                return (
                <List key={i}>
                    <ListItem>
                    <Typography sx={{  fontWeight: 'bold' }} variant="h6" component="div">
                        {el} :
                    </Typography>
                    <Typography sx={{ ml: 2, color: 'gray'  }} variant="h6" component="div">
                        {document[el]}
                    </Typography>
                    </ListItem>
                </List>
                )
            })}
            <Button variant="contained" color="secondary">
                <a style={{textDecoration: 'none', color: 'white'}} href={`${api.defaults.baseURL}/api/documento/${document.arquivoId}/download`} download>Download do arquivo</a>
            </Button>
            </Grid>
        </Box>
        ) 
   }
}


