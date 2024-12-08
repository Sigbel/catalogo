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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "300px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733667667/images/photo/mezvvsmaizeg5esekx5c.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
              mt: 3,

              textAlign: "center",
            }}
          >
            Troque seus pontos por benefícios incríveis!
          </Typography>
        </Box>
      </Box>

      {/* Primeiro Carrosel */}
      <Typography variant="h5" sx={{ mt: 3, mb: 2, pl: 4, fontWeight: "Bold" }}>
        Vouchers
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: "20px" }}
      >
        {products.slice(0, 6).map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              sx={{
                minWidth: 280,
                maxWidth: 300,
                margin: "0 auto",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.title}
                ></CardMedia>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Typography>
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
      <Typography variant="h5" sx={{ mt: 3, mb: 2, pl: 4, fontWeight: "Bold" }}>
        Produtos
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: "20px" }}
      >
        {products.slice(12, 18).map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              sx={{
                minWidth: 280,
                maxWidth: 300,
                margin: "0 auto",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.title}
              ></CardMedia>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {product.price} pontos
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
