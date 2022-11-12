import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import InputText from '../components/Input/InputText';
import SelectText from '../components/Input/SelectText';
import Copyright from '../Util/Copyright';
import { Link, useNavigate } from 'react-router-dom';
import { createDocument } from '../services/api';
import { useSnackbar } from 'notistack';

export default function CreateDocumentPage() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [, setOpenSnack] = useState(false);

  const handleClickSnack = (variant, errorMessage) => {
    setOpenSnack(true);
    enqueueSnackbar(errorMessage, { variant });
  };

    const [process, setProcess] = useState('');

    const handleChange = (event) => {
      setProcess(event.target.value);
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const code = data.get('code');
    const title = data.get('title');
    const category = data.get('category');
    const file = data.get('file');

    try{
      var response = await createDocument(code, title, category, process, file);
      var document = response.data;

      navigate(`/documento/${document.id}`);
      
    }
    catch(error){

      var erros = error.response.data.errors

      Object.keys(erros).forEach(el => {
        handleClickSnack('error', erros[el][0]);
      })
    }
  };

  return (
    <Container component="main" maxWidth="xs">
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="68vh"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography component="h1" variant="h5">
            Criar Documento
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputText id={"code"} label={"Código"} name={"code"} type={"number"}/>
          <InputText id={"title"} label={"Título"} name={"title"} type={"text"}/>
          <InputText id={"category"} label={"Categoria"} name={"category"} type={"text"}/>
          <SelectText id={"process"} label={"Processo"} process={process} handleChange={handleChange}/>
          <InputText id={"file"} label={"Arquivo"} name={"file"} type={"file"}/>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
                type="submit"
                variant="contained"
                color='success'
                sx={{ mt: 3, mb: 2 }}
            >
                Salvar
            </Button>
            <Button
                  type="submit"
                  variant="contained"
                  color='error'
                  sx={{ mt: 3, mb: 2, ml: 2 }}
                  component={Link}
                  to="/"
              >
                  Cancelar
              </Button>
            </Box>
        </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
