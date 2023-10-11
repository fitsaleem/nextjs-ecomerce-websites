import Container from "@/app/components/Container";
import OrderDetails from "@/app/components/OrderDetails";
import React from "react";

const OrderPage = () => {
  return (
    <div>
      <Container>
        <OrderDetails />
      </Container>
    </div>
  );
};

export default OrderPage;