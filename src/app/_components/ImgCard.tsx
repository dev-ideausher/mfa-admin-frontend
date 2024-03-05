import { Card } from "antd";
export default function ImgCard() {
  const { Meta } = Card;
  return (
    <Card
      style={{
        marginTop: 5,
        marginBottom: 5,
      }}
      hoverable
      cover={<img src="/images/exercise.png" alt="exercise" />}
    >
      <Meta title="Squats" description="Medium Quadriceps Gym" />
    </Card>
  );
}
