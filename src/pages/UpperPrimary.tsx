import SectionPage from "@/components/SectionPage";
import upperPrimaryImg from "@/assets/upper-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";
import sportsImg from "@/assets/sports.jpg";
import scoutsImg from "@/assets/scouts.jpg";

const UpperPrimary = () => {
  return (
    <SectionPage
      title="Upper Primary Section"
      subtitle="Grade 4-6 — Excellence in academics, character and leadership."
      breadcrumb="Academics"
      heroImage={upperPrimaryImg}
      overview={{
        description: [
          "The Upper Primary section at Ndima Kanini Academy prepares learners in Grades 4 to 6 for academic excellence and successful transition to Junior Secondary. Our rigorous yet supportive programme ensures every learner achieves their full potential.",
          "With a strong focus on STEM, leadership and creative expression, our Upper Primary learners are well-equipped with 21st-century skills. Our dedicated teachers provide structured revision, mentorship and individualised support — including supervised evening prep for our boarders.",
          "Learners at this level take on greater responsibility through prefect duties, clubs, community service projects and peer mentoring programmes that build character and leadership skills.",
        ],
        highlights: [
          { label: "Age Group", value: "9-12 years" },
          { label: "Grades", value: "4, 5 & 6" },
          { label: "Class Size", value: "Manageable groups" },
          { label: "Focus", value: "STEM & Leadership" },
          { label: "Day & Boarding", value: "Available" },
        ],
      }}
      curriculum={{
        description:
          "The Upper Primary CBC curriculum builds on competencies developed in Lower Primary, with increasing depth and rigour across all learning areas in preparation for Junior Secondary.",
        subjects: [
          {
            name: "English Language",
            description:
              "Advanced reading comprehension, essay writing, grammar and public speaking.",
          },
          {
            name: "Kiswahili Language",
            description:
              "Advanced fluency, creative writing and appreciation of Kiswahili literature.",
          },
          {
            name: "Mathematics",
            description:
              "Advanced arithmetic, basic algebra, geometry, statistics and mathematical reasoning.",
          },
          {
            name: "Integrated Science",
            description:
              "Biology, chemistry and physics concepts with practical experiments.",
          },
          {
            name: "Social Studies & CRE",
            description:
              "History, geography, governance and moral/religious education.",
          },
          {
            name: "Agriculture & Nutrition",
            description:
              "Practical farming, food systems and nutrition science.",
          },
          {
            name: "Creative Arts & Sports",
            description: "Advanced arts, music, drama and competitive sports.",
          },
          {
            name: "Computer Science",
            description:
              "Coding, digital citizenship, multimedia creation and computational thinking.",
          },
        ],
      }}
      excellence={{
        description:
          "Our Upper Primary section has a proud tradition of academic excellence, consistently producing top performers in assessments and co-curricular competitions.",
        achievements: [
          "Strong performance in KPSEA and end-of-year competency assessments.",
          "Active participation and awards in regional Science and Innovation fairs.",
          "Inter-school debate, music and drama festival representation.",
          "Successful transition of pupils to top Junior Secondary schools.",
          "Vibrant prefect body and clubs developing future leaders and responsible citizens.",
          "Environmental and community service programmes promoting compassion in action.",
          "Strong athletics programme producing zonal and county-level athletes.",
          "Annual Academic Excellence Awards celebrating top performers in every subject.",
        ],
      }}
      gallery={[
        { src: upperPrimaryImg, alt: "Science experiment in class" },
        { src: studentsImg, alt: "Classroom engagement" },
        { src: sportsImg, alt: "Athletics on the field" },
        { src: scoutsImg, alt: "Grade 6 scouts day" },
      ]}
    />
  );
};

export default UpperPrimary;
