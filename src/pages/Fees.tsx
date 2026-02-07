import { Download, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const feesData = [
  {
    section: "Pre-Primary (PP1 & PP2)",
    termlyFee: "KES 35,000",
    annualFee: "KES 105,000",
    includes: ["Tuition", "Learning materials", "Snacks & lunch", "Activity fees", "Medical levy"],
  },
  {
    section: "Lower Primary (Grade 1-3)",
    termlyFee: "KES 45,000",
    annualFee: "KES 135,000",
    includes: ["Tuition", "Textbooks & workbooks", "Lunch programme", "ICT levy", "Co-curricular activities"],
  },
  {
    section: "Upper Primary (Grade 4-6)",
    termlyFee: "KES 55,000",
    annualFee: "KES 165,000",
    includes: ["Tuition", "Textbooks & workbooks", "Lunch programme", "STEM Lab access", "Exam & revision materials", "Co-curricular activities"],
  },
];

const additionalFees = [
  { item: "Application Fee (one-time)", amount: "KES 1,000" },
  { item: "Admission Fee (one-time)", amount: "KES 5,000" },
  { item: "Uniform (full set)", amount: "KES 4,500" },
  { item: "School Transport (per term)", amount: "KES 8,000 - 15,000" },
  { item: "School Bus (optional)", amount: "Route-dependent" },
];

const Fees = () => {
  return (
    <Layout>
      <PageHero
        title="Fees Structure"
        subtitle="Transparent and competitive fee structure for all sections."
        breadcrumb="Academics"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Download button */}
          <div className="mb-10 flex justify-center">
            <button className="gold-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-secondary-foreground shadow-elevated transition hover:opacity-90">
              <Download size={18} />
              Download Full Fees Structure (PDF)
            </button>
          </div>

          {/* Fees cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {feesData.map((fee) => (
              <div key={fee.section} className="overflow-hidden rounded-xl bg-card shadow-card">
                <div className="hero-gradient p-5 text-center text-primary-foreground">
                  <h3 className="text-lg font-bold font-serif">{fee.section}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4 text-center">
                    <p className="text-sm text-muted-foreground">Per Term</p>
                    <p className="text-2xl font-bold text-foreground font-serif">{fee.termlyFee}</p>
                  </div>
                  <div className="mb-6 rounded-lg bg-secondary/10 p-3 text-center">
                    <p className="text-xs text-muted-foreground">Annual (3 Terms)</p>
                    <p className="text-lg font-bold text-secondary">{fee.annualFee}</p>
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">Fee Includes:</h4>
                  <ul className="space-y-1.5">
                    {fee.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText size={12} className="shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional fees */}
          <div className="mt-12 mx-auto max-w-2xl">
            <h3 className="mb-6 text-center text-2xl font-bold text-foreground font-serif">Additional Fees</h3>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="space-y-3">
                {additionalFees.map((fee) => (
                  <div key={fee.item} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground">{fee.item}</span>
                    <span className="font-semibold text-foreground">{fee.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 mx-auto max-w-2xl rounded-lg border border-secondary/30 bg-secondary/5 p-5">
            <h4 className="mb-2 font-semibold text-foreground">Important Notes</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Fees are payable at the beginning of each term</li>
              <li>• Sibling discounts of 10% apply for the second child and 15% for the third</li>
              <li>• Scholarships available for exceptional academic performers</li>
              <li>• Fee payment plans available upon request — contact the accounts office</li>
              <li>• All fees are subject to annual review by the Board of Directors</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fees;
