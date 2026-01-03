import { NotificationList } from "@/components/animate-ui/components/community/notification-list";

interface ChaiCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export default function ChaiCard({ name, price, isSpecial }: ChaiCardProp) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{isSpecial && "⭐"}</p>
      <NotificationList />
      <p>{price}</p>
    </div>
  );
}
