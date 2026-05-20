import apiClient from './apiClient';

export interface AuthUser {
  id: number;
  name?: string;
  email?: string;
  role?: string;
  roles?: string[];
  [key: string]: any;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token?: string;
  accessToken?: string;
  jwt?: string;
  user?: AuthUser;
  role?: string;
  roles?: string[];
  [key: string]: any;
}

function normalizeUser(raw: any): AuthUser {
  if (!raw || typeof raw !== 'object') {
    return { id: 0 };
  }

  const roles = raw.roles || raw.role ? [raw.role].flat() : raw.authorities || [];

  return {
    id: raw.id ?? raw.userId ?? 0,
    name: raw.name ?? raw.username ?? raw.fullName,
    email: raw.email,
    role: raw.role,
    roles: Array.isArray(roles) ? roles.map(String) : [],
    ...raw,
  };
}

export async function login(payload: LoginPayload): Promise<{ token: string; user: AuthUser }> {
  const response = await apiClient.post<AuthResponse>('/auth/login', payload);
  const data = response.data;
  const token = data.token || data.accessToken || data.jwt || data.access_token;
  const user = data.user || data;

  if (!token) {
    throw new Error('Token de autenticação não retornado pelo servidor.');
  }

  return {
    token,
    user: normalizeUser(user),
  };
}

export async function register(payload: RegisterPayload): Promise<AuthUser> {
  const response = await apiClient.post<AuthResponse>('/auth/register', payload);
  return normalizeUser(response.data);
}

export async function getCurrentUser(): Promise<AuthUser> {
  const response = await apiClient.get<AuthUser>('/auth/me');
  return normalizeUser(response.data);
}
