import { Metadata } from "next";

import Image from "next/image";



import PageContainer from "@/components/common/page-container";

import ContactInfoPanel from "@/components/contact/contact-info-panel";

import { ContactForm } from "@/components/forms/contact-form";

import { pagesConfig } from "@/config/pages";

import { siteConfig } from "@/config/site";

import contactPhoto from "@/public/contact-photo.jpg";



export const metadata: Metadata = {

  title: pagesConfig.contact.metadata.title,

  description: pagesConfig.contact.metadata.description,

};



export default function ContactPage() {

  return (

    <PageContainer

      title={pagesConfig.contact.title}

      description={pagesConfig.contact.description}

    >

      <div className="flex min-h-[calc(100vh-16rem)] flex-col gap-8 lg:flex-row lg:justify-between">

        <div className="w-full max-w-xl flex-shrink-0 self-start">

          <ContactForm />

        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-4 self-center sm:max-w-none sm:flex-row sm:items-stretch lg:mr-60 lg:self-start">

          <div className="flex h-full w-full max-w-[30rem] flex-shrink-0 sm:w-80">

            <ContactInfoPanel />

          </div>

          <div className="relative min-h-0 w-36 self-stretch overflow-hidden rounded-lg border border-border sm:w-40">

            <Image

              src={contactPhoto}

              alt={`${siteConfig.authorName} profile photo`}

              fill

              className="object-cover"

              sizes="(max-width: 640px) 144px, 160px"

            />

          </div>

        </div>

      </div>

    </PageContainer>

  );

}


