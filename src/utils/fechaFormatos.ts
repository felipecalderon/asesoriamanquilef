export const fechaCorta = (dateString: string) => {
    const date = new Date(`${dateString}T04:00:00Z`);
    const formattedDate = date.toLocaleDateString('es-ES', {
        month: 'long',
      });
    return formattedDate;
  }