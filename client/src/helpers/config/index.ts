export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5432/api/v1'
}

export const getNyntaxApiUrl = (): string => {
    return process.env.NEXT_PUBLIC_BACKEND_API_URL_NYNTAX || ''
}