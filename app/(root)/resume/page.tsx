"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const RESUME_PDF_PATH = "/resume/한지훈_기본_이력서.pdf";

export default function ResumePage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || RESUME_PDF_PATH);
  }, []);
  return <div>Redirecting to the resume...</div>;
}
