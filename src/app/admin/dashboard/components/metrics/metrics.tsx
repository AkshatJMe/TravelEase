import { Card, CardHeader, CardDescription } from "@/components/ui/card";

import React from "react";

const Metrics = ({ title, value }: { title: string; value: number }) => {
  return (
    <Card className=" bg-opacity-40">
      <CardHeader className="text-lg">{title}</CardHeader>
      <CardDescription className="text-5xl font-semibold">
        {value}
      </CardDescription>
    </Card>
  );
};

export default Metrics;
