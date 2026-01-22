import { z } from 'zod';

/**
 * Input validation schemas using zod
 * These should be used both client-side AND server-side when backend is implemented
 */

// User registration schema
export const registrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),
  email: z
    .string()
    .trim()
    .email('Email inválido')
    .max(255, 'Email deve ter no máximo 255 caracteres'),
  password: z
    .string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .max(128, 'Senha deve ter no máximo 128 caracteres'),
  confirmPassword: z
    .string()
    .min(1, 'Confirme sua senha'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
});

// Login schema
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Email inválido')
    .max(255, 'Email deve ter no máximo 255 caracteres'),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .max(128, 'Senha deve ter no máximo 128 caracteres'),
});

// Trip/Event creation schema
export const tripSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  descricao: z
    .string()
    .trim()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres'),
  local: z
    .string()
    .trim()
    .min(3, 'Local deve ter pelo menos 3 caracteres')
    .max(200, 'Local deve ter no máximo 200 caracteres'),
  data: z
    .string()
    .min(1, 'Data é obrigatória'),
  vagas: z
    .number()
    .int('Vagas deve ser um número inteiro')
    .min(1, 'Deve haver pelo menos 1 vaga')
    .max(1000, 'Máximo de 1000 vagas'),
  preco: z
    .number()
    .min(0, 'Preço não pode ser negativo')
    .max(100000, 'Preço máximo excedido'),
});

// Announcement schema
export const announcementSchema = z.object({
  titulo: z
    .string()
    .trim()
    .min(3, 'Título deve ter pelo menos 3 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres'),
  mensagem: z
    .string()
    .trim()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(500, 'Mensagem deve ter no máximo 500 caracteres'),
  tipo: z.enum(['info', 'alerta', 'urgente']),
});

// Message schema
export const messageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, 'Mensagem não pode estar vazia')
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres'),
});

// Site configuration schema
export const siteConfigSchema = z.object({
  telefone: z
    .string()
    .trim()
    .max(20, 'Telefone muito longo')
    .optional(),
  email: z
    .string()
    .trim()
    .email('Email inválido')
    .max(255, 'Email muito longo')
    .optional(),
  instagram: z
    .string()
    .trim()
    .max(50, 'Instagram muito longo')
    .optional(),
  whatsapp: z
    .string()
    .trim()
    .max(20, 'WhatsApp muito longo')
    .optional(),
  endereco: z
    .string()
    .trim()
    .max(200, 'Endereço muito longo')
    .optional(),
});

// Helper function to safely validate and return errors
export const validateInput = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return {
    success: false,
    errors: result.error.errors.map((e) => e.message),
  };
};
