export const formatHours = (date) => {
    const formatDate = new Date(date)
    const hour = formatDate.getHours()
    let minutes = formatDate.getMinutes()
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    return `${hour}:${minutes}`
}

export const formatDate = (date) => {
    let formattedDate = new Date(date).toLocaleString('fr-FR', {
        weekday: 'short',
        year: '2-digit',
        month: 'short',
        day: 'numeric'
      })

      return formattedDate
}