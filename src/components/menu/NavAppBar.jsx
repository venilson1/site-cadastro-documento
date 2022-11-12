import { Box, Container, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NavAppBar() {
    
    return (
        <AppBar sx={{background: 'black', color: 'white'}}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cadatro de Documentos
                    </Typography>
                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <MenuItem>
                        <Link to="/documento/criar"><Typography sx={{color: 'white'}} textAlign="center">Cadastrar</Typography></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/documento/listar"><Typography sx={{color: 'white'}} textAlign="center">Listar</Typography></Link>
                        </MenuItem>
                    </Box>
                </Toolbar>
                
            </Container>
        </AppBar>
    );
}