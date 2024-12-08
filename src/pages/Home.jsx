// React
import React from "react";

// Utils
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Database
import products from "../utils/products.json";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage:
            "url(https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733667667/images/photo/mezvvsmaizeg5esekx5c.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Primeiro Carrosel */}
      <Typography variant="h5" sx={{ mt: 3, mb: 2, pl: 2 }}>
        Vouchers
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.slice(0, 6).map((product) => (
          <SwiperSlide>
            <Card
              sx={{ minWidth: 300, position: "relative", margin: "0 auto" }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={product.image}
                  alt={product.title}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {product.price} pontos
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Segundo Carrossel */}
      <Typography variant="h5" sx={{ mt: 3, mb: 2, pl: 2 }}>
        Produtos
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.slice(12, 18).map((product) => (
          <SwiperSlide>
            <Card
              sx={{ minWidth: 300, position: "relative", margin: "0 auto" }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={product.image}
                  alt={product.title}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {product.price} pontos
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
