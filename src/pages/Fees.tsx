import { Download, FileText, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { SCHOOL } from "@/lib/school";

const feesData = [
  {
    section: "Pre-Primary (PP1 & PP2)",
    daily: "Day: On request",
    boarding: "Boarding: On request",
    includes: [
      "Tuition",
      "Learning materials",
      "Snacks & lunch (day)",
      "Meals & accommodation (boarding)",
      "Activity fees",
    ],
  },
  {
    section: "Lower Primary (Grade 1-3)",
    daily: "Day: On request",
    boarding: "Boarding: On request",
    includes: [
      "Tuition",
      "Books & workbooks",
      "Lunch (day) / Meals (boarding)",
      "ICT levy",
      "Co-curricular activities",
    ],
  },
  {
    section: "Upper Primary (Grade 4-6)",
    daily: "Day: On request",
    boarding: "Boarding: On request",
    includes: [
      "Tuition",
      "Books & workbooks",
      "Lunch (day) / Meals (boarding)",
      "Supervised prep (boarders)",
      "Exam & revision materials",
    ],
  },
];

const additionalFees = [
  { item: "Application Fee (one-time)", amount: "On request" },
  { item: "Admission Fee (one-time)", amount: "On request" },
  { item: "Uniform (full set)", amount: "On request" },
  {
    item: "School Transport (per term, day scholars)",
    amount: "Route-dependent",
  },
  { item: "Boarding Requirements", amount: "Provided in joining list" },
];

const Fees = () => {
  return (
    <Layout>
      <PageHero
        title="Fees Structure"
        subtitle="Affordable, transparent fees for both day and boarding learners."
        breadcrumb="Academics"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Action buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SCHOOL.primaryPhone}`}
              className="gold-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-accent-foreground shadow-elevated transition hover:opacity-90"
            >
              <Phone size={18} />
              Call for Current Fees: {SCHOOL.primaryPhoneDisplay}
            </a>
            <button
              onClick={() =>
                alert(
                  "The downloadable fees structure PDF will be available soon. Please call us on " +
                    SCHOOL.primaryPhoneDisplay +
                    " for current rates.",
                )
              }
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary shadow-soft transition hover:bg-primary/10"
            >
              <Download size={18} />
              Download Full Fees Structure (PDF)
            </button>
          </div>

          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
            Specific fee amounts vary by class and day/boarding option. For the
            most up-to-date figures, please contact our school office or visit
            us in Karatina — we'll be happy to share the full structure.
          </p>

          {/* Fees cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {feesData.map((fee) => (
              <div
                key={fee.section}
                className="overflow-hidden rounded-xl bg-card shadow-card"
              >
                <div className="hero-gradient p-5 text-center text-primary-foreground">
                  <h3 className="text-lg font-bold font-serif">
                    {fee.section}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-3 rounded-lg bg-primary/5 p-3 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      {fee.daily}
                    </p>
                  </div>
                  <div className="mb-6 rounded-lg bg-secondary/10 p-3 text-center">
                    <p className="text-sm font-semibold text-secondary">
                      {fee.boarding}
                    </p>
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    Fee Includes:
                  </h4>
                  <ul className="space-y-1.5">
                    {fee.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
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
            <h3 className="mb-6 text-center text-2xl font-bold text-foreground font-serif">
              Additional Fees
            </h3>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <div className="space-y-3">
                {additionalFees.map((fee) => (
                  <div
                    key={fee.item}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {fee.item}
                    </span>
                    <span className="font-semibold text-foreground">
                      {fee.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 mx-auto max-w-2xl rounded-lg border border-secondary/30 bg-secondary/5 p-5">
            <h4 className="mb-2 font-semibold text-foreground">
              Important Notes
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Fees are payable at the beginning of each term</li>
              <li>
                • Sibling discounts may apply — please enquire at the office
              </li>
              <li>• Payment plans are available upon request</li>
              <li>
                • All fees are subject to annual review by the school management
              </li>
              <li>
                • Call{" "}
                <a
                  href={`tel:${SCHOOL.primaryPhone}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {SCHOOL.primaryPhoneDisplay}
                </a>{" "}
                or email{" "}
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {SCHOOL.email}
                </a>{" "}
                for detailed information
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fees;
