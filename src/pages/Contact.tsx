import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

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
        subtitle={`Get in touch with ${SCHOOL.name}. We'd love to hear from you.`}
        breadcrumb="Contact"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact info */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-foreground font-serif">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      {SCHOOL.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {SCHOOL.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <ul className="text-sm text-muted-foreground">
                      {SCHOOL.phones.map((p) => (
                        <li key={p}>
                          <a
                            href={`tel:+254${p.replace(/\s|^0/g, "")}`}
                            className="hover:text-primary hover:underline"
                          >
                            {p}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href={`mailto:${SCHOOL.email}`}
                      className="text-sm text-muted-foreground hover:text-primary hover:underline"
                    >
                      {SCHOOL.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Office Hours
                    </h4>
                    <p className="whitespace-pre-line text-sm text-muted-foreground">
                      {SCHOOL.officeHours}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Facebook className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Facebook</h4>
                    <a
                      href={SCHOOL.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline"
                    >
                      facebook.com/ndimakaniniacademy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl bg-card p-10 shadow-card text-center">
                  <CheckCircle className="mb-4 text-primary" size={48} />
                  <h3 className="mb-2 text-xl font-bold text-foreground font-serif">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll respond within 24-48
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl bg-card p-6 shadow-card md:p-8"
                >
                  <h3 className="mb-6 text-xl font-bold text-foreground font-serif">
                    Send Us a Message
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="07xx xxx xxx"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      >
                        <option value="">Select</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academics">Academic Information</option>
                        <option value="boarding">Boarding Inquiry</option>
                        <option value="fees">Fees & Payments</option>
                        <option value="general">General Inquiry</option>
                        <option value="complaint">Complaint / Feedback</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-1 block text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      />
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

      {/* Map */}
      <section className="h-72 bg-muted md:h-96">
        <iframe
          title={`${SCHOOL.name} location in Karatina`}
          src="https://www.google.com/maps?q=Karatina,Kenya&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Layout>
  );
};

export default Contact;
