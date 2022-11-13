import { Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack';
import React from 'react'
import NavAppBar from '../components/menu/NavAppBar'
import Copyright from '../components/Copyright';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default function HomePage({children}) {
  return (
    <SnackbarProvider maxSnack={5}>
        <Box sx={{ display: 'flex' }}>
        <NavAppBar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Container maxWidth={true}>
                {children}
            </Container>
        </Box>
      </Box>  
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </SnackbarProvider>
)
}
