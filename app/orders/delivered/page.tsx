import OrderCard from '../_components/OrderCard';

export default function DeliveredOrdersPage() {
  return (
    <>
      <OrderCard 
        status="delivered"
        restaurant="CUTS"
        time="Delivered"
        items={[
          { name: "x1 Shrimp Pasta", price: "$20.98" },
          { name: "x1 Garlic Noodles", price: "$4.88" }
        ]}
        total="$25.86"
        action="review"
      />
      <OrderCard 
        status="delivered"
        restaurant="CUTS"
        time="Delivered"
        items={[
          { name: "x1 Shrimp Pasta", price: "$20.98" },
          { name: "x1 Garlic Noodles", price: "$4.88" }
        ]}
        total="$25.86"
        action="review"
      />
    </>
  );
}