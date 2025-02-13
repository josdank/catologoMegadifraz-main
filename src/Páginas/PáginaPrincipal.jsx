import React from "react";
import Card from "../Componentes/Card";
import CardContent from "../Componentes/CardContent";
import Button from "../Componentes/Button";
import { Carousel } from "react-responsive-carousel";
import test from "../../public/Imagenes/test.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const clothingData = [
  { name: "Chaqueta de Cuero", price: "$120", img: "test.webp" },
  { name: "Camiseta Casual", price: "$30", img: "camiseta.jpg" },
  { name: "Jeans Slim Fit", price: "$50", img: "jeans.jpg" },
  { name: "Abrigo de Invierno", price: "$150", img: "abrigo.jpg" },
];

const newArrivals = [
  { name: "Zapatillas Deportivas", price: "$90", img: "zapatillas.jpg" },
  { name: "Vestido Elegante", price: "$75", img: "vestido.jpg" },
  { name: "Sudadera Oversize", price: "$40", img: "sudadera.jpg" },
  { name: "Bolso de Cuero", price: "$60", img: "bolso.jpg" },
];

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function ClothingStore() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", width: "100vw", overflowX: "hidden", background: "#f0f0f0", color: "#333" }}>
      <header style={{ width: "100%", textAlign: "center", marginBottom: "20px", padding: "10px" }}>
        <div style={{ marginBottom: "10px" }}>
          <nav style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {months.map((month, index) => (
              <Button key={index} variant="ghost">{month}</Button>
            ))}
          </nav>
        </div>
        <h1>TIENDA DE ROPA</h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="ghost">Hombres</Button>
          <Button variant="ghost">Mujeres</Button>
          <Button variant="ghost">Accesorios</Button>
        </nav>
      </header>
      
      <section style={{ width: "70%", marginBottom: "20px", flex: "1", margin: "0 auto"}}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {clothingData.map((item, index) => (
            <div key={index}>
              <img src={item.img === "test.webp" ? test : `/img/${item.img}`} alt={item.name} style={{ width: "500px", height: "400px", objectFit: "cover", marginRight: "10px" }} />
              <p style={{ textAlign: "center" }}>
                {item.name} - {item.price}
              </p>
            </div>
          ))}
        </Carousel>
      </section>

      <section style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Nuevas Llegadas ✨</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {newArrivals.map((item, index) => (
            <Card key={index} style={{ width: "calc(100% / 2 - 20px)", textAlign: "center", marginBottom: "20px" }}>
              <img src={`/img/${item.img}`} alt={item.name} style={{ width: "100%", height: "auto" }} />
              <CardContent>
                <p>{item.name}</p>
                <span>{item.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}