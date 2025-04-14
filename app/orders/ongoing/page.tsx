import OrderCard from '../_components/OrderCard';

export default function OngoingOrdersPage() {
  return (
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
  );
}