function display(vehicle) {

    const vehicleInfo = `
    
    <img src="${vehicle.img}">
    
    <table>

    <tr>
        <td>Price :</td>
        <td>${vehicle.price}</td>
    </tr>


    <tr>
        <td>Brand :</td>
        <td>${vehicle.brand}</td>
    </tr>


    <tr>
        <td>Model :</td>
        <td>${vehicle.model}</td>
    </tr>


    <tr>
        <td>Year :</td>
        <td>${vehicle.year}</td>
    </tr>


    <tr>
        <td>Engine :</td>
        <td>${vehicle.engine.type}</td>
    </tr>


    <tr>
        <td>Type :</td>
        <td>${vehicle.engine.type}</td>
    </tr>

    <tr>
        <td>Capacity :</td>
        <td>${vehicle.engine.capacity}</td>
    </tr>


    <tr>
        <td>Featurs :</td>
     <td>${vehicle.features[0]} <br> ${vehicle.features[1]} <br> ${vehicle.features[2]}</td>
    </tr>


    <tr>
        <td>Colours :</td>
        <td>${vehicle.colour}</td>
    </tr>


    <tr>
        <td>Sold :</td>
        <td>${vehicle.sold}</td>
    </tr>
</table>

    
    
    
    
    
    
    
    `;
    document.querySelector('.container').innerHTML = vehicleInfo;

}


const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status == 200) {
        console.log();
        display(JSON.parse(xhr.responseText));
    }


}

xhr.open('GET', 'vehicle.json');
// xhr.open('GET', 'https://www.boredapi.com/api/activity');
xhr.send();