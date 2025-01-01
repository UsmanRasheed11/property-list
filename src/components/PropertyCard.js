import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function PropertyCard({ property }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: '14rem', overflow: 'hidden' }}>
        {property.images.length > 0 ? (
          <Swiper spaceBetween={10} slidesPerView={1} loop>
            {property.images.map((image, index) => (
              <SwiperSlide key={index}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={`${property.name} image ${index + 1}`}
                  sx={{ objectFit: 'cover', width: '100%' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <CardMedia
            component="img"
            height="200"
            image={"https://picsum.photos/seed/7/400/300"}
            alt={property.name}
            sx={{ objectFit: 'cover', width: '100%' }}
          />
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, padding: '1rem' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {property.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {property.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;