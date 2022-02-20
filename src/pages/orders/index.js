import React from 'react';
import styled from 'styled-components';
import { Divider, Typography, Grid, Box } from '@material-ui/core';

const OrdersPage = () => {
  return (
    <Box>
      <Grid item>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          My Orders
        </Typography>
        <Divider />
        <OrderContainer>
          <p>Looks like you haven't ordered anything yet!</p>
        </OrderContainer>
      </Grid>
    </Box>
  );
};

export default OrdersPage;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`;
