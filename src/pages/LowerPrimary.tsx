import SectionPage from "@/components/SectionPage";
import lowerPrimaryImg from "@/assets/lower-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";
import sportsImg from "@/assets/sports.jpg";
import assemblyImg from "@/assets/assembly.jpg";

const LowerPrimary = () => {
  return (
    <SectionPage
      title="Lower Primary Section"
      subtitle="Grade 1-3 — Building core competencies for lifelong learning."
      breadcrumb="Academics"
      heroImage={lowerPrimaryImg}
      overview={{
        description: [
          "The Lower Primary section at Ndima Kanini Academy serves learners in Grades 1 to 3, building on the foundation laid in Pre-Primary. Our CBC approach ensures that each child develops essential competencies in communication, collaboration, critical thinking and creativity.",
          "Our experienced teachers use differentiated instruction to meet individual learning needs, blending direct teaching, group work, projects and hands-on activities. Reading, writing and numeracy are reinforced daily.",
          "We also prioritise social-emotional learning, helping children build resilience, self-awareness and positive relationships with peers and teachers — both as day scholars and boarders.",
        ],
        highlights: [
          { label: "Age Group", value: "6-9 years" },
          { label: "Grades", value: "1, 2 & 3" },
          { label: "Class Size", value: "Manageable groups" },
          { label: "Approach", value: "CBC Integrated" },
          { label: "Day & Boarding", value: "Available" },
        ],
      }}
      curriculum={{
        description:
          "The Lower Primary curriculum follows the KICD CBC framework, with learning organised around key subjects and cross-cutting competencies that prepare learners for Upper Primary.",
        subjects: [
          { name: "English Language", description: "Reading, writing, speaking and listening through stories, comprehension and grammar." },
          { name: "Kiswahili Language", description: "Developing fluency in Kenya's national language through integrated activities and creative expression." },
          { name: "Mathematics", description: "Numbers, operations, measurement, geometry and data handling through practical applications." },
          { name: "Environmental & Hygiene", description: "Exploring the natural world, healthy living and responsible citizenship." },
          { name: "Religious Education (CRE/IRE)", description: "Moral development and spiritual growth aligned with family values." },
          { name: "Creative Arts & PE", description: "Visual arts, performing arts and physical education for holistic development." },
          { name: "Movement Activities", description: "Games and exercises that build coordination, teamwork and discipline." },
          { name: "Indigenous Languages", description: "Appreciation of mother tongue and local cultural heritage." },
        ],
      }}
      excellence={{
        description: "Our Lower Primary learners consistently achieve strong outcomes in both academic and co-curricular activities, setting the stage for success in Upper Primary.",
        achievements: [
          "Strong reading culture supported by a well-stocked library and weekly read-alouds.",
          "Active participation in sub-county and county-level music, drama and verse-speaking.",
          "Project-based learning resulting in impressive learner-led exhibitions.",
          "Fun, regular numeracy and spelling competitions to keep skills sharp.",
          "Comprehensive sports and games programme building teamwork and fitness.",
          "Detailed termly competency-based assessment reports shared with every parent.",
        ],
      }}
      gallery={[
        { src: lowerPrimaryImg, alt: "Lower Primary classroom" },
        { src: studentsImg, alt: "Engaged learners" },
        { src: sportsImg, alt: "Games and sports" },
        { src: assemblyImg, alt: "Morning assembly" },
      ]}
    />
  );
};

export default LowerPrimary;
