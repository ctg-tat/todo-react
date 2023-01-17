const formatDate = (date) => {

    date = new Date(date);

    const Year = date.getFullYear();
    const Month = date.getMonth() + 1;
    const Day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${Day < 10 ? '0' + Day : Day}.${Month < 10 ? '0' + Month : Month}.${Year} (${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes})`;
}

export default formatDate;