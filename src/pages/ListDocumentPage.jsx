import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridToolbar, ptBR } from '@mui/x-data-grid';
import { getDocument } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function ListDocumentPage() {

  const navigate = useNavigate();

  const [document, setDocument] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    (async () => {
        try{
          const response = await getDocument();
          setDocument(response.data)
        }catch(error) {
          setError(true)
        } finally{
          setIsLoading(false);
        }
    })();
}, []);

  const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={(e) => {
                    navigate(`/documento/${params.id}`);
                }}
            >
                Ver
            </Button>
        </strong>
    )
}

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 70,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center' 
    },
    { 
      field: 'codigo', 
      headerName: 'Código', 
      width: 130,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center'
    },
    { 
      field: 'titulo', 
      headerName: 'Título', 
      width: 130,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center'
    },
    { 
      field: 'categoria', 
      headerName: 'Categoria', 
      width: 130,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center'
    },
    { 
      field: 'processoNome', 
      headerName: 'Processo', 
      width: 130,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center'
    },
    {
      field: 'action', 
      headerName: 'Ação', 
      width: 150, 
      renderCell: renderDetailsButton, 
      disableClickEventBubbling: true,
      flex: 1, 
      headerClassName: 'header-column', 
      headerAlign: 'center', 
      align: 'center'
    }
  ];

  return (
    <Box>
      <Typography variant='h4' sx={{marginY: 4, fontWeight: 'bold'}}>Lista de Documentos</Typography>
      <Box sx={{ height: '56vh', width: '100%', 
        '& .header-column': 
          {
            backgroundColor: '#e8e8fa',
          }
        }}>
        <DataGrid
          rows={document}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          components={{
            Toolbar: GridToolbar,
          }}
          //loading={isLoading}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  )
}
