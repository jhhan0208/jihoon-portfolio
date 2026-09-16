"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const RESUME_PDF_PATH = "/resume/Jihoon_Han_Resume.pdf";

export default function ResumePage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || RESUME_PDF_PATH);
  }, []);
  return <div>Redirecting to the resume...</div>;
}
