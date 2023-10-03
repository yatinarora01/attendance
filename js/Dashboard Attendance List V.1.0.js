List.forEach(list => {
    const tr = document.createElement('tr');
    const trContent = `
            <td>${list.ID}</td>
            <td>${list.Name}</td>
            <td>${list.Depart}</td>
            <td>${list.Date}</td>
            <td>${list.JoinTime}</td>
            <td>${list.LogoutTime}</td>
      
            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);            
});
