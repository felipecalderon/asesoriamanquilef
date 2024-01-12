export const convertirCadena = (cadena: string) => {
    return cadena
        .toLowerCase() // Convertir a minúsculas
        .normalize("NFD") // Descomponer caracteres acentuados en sus componentes
        .replace(/[\u0300-\u036f]/g, "") // Eliminar los componentes de acentos
        .replace(/\s+/g, '-') // Reemplazar espacios con guiones
        .replace(/[^a-z0-9-]/g, ''); // Eliminar caracteres que no sean letras, números o guiones
};