"use client";

import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Analytics = () => {
  return (
    <Tabs className="flex flex-col flex-1" defaultValue="information">
      <TabsList className="bg-transparent flex justify-start">
        <TabsTrigger value="information">Information</TabsTrigger>
        <TabsTrigger value="code">Improved code</TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <Skeleton className="w-[300px] h-full bg-gray-700" />
      </TabsContent>
      <TabsContent value="code">
        <Skeleton className="w-[300px] h-full bg-muted" />
      </TabsContent>
    </Tabs>
  );
};
