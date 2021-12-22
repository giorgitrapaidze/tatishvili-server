require("dotenv/config");
const mongoose = require("mongoose");
const Doctor = require("../models/doctor.model");

const doctors = [
  {
    name: "Eka Saknelashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/ekasaknelashviliginekologi.jpeg",
    category: "Gynaecology",
    icon: "female",
  },
  {
    name: "Irma Tedoradze",
    image:
      "https://test.dthc.ge/assets/img/doctors/irmatedoradzeginekologi.jpeg",
    category: "Gynaecology",
    icon: "female",
  },
  {
    name: "Nato Nanobashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/natonanobashvilimeanginekologi.jpeg",
    category: "Gynaecology",
    icon: "capsule",
  },
  {
    name: "Mimoza Kankia",
    image:
      "https://test.dthc.ge/assets/img/doctors/gaioz%20pagavadermatologi.jpeg",
    category: "Gastroenterology",
    icon: "capsule",
  },
  {
    name: "Gaioz Paghava",
    image:
      "https://test.dthc.ge/assets/img/doctors/mimoza%20kankia%20logo+++.jpeg",
    category: "Dermatology",
    icon: "herbal",
  },
  {
    name: "Manana Dugladze",
    image: "https://test.dthc.ge/assets/img/doctors/manana%20dugladze.jpeg",
    category: "Cardiology",
    icon: "heart-beat-alt",
  },
  {
    name: "Nana Nakopia",
    image: "https://test.dthc.ge/assets/img/doctors/nana%20nayofia.jpeg",
    category: "Cardiology",
    icon: "heart-beat-alt",
  },
  {
    name: "Sergo Ordjonikidze",
    image: "https://test.dthc.ge/assets/img/doctors/sergo%20orjonikidze.jpeg",
    category: "Cardiology",
    icon: "heart-beat-alt",
  },
  {
    name: "Natia Javashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/natiajavashvililaboranti.jpeg",
    category: "Laboratory",
    icon: "laboratory",
  },
  {
    name: "Arkady Arushanov",
    image:
      "https://test.dthc.ge/assets/img/doctors/arkadiarushanovinevrologi.jpeg",
    category: "Neurology",
    icon: "brain-alt",
  },
  {
    name: "Gia Natriashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/gianatriashvilibavshvtadamozrdiltannevrologi.jpeg",
    category: "Neurology",
    icon: "brain-alt",
  },
  {
    name: "Keteven Barabadze",
    image:
      "https://test.dthc.ge/assets/img/doctors/qetevanbarabadzepediatri.jpeg",
    category: "Pediatry",
    icon: "children-care",
  },
  {
    name: "Keteven Barabadze",
    image:
      "https://test.dthc.ge/assets/img/doctors/davitchkoniapulmonologi.jpeg",
    category: "Pulmonology",
    icon: "lungs",
  },
  {
    name: "Ketevan Mklavlishvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/ketevanmkalavlishviliradiologi.jpeg",
    category: "Radiology",
    icon: "xray",
  },
  {
    name: "Revaz Pruidze",
    image:
      "https://test.dthc.ge/assets/img/doctors/revazpruidzereabilitologi.jpeg",
    category: "Physical therapy",
    icon: "stretcher",
  },
  {
    name: "Irakli Shengelia",
    image:
      "https://test.dthc.ge/assets/img/doctors/iraklishengeliareabilitologi.jpeg",
    category: "Physical therapy",
    icon: "stretcher",
  },
  {
    name: "Nino Gogitidze",
    image:
      "https://test.dthc.ge/assets/img/doctors/ninogogitidzereabilitologi.jpeg",
    category: "Physical therapy",
    icon: "stretcher",
  },
  {
    name: "Lana Lagvilava",
    image:
      "https://test.dthc.ge/assets/img/doctors/lana%20lagvilavaravmatologi.jpeg",
    category: "Rheumatology",
    icon: "crutches",
  },
  {
    name: "Levan Kajaia",
    image:
      "https://test.dthc.ge/assets/img/doctors/levanqajaiaortopedtravmatologi.jpeg",
    category: "Rheumatology",
    icon: "crutches",
  },
  {
    name: "Sopio Arabidze",
    image:
      "https://test.dthc.ge/assets/img/doctors/sopioarabidzerevmatologi.jpeg",
    category: "Rheumatology",
    icon: "crutches",
  },
  {
    name: "Jemal Chumburidze",
    image: "https://test.dthc.ge/assets/img/doctors/jemal%20chumburidze.jpeg",
    category: "Traumatology",
    icon: "icu",
  },
  {
    name: "Nikoloz Khundjgurua",
    image: "https://test.dthc.ge/assets/img/doctors/nikolozkhunjgurua.jpeg",
    category: "Traumatology",
    icon: "icu",
  },
  {
    name: "Vaja Gaprindashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/vajagaprindashvilitravmatologi.jpeg",
    category: "Traumatology",
    icon: "icu",
  },
  {
    name: "Giorgi Raqviashvili",
    image:
      "https://test.dthc.ge/assets/img/doctors/giorgiraqviashvilikbasaxisqirurgi.jpeg",
    category: "Maxillofacial Surgery",
    icon: "surgeon",
  },
  {
    name: "Kakha Chomakhidze",
    image:
      "https://test.dthc.ge/assets/img/doctors/davitchkoniapulmonologi.jpeg",
    category: "Hepatology",
    icon: "drug",
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //console.log("Connected to the database!");
    // 2. Drop the DB
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    //console.log("Database dropped!");
    return Doctor.create(doctors);
    // forwards the promise to the next `then`
  })
  .then((data) => {
    console.log(`Inserted ${data.length} doctors`); // Inserted 10 books
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Database connection closed!");
  })
  .catch((err) => {
    console.log(err);
  });
