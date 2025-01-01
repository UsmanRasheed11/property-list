import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, CssBaseline, Grid, Box } from '@mui/material';
import PropertyCard from './components/PropertyCard';
import './App.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch('/properties.json')
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  useEffect(() => {
    setFilteredProperties(
      properties.filter(property =>
        property.name.toLowerCase().includes(filter.toLowerCase()) ||
        property.description.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, properties]);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: '40px', paddingBottom: '40px' }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: theme => theme.palette.primary.main }}>
          Discover Our Properties
        </Typography>
        <TextField
          label="Search properties"
          variant="outlined"
          fullWidth
          value={filter}
          onChange={e => setFilter(e.target.value)}
          sx={{ marginBottom: '2.5rem', backgroundColor: theme => theme.palette.background.paper, borderRadius: '0.5rem' }}
          InputProps={{
            style: { padding: '0.3rem' },
          }}
        />
        <Grid container spacing={4}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <PropertyCard property={property} />
              </Grid>
            ))
          ) : (
            <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
              <Typography variant="body1" color="textSecondary">
                No properties match your search.
              </Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;