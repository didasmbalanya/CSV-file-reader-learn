export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map((value: string, index: number) =>{
    if(index === 1) return Number(value) - 1
    return Number(value)
  });
  
  return new Date(year, month, day)
}
