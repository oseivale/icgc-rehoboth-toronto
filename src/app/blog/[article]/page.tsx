"use client";

import PageWrapper from "@/app/components/page-wrapper";
import BlogDetails from "@/app/components/sections/blog/article";

export default function BlogDetailPage() {
  return (
    <PageWrapper header={"ARTICLE"}>
      <BlogDetails />
    </PageWrapper>
  );
};