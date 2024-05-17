function setTime() {
  const now = new Date();
  
  const time = now.toLocaleTimeString('fi-FI');

  const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = now.toLocaleDateString('fi-FI', dateOptions);

  const datetime = `<p>Tänään on ${date}</p><p>Kello on ${time}</p>`;

  document.getElementById("datetime").innerHTML = datetime;
}
//funktio kutsutaan heti kun sivu latautuu
setTime();
//aika päivittyy joka sekunti
setInterval(setTime, 1000);
