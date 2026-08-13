import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  animate?: boolean;
}

export default function PageContainer({
  title,
  description,
  children,
  animate = true,
}: PageContainerProps) {
  return (
    <ClientPageWrapper animate={animate}>
      <div>
        <PageHeader title={title} description={description} />
        <div className="mx-4 sm:mx-6 lg:mx-8 max-w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
