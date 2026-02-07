import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Green Valley Academy. We'd love to hear from you."
        breadcrumb="Contact"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact info */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground font-serif">Get In Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: "P.O. Box 12345\nGreen Valley Road, Off Kiambu Road\nNairobi, Kenya" },
                  { icon: Phone, title: "Phone", content: "+254 700 000 000\n+254 711 111 111" },
                  { icon: Mail, title: "Email", content: "info@greenvalleyacademy.ac.ke\nadmissions@greenvalleyacademy.ac.ke" },
                  { icon: Clock, title: "Office Hours", content: "Monday - Friday: 7:00 AM - 5:00 PM\nSaturday: 8:00 AM - 12:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl bg-card p-10 shadow-card text-center">
                  <CheckCircle className="mb-4 text-primary" size={48} />
                  <h3 className="mb-2 text-xl font-bold text-foreground font-serif">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll respond within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-xl bg-card p-6 shadow-card md:p-8">
                  <h3 className="mb-6 text-xl font-bold text-foreground font-serif">Send Us a Message</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Your Name *</label>
                      <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Email Address *</label>
                      <input type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Phone Number</label>
                      <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Subject *</label>
                      <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                        <option value="">Select</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academics">Academic Information</option>
                        <option value="fees">Fees & Payments</option>
                        <option value="general">General Inquiry</option>
                        <option value="complaint">Complaint / Feedback</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-1 block text-sm font-medium text-foreground">Message *</label>
                      <textarea rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-muted md:h-80">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 text-muted-foreground" size={32} />
            <p className="text-sm text-muted-foreground">Google Maps embed would go here</p>
            <p className="text-xs text-muted-foreground">Green Valley Road, Off Kiambu Road, Nairobi</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
