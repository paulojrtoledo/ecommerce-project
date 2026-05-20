import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AdminProductForm, { AdminProductFormValues } from './components/AdminProductForm';
import {
  Category,
  Product,
  createProduct,
  deleteProduct,
  getCategories,
  getProducts,
  updateProduct,
} from '../../services/productService';

function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  const showMessage = (text: string, severity: 'success' | 'error') => {
    setMessage(text);
    setMessageType(severity);
    setOpenSnackbar(true);
  };

  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      showMessage('Falha ao carregar produtos. Verifique a conexão com o backend.', 'error');
    } finally {
      setLoadingProducts(false);
    }
  };

  const loadCategories = async () => {
    setLoadingCategories(true);
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      showMessage('Falha ao carregar categorias. Verifique o backend.', 'error');
    } finally {
      setLoadingCategories(false);
    }
  };

  const handleSubmit = async (values: AdminProductFormValues) => {
    setSaving(true);
    try {
      const payload = {
        name: values.name.trim(),
        description: values.description.trim(),
        imageUrl: values.imageUrl.trim(),
        price: Number(values.price),
        stock: Number(values.stock),
        category: values.category,
      };

      if (editingProduct) {
        await updateProduct(editingProduct.id, payload);
        showMessage('Produto atualizado com sucesso.', 'success');
        setEditingProduct(null);
      } else {
        await createProduct(payload);
        showMessage('Produto criado com sucesso.', 'success');
      }

      await loadProducts();
    } catch (error) {
      showMessage('Erro ao salvar produto. Confira os dados e tente novamente.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Deseja realmente excluir este produto?');
    if (!confirmed) {
      return;
    }

    setDeletingId(id);
    try {
      await deleteProduct(id);
      showMessage('Produto excluído com sucesso.', 'success');
      await loadProducts();
    } catch (error) {
      showMessage('Erro ao excluir o produto. Tente novamente.', 'error');
    } finally {
      setDeletingId(null);
    }
  };

  const productFormInitialValues: AdminProductFormValues | undefined = editingProduct
    ? {
        name: editingProduct.name,
        description: editingProduct.description,
        imageUrl: editingProduct.imageUrl,
        price: String(editingProduct.price),
        category: editingProduct.category,
        stock: String(editingProduct.stock),
      }
    : undefined;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Administração de Produtos
      </Typography>

      <AdminProductForm
        categories={categories}
        initialValues={productFormInitialValues}
        saving={saving}
        onSubmit={handleSubmit}
        onCancel={editingProduct ? handleCancelEdit : undefined}
      />

      <Paper sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>
            <Typography variant="h6">Produtos cadastrados</Typography>
            <Typography variant="body2" color="text.secondary">
              {loadingProducts ? 'Carregando produtos...' : `${products.length} produto(s) encontrados`}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={loadProducts}
            disabled={loadingProducts}
          >
            Atualizar
          </Button>
        </Box>

        {loadingProducts ? (
          <Box display="flex" justifyContent="center" py={6}>
            <CircularProgress />
          </Box>
        ) : products.length === 0 ? (
          <Alert severity="info">Nenhum produto encontrado.</Alert>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Estoque</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} hover>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2).replace('.', ',')}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleEdit(product)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDelete(product.id)}
                        disabled={deletingId === product.id}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={messageType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AdminProductsPage;
