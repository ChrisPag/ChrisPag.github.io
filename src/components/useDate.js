const useDate = (daysPrior) => {
    
    const date = new Date();
    date.setDate(date.getDate() - daysPrior);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    let formattedDate = year + '-' + month + '-' + day;
    
    return (formattedDate);
}
  
export default useDate;