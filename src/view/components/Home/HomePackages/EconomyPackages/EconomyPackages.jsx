import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import kiteIcon from '../../../../../assets/images/kite.png';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Link } from 'react-router-dom';

const EconomyPackages = () => {
  // Dummy data for packages
  const dummyPackages = [
    {
      _id: 1,
      packageName: 'Package 1',
      totalMb: 100,
      feature1: 'Feature 1',
      feature2: 'Feature 2',
      feature3: 'Feature 3',
      feature4: 'Feature 4',
      price: 50,
      packageType: 'Economy',
    },
    {
      _id: 2,
      packageName: 'Package 2',
      totalMb: 200,
      feature1: 'Feature 1',
      feature2: 'Feature 2',
      feature3: 'Feature 3',
      feature4: 'Feature 4',
      price: 75,
      packageType: 'Economy',
    },
    {
        _id: 3,
        packageName: 'Package 2',
        totalMb: 200,
        feature1: 'Feature 1',
        feature2: 'Feature 2',
        feature3: 'Feature 3',
        feature4: 'Feature 4',
        price: 75,
        packageType: 'Economy',
      },
    // Add more dummy package data as needed
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid container item spacing={4}>
          {dummyPackages.map((packageData) => (
            <Grid
              key={packageData._id}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
            >
              <Card sx={{ minHeight: 850, width: '100%' }}>
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      textAlign: 'center',
                      p: 1,
                      color: 'white',
                      display: 'grid',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={kiteIcon} alt="" />
                    <h2 style={{ padding: '10px 0' }} className="text-2xl">
                      {packageData.packageName}
                    </h2>
                  </Box>
                  <Box
                    className="package-content"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: '20px 0 0 0',
                    }}
                  >
                    <Typography sx={{ mt: -5, fontSize: '25px' }}>
                      UPTO
                    </Typography>
                    <Typography sx={{ fontSize: '100px', fontWeight: 600 }}>
                      {packageData.totalMb}
                    </Typography>
                    <Typography sx={{ ml: 2 }}>
                      <h3>Mbps</h3>
                      <p>Unlimited</p>
                      <p>Uses</p>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: '30px 20px',
                      backgroundColor: 'red',
                      borderRadius: '0px 20px 20px 0',
                      color: 'white',
                    }}
                  >
                    <Typography sx={{ display: 'flex', alignItems: 'start' }}>
                      <AddBoxOutlinedIcon color="black" sx={{ mr: 2 }} />
                      {packageData.feature1}
                    </Typography>
                    <Typography
                      sx={{ display: 'flex', alignItems: 'start', mt: 2 }}
                    >
                      <AddBoxOutlinedIcon color="black" sx={{ mr: 2 }} />
                      {packageData.feature2}
                    </Typography>
                    <Typography
                      sx={{ display: 'flex', alignItems: 'start', mt: 2 }}
                    >
                      <AddBoxOutlinedIcon color="black" sx={{ mr: 2 }} />
                      {packageData.feature3}
                    </Typography>
                    <Typography
                      sx={{ display: 'flex', alignItems: 'start', mt: 2 }}
                    >
                      <AddBoxOutlinedIcon color="black" sx={{ mr: 2 }} />
                      {packageData.feature4}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: '30px 0 ',
                    }}
                  >
                    <Typography sx={{ fontSize: '60px' }}>
                      {packageData.price}
                    </Typography>
                    <Typography sx={{ ml: 1 }}>
                      <h4>Monthly Charge</h4>
                      <h2 style={{ color: 'red' }}>UGX</h2>
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Link to={`/registration/${packageData._id}`}>
                    <Button sx={{ p: '15px 50px' }} variant="contained">
                      CHOOSE
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EconomyPackages;
