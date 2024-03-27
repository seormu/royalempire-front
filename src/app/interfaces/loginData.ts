export interface LoginResponse  {
    id: string;
    nombre: string;
    email: string;
    rol: string;
    token: string;
}

export interface LoginRequest {
    usuario: string;
    contrasenia: string
}