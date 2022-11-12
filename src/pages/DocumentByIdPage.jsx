import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

export default function DocumentById() {
  
    let { id } = useParams();

  return (
    <Box>
      <Typography variant='h4' sx={{marginY: 4, fontWeight: 'bold'}}># {id}</Typography>
      <Box sx={{ height: '68vh', width: '100%'
        }}>
        <DrawerHeader />
        <Box sx={{display: 'flex', width: '20vw', justifyContent: 'space-between',  alignItems: 'center'}}>
            <Box sx={{fontWeight: 'bold'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '2rem'}}>Código: </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize: '1.8rem', color: 'gray'}}>dsadsad</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '20vw', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{fontWeight: 'bold'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '2rem'}}>Título: </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize: '1.8rem', color: 'gray'}}>dsadsad</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '20vw', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{fontWeight: 'bold'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '2rem'}}>Processo: </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize: '1.8rem', color: 'gray'}}>dsadsad</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '20vw', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{fontWeight: 'bold'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '2rem'}}>Categoria: </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize: '1.8rem', color: 'gray'}}>dsadsad</Typography>
            </Box>
        </Box>
        <Box sx={{display: 'flex', width: '20vw', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{fontWeight: 'bold'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '2rem'}}>Arquivo: </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize: '1.8rem', color: 'gray'}}>dsadsad</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}
