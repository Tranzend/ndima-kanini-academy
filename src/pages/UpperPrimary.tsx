import SectionPage from "@/components/SectionPage";
import upperPrimaryImg from "@/assets/upper-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";

const UpperPrimary = () => {
  return (
    <SectionPage
      title="Upper Primary Section"
      subtitle="Grade 4-6 — Excellence in academics, character, and leadership."
      breadcrumb="Academics"
      heroImage={upperPrimaryImg}
      overview={{
        description: [
          "The Upper Primary section at Green Valley Academy prepares learners in Grades 4 through 6 for academic excellence and successful transition to Junior Secondary. Our rigorous yet supportive programme ensures every learner achieves their full potential.",
          "With a strong focus on STEM education, leadership development, and creative expression, our Upper Primary learners are well-equipped with 21st-century skills. Our dedicated teachers provide structured revision programmes, mentorship, and individualized academic support.",
          "Learners at this level also take on greater responsibility through the Student Council, community service projects, and peer mentoring programmes that build character and leadership skills.",
        ],
        highlights: [
          { label: "Age Group", value: "9-12 years" },
          { label: "Grades", value: "4, 5 & 6" },
          { label: "Class Size", value: "Max 35" },
          { label: "Teachers", value: "20" },
          { label: "Focus", value: "STEM & Leadership" },
        ],
      }}
      curriculum={{
        description:
          "The Upper Primary CBC curriculum builds on the competencies developed in Lower Primary, with increasing depth and rigor across all learning areas in preparation for Junior Secondary.",
        subjects: [
          { name: "English Language", description: "Advanced reading comprehension, essay writing, grammar, and public speaking skills." },
          { name: "Kiswahili Language", description: "Advanced fluency, creative writing, and appreciation of Kiswahili literature." },
          { name: "Mathematics", description: "Advanced arithmetic, algebra basics, geometry, statistics, and mathematical reasoning." },
          { name: "Integrated Science", description: "Biology, chemistry, and physics concepts with practical laboratory experiments." },
          { name: "Social Studies & CRE", description: "History, geography, governance, and moral/religious education." },
          { name: "Agriculture & Nutrition", description: "Practical farming, food systems, and nutrition science." },
          { name: "Creative Arts & Sports", description: "Advanced arts, music, drama, and competitive sports across multiple disciplines." },
          { name: "Computer Science", description: "Coding, digital citizenship, multimedia creation, and computational thinking." },
        ],
      }}
      excellence={{
        description: "Our Upper Primary section has a proud tradition of academic excellence, consistently producing top performers in national assessments and co-curricular competitions.",
        achievements: [
          "Average KCPE mean score of 380+ marks over the past 5 years, with multiple 400+ scorers.",
          "National champions in the Kenya Science and Engineering Fair for two consecutive years.",
          "Inter-school debate champions at both county and national levels.",
          "100% transition rate to top national and county Junior Secondary schools.",
          "Active Student Council programme developing future leaders and responsible citizens.",
          "Award-winning Environmental Conservation Club recognized by NEMA for community impact.",
          "Strong athletics programme producing county and national-level athletes.",
          "Annual Academic Excellence Awards celebrating top performers in every subject.",
        ],
      }}
      gallery={[
        { src: upperPrimaryImg, alt: "Science lab experiment" },
        { src: studentsImg, alt: "Classroom engagement" },
        { src: upperPrimaryImg, alt: "Academic competition" },
      ]}
    />
  );
};

export default UpperPrimary;
