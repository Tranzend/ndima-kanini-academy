import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <PageHero title="Application Submitted" breadcrumb="Admissions" />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-md">
              <CheckCircle className="mx-auto mb-4 text-primary" size={64} />
              <h2 className="mb-4 text-2xl font-bold text-foreground font-serif">Thank You!</h2>
              <p className="text-muted-foreground">
                Your application has been received. Our admissions team will review it and contact you
                within 5-7 working days. Please check your email for a confirmation.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero
        title="Student Application"
        subtitle="Begin your child's journey at Green Valley Academy. Fill out the application form below."
        breadcrumb="Admissions"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Info */}
            <div className="mb-10 rounded-xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="mb-2 text-lg font-bold text-foreground font-serif">Admissions Information</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Applications are open for the 2026 academic year</li>
                <li>• Available for Pre-Primary (PP1 & PP2), Lower Primary (Grade 1-3), and Upper Primary (Grade 4-6)</li>
                <li>• A non-refundable application fee of KES 1,000 applies</li>
                <li>• Required documents: Birth certificate, previous school reports (if applicable), passport photos</li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground font-serif">Student Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">First Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Last Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Date of Birth *</label>
                    <input type="date" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Gender *</label>
                    <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-foreground">Section Applying For *</label>
                    <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select Section</option>
                      <option value="pp1">Pre-Primary 1 (PP1)</option>
                      <option value="pp2">Pre-Primary 2 (PP2)</option>
                      <option value="grade1">Grade 1</option>
                      <option value="grade2">Grade 2</option>
                      <option value="grade3">Grade 3</option>
                      <option value="grade4">Grade 4</option>
                      <option value="grade5">Grade 5</option>
                      <option value="grade6">Grade 6</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground font-serif">Parent/Guardian Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Full Name *</label>
                    <input type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Relationship *</label>
                    <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select</option>
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="guardian">Guardian</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Phone Number *</label>
                    <input type="tel" required placeholder="+254" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Email Address *</label>
                    <input type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Additional Information</label>
                <textarea rows={4} placeholder="Any special needs, medical conditions, or other information we should know..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>

              <button
                type="submit"
                className="gold-gradient inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-secondary-foreground shadow-elevated transition hover:opacity-90"
              >
                Submit Application
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
