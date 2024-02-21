"use client";

import React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

interface Props {
  children?: React.ReactNode;
}

const client = new QueryClient();

const Providers: React.FC<Props> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
