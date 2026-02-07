import SectionPage from "@/components/SectionPage";
import lowerPrimaryImg from "@/assets/lower-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";

const LowerPrimary = () => {
  return (
    <SectionPage
      title="Lower Primary Section"
      subtitle="Grade 1-3 — Building core competencies for lifelong learning."
      breadcrumb="Academics"
      heroImage={lowerPrimaryImg}
      overview={{
        description: [
          "The Lower Primary section at Green Valley Academy serves learners in Grades 1 through 3, building on the foundation laid in Pre-Primary. Our CBC approach ensures that each child develops essential competencies in communication, collaboration, critical thinking, and creativity.",
          "Our experienced teachers use differentiated instruction to meet individual learning needs, incorporating a blend of direct teaching, group work, projects, and hands-on activities. Technology-enhanced learning is integrated across all subjects.",
          "We also prioritize social-emotional learning, helping children build resilience, self-awareness, and positive relationships with peers and teachers.",
        ],
        highlights: [
          { label: "Age Group", value: "6-9 years" },
          { label: "Grades", value: "1, 2 & 3" },
          { label: "Class Size", value: "Max 30" },
          { label: "Teachers", value: "18" },
          { label: "Approach", value: "CBC Integrated" },
        ],
      }}
      curriculum={{
        description:
          "The Lower Primary curriculum follows the KICD CBC framework, with learning organized around key subjects and cross-cutting competencies that prepare learners for Upper Primary and beyond.",
        subjects: [
          { name: "English Language", description: "Reading, writing, speaking, and listening skills through stories, comprehension, and grammar." },
          { name: "Kiswahili Language", description: "Developing fluency in Kenya's national language through integrated activities and creative expression." },
          { name: "Mathematics", description: "Numbers, operations, measurement, geometry, and data handling through practical applications." },
          { name: "Science & Technology", description: "Exploring the natural world, scientific inquiry, and basic technology concepts." },
          { name: "Social Studies", description: "Understanding community, culture, geography, and civic responsibility." },
          { name: "Religious Education (CRE/IRE)", description: "Moral development and spiritual growth aligned with family values." },
          { name: "Creative Arts & Sports", description: "Visual arts, performing arts, and physical education for holistic development." },
          { name: "Digital Literacy", description: "Introduction to computers, coding basics, and responsible use of technology." },
        ],
      }}
      excellence={{
        description: "Our Lower Primary learners consistently achieve strong outcomes in both academic and co-curricular activities, setting the stage for success in Upper Primary.",
        achievements: [
          "Consistent top performance in county-level literacy and numeracy assessments.",
          "Active participation and medals in inter-school Science and Innovation fairs.",
          "Award-winning debating team at the sub-county and county levels.",
          "Integration of project-based learning resulting in impressive student-led exhibitions.",
          "Strong emphasis on reading culture with the annual Read-A-Thon reaching 100% participation.",
          "Comprehensive sports programme producing regional champions in athletics and swimming.",
        ],
      }}
      gallery={[
        { src: lowerPrimaryImg, alt: "Students reading in library" },
        { src: studentsImg, alt: "Classroom learning" },
        { src: lowerPrimaryImg, alt: "Group activities" },
      ]}
    />
  );
};

export default LowerPrimary;
