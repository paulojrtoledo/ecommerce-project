import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import type { Category, ProductCreatePayload } from '../../../services/productService';

export interface AdminProductFormValues {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  category: string;
  stock: string;
}

interface AdminProductFormProps {
  categories: Category[];
  initialValues?: AdminProductFormValues;
  saving: boolean;
  onSubmit: (values: AdminProductFormValues) => void;
  onCancel?: () => void;
}

const initialFormValues: AdminProductFormValues = {
  name: '',
  description: '',
  imageUrl: '',
  price: '',
  category: '',
  stock: '0',
};

export default function AdminProductForm({
  categories,
  initialValues,
  saving,
  onSubmit,
  onCancel,
}: AdminProductFormProps) {
  const [values, setValues] = useState<AdminProductFormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof AdminProductFormValues, string>>>({});

  useEffect(() => {
    if (initialValues) {
      setValues(initialValues);
      setErrors({});
    } else {
      setValues(initialFormValues);
      setErrors({});
    }
  }, [initialValues]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> |
    SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof AdminProductFormValues, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Nome é obrigatório';
    }

    if (!values.category.trim()) {
      nextErrors.category = 'Categoria é obrigatória';
    }

    if (!values.description.trim()) {
      nextErrors.description = 'Descrição é obrigatória';
    }

    if (!values.imageUrl.trim()) {
      nextErrors.imageUrl = 'URL da imagem é obrigatória';
    }

    const price = Number(values.price);
    if (!values.price.trim() || Number.isNaN(price) || price <= 0) {
      nextErrors.price = 'Preço deve ser maior que 0';
    }

    const stock = Number(values.stock);
    if (values.stock.trim() === '' || Number.isNaN(stock) || stock < 0) {
      nextErrors.stock = 'Estoque deve ser 0 ou maior';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    onSubmit(values);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {initialValues ? 'Editar produto' : 'Novo produto'}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              label="Categoria"
              name="category"
              value={values.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            {errors.category && (
              <Box sx={{ mt: 1, color: 'error.main', fontSize: '0.75rem' }}>
                {errors.category}
              </Box>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            minRows={3}
            label="Descrição"
            name="description"
            value={values.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="URL da imagem"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            type="number"
            label="Preço"
            name="price"
            value={values.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
            inputProps={{ min: 0, step: '0.01' }}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            type="number"
            label="Estoque"
            name="stock"
            value={values.stock}
            onChange={handleChange}
            error={!!errors.stock}
            helperText={errors.stock}
            inputProps={{ min: 0, step: '1' }}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
        {initialValues && onCancel && (
          <Button type="button" variant="outlined" onClick={onCancel} disabled={saving}>
            Cancelar
          </Button>
        )}
        <Button type="submit" variant="contained" disabled={saving}>
          {saving ? 'Salvando...' : initialValues ? 'Atualizar produto' : 'Criar produto'}
        </Button>
      </Box>
    </Paper>
  );
}
