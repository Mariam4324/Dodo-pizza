import { useEffect, useState } from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Section from "./components/Section/Section";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Global.css";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  imageUrl: string;
  category: string;
  categoryRu: string;
  collect: boolean;
  isPopular: boolean;
}

function App() {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:5005/products");
        const result = await response.json();
        setProductsData(result);
      } catch (error) {
        console.error("Error fetching", error);
      }
    }
    getProducts();
  }, []);
  console.log(productsData);

  return (
    <>
      <Header />
      <Section title={"Пицца"}>
        {productsData?.map((product) => {
          if (product.category === "pizza") {
            return (
              <ProductCard
                key={product._id}
                image={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                buttonText={product.collect ? "Собрать" : "Выбрать"}
              />
            );
          }
        })}
      </Section>
      <Section title={"Комбо"}>
        {productsData?.map((product) => {
          if (product.category === "combo") {
            return (
              <ProductCard
                key={product._id}
                image={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                buttonText={product.collect ? "Собрать" : "Выбрать"}
              />
            );
          }
        })}
      </Section>
      <Section title={"Закуски"}>
        {productsData?.map((product) => {
          if (product.category === "snack") {
            return (
              <ProductCard
                key={product._id}
                image={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                buttonText={product.collect ? "Собрать" : "Выбрать"}
              />
            );
          }
        })}
      </Section>
      <Section title={"Десерты"}>
        {productsData?.map((product) => {
          if (product.category === "dessert") {
            return (
              <ProductCard
                key={product._id}
                image={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                buttonText={product.collect ? "Собрать" : "Выбрать"}
              />
            );
          }
        })}
      </Section>
      <Section title={"Напитки"}>
        {productsData?.map((product) => {
          if (product.category === "drink") {
            return (
              <ProductCard
                key={product._id}
                image={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                buttonText={product.collect ? "Собрать" : "Выбрать"}
              />
            );
          }
        })}
      </Section>
      <Footer />
    </>
  );
}

export default App;
