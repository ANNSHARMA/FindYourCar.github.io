const cars = [
  {
    Origin: "India",
    src: "./img/c2.webp",
    name: "Tata Motors",
    text: "Tata: An Indian automotive manufacturer known for its diverse range of cars and commercial vehicles, including the Nano and Safari. Tata Motors is also noted for its innovative designs and sustainability efforts.",
    button: "Read more...",
  },
  {
    Origin: "India",
    src: "./img/c3.jpg",
    name: "Mahindra & Mahindra",
    text: "Mahindra: An Indian company specializing in SUVs, trucks, and agricultural machinery. Mahindra is famous for rugged vehicles like the Thar and Scorpio, and its commitment to off-road performance.",
    button: "Read more...",
  },
  {
    Origin: "Japan",
    src: "./img/c6.jpg",
    name: "Toyota",
    text: "Toyota: A Japanese automotive giant renowned for its reliable and fuel-efficient vehicles. Toyota offers popular models like the Camry, Corolla, and Prius, with a strong emphasis on hybrid technology.",
    button: "Read more...",
  },
  {
    Origin: "Germany",
    src: "./img/c7.jpg",
    name: "BMW (Bayerische Motoren Werke)",
    text: "BMW: A German luxury car manufacturer known for its performance-oriented and premium vehicles. BMW produces a range of cars from sporty models like the M3 to luxury sedans like the 7 Series.",
    button: "Read more...",
  },
  {
    Origin: "United-Kingdom",
    src: "./img/c4.jpg",
    name: "Jaguar",
    text: "Jaguar: A British luxury car manufacturer known for its elegant and performance-oriented vehicles. Jaguar produces models like the F-Type sports car and the XJ luxury sedan.A luxury SUV that offers a balance of sporty performance",
    button: "Read more...",
  },
  {
    Origin: "United-States",
    src: "./img/c5.jpg",
    name: "Ford",
    text: "Ford: An American automaker with a long history of producing a wide range of vehicles, including the iconic Mustang and the F-150 truck. Ford is also known for its innovation in electric and autonomous vehicles.",
    button: "Read more...",
  },
  {
    Origin: "United-Kingdom",
    src: "./img/c11.jpg",
    name: "Land Rover (Range Rover)",
    text: "Land Rover: A British brand famous for its luxury SUVs and off-road capability. Land Rover's lineup includes the Range Rover and Discovery, combining luxury with rugged performance.",
    button: "Read more...",
  },
  {
    Origin: "Japan",
    src: "./img/c9.jpg",
    name: "Suzuki",
    text: "Suzuki: A Japanese brand recognized for its compact cars and motorcycles. Suzuki's lineup includes models like the Swift and Vitara, focusing on affordability and reliability",
    button: "Read more...",
  },
  {
    Origin: "South-Korea",
    src: "./img/c8.jpg",
    name: "KIA",
    text: "KIA: A South Korean automaker offering a variety of stylish and well-equipped vehicles. Kia is known for models like the Sportage and Seltos, emphasizing value and a strong warranty.",
    button: "Read more...",
  },
  {
    Origin: "Italy",
    src: "./img/c10.jpg",
    name: "Lamborghini",
    text: "Lamborghini: An Italian manufacturer of high-performance sports cars and luxury vehicles. Lamborghini is famous for its exotic designs and models like the Aventador and Huracán.",
    button: "Read more...",
  },

  {
    Origin: "Germany",
    src: "./img/c12.jpg",
    name: "Audi",
    text: "Audi: Audi is a luxury brand offering high-performance, premium vehicles with advanced technology and refined design, including models like the A4, Q7, and the sporty RS series.",
    button: "Read more...",
  },

  {
    Origin: "Germany",
    src: "./img/c13.jpg",
    name: "Volkswagen (VW)",
    text: "Volkswagen: Volkswagen is known for its reliable, well-engineered cars, including models like the Golf, Passat, and Tiguan, which blend performance with practicality.",
    button: "Read more...",
  },
];

function displayCards(cards) {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  cards.forEach((card) => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    col.innerHTML = `<div class="card bg-transparent text-light border mb-3">
          <img src="${card.src}" class="card-img-top bg-transparent" alt="">
          <div class="card-body">
            <p class="">Origin: ${card.Origin}</p>
            <p class="">Brand: ${card.name}</p>
            <p class="text">${card.text}</p>
            <button type="" class="btn btn-outline-success">${card.button}</button>
          </div>
        </div>`;
    row.appendChild(col);
  });
}
displayCards(cars);

function filterCards() {
  const filtervalue = document
    .getElementById("filterInput")
    .value.toLowerCase();

  const filteredcard = cars.filter((card) =>
    card.name.toLowerCase().includes(filtervalue)
  );
  displayCards(filteredcard);
}
