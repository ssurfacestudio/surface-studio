import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Surface Studio for catalogue requests, trade enquiries, and custom marble furniture commissions.",
};

const details = [
  { icon: MapPin, label: "Workshop", value: "Jaipur , Rajasthan , 302015, India" },
  { icon: Mail, label: "Email", value: "ssurfacestudio@gmail.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 77928237189" },
  { icon: Clock, label: "Studio Hours", value: "Mon–Sat, 10:00–19:00 IST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your space."
        description="Catalogue requests, trade enquiries and custom commissions — our team replies within one business day."
        image="https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-20 dark:bg-charcoal md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 md:px-8 lg:grid-cols-2 lg:px-12">
          <ScrollReveal>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Send an Enquiry</p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory">
              We'll get back to you within a day.
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40">
                    <d.icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.1em] text-charcoal/45 dark:text-ivory/45">
                      {d.label}
                    </p>
                    <p className="font-body text-sm text-charcoal dark:text-ivory">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 aspect-[4/3] overflow-hidden rounded-lg">
              <iframe
                title="Surface Studio location map"
                src="https://maps.google.com/maps?q=Kishangarh%2C%20Rajasthan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
