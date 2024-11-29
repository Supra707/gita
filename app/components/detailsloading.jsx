import { Card, Skeleton } from "@nextui-org/react";

export default function Detailsloading() {
  return (
    <Card className="w-full h-screen p-8 space-y-5" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-64 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-6">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-6 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
