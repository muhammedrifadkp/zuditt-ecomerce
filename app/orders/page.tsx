import OrderCard from './_components/OrderCard';

export default function OrdersPage() {
  return (
    <>
      <OrderCard 
        status="ongoing"
        restaurant="CUTS"
        time="Picked Up 08:40"
        statusText="Being Delivered"
        estimateTime="25m"
        items={[{ name: "x2 Shrimp Pasta", price: "$20.98" }]}
        total="$20.98"
        action="track"
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