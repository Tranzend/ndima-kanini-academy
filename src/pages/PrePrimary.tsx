import SectionPage from "@/components/SectionPage";
import prePrimaryImg from "@/assets/pre-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";

const PrePrimary = () => {
  return (
    <SectionPage
      title="Pre-Primary Section"
      subtitle="PP1 & PP2 — Where learning begins with wonder, play, and discovery."
      breadcrumb="Academics"
      heroImage={prePrimaryImg}
      overview={{
        description: [
          "Our Pre-Primary section provides a warm, nurturing environment for children aged 4-6 years. Through the CBC framework, we focus on play-based learning that stimulates curiosity, creativity, and foundational competencies.",
          "Each classroom is designed with learning centres that encourage exploration in language, mathematics, environmental activities, creative arts, and psychomotor skills. Our trained early childhood educators use child-centred approaches to ensure every learner thrives.",
          "We maintain small class sizes to provide individualized attention, and our outdoor play areas are designed to promote physical development and social interaction among our youngest learners.",
        ],
        highlights: [
          { label: "Age Group", value: "4-6 years" },
          { label: "Classes", value: "PP1 & PP2" },
          { label: "Class Size", value: "Max 25" },
          { label: "Teachers", value: "12" },
          { label: "Learning Approach", value: "Play-Based" },
        ],
      }}
      curriculum={{
        description:
          "Our Pre-Primary curriculum is aligned with the KICD CBC guidelines for early years education, focusing on developing foundational competencies through integrated learning activities.",
        subjects: [
          { name: "Language Activities", description: "Building literacy through stories, songs, rhymes, and conversation in English and Kiswahili." },
          { name: "Mathematical Activities", description: "Number concepts, sorting, patterns, and basic problem-solving through hands-on materials." },
          { name: "Environmental Activities", description: "Exploring the natural and social environment through observation, experiments, and field trips." },
          { name: "Creative Activities", description: "Art, music, dance, and drama to develop self-expression and fine motor skills." },
          { name: "Psychomotor Activities", description: "Physical exercises, games, and movement to build coordination and gross motor skills." },
          { name: "Religious Education", description: "Moral values, spiritual growth, and character development through age-appropriate activities." },
        ],
      }}
      excellence={{
        description: "Our Pre-Primary learners consistently demonstrate strong readiness for Lower Primary, thanks to our comprehensive and engaging early years programme.",
        achievements: [
          "100% transition rate to Lower Primary with strong foundational skills in literacy and numeracy.",
          "Annual Pre-Primary Exhibition showcasing creative projects and learning portfolios.",
          "Winner of the Regional Early Years Arts Festival for three consecutive years.",
          "Integration of digital literacy through age-appropriate educational technology tools.",
          "Active parent engagement programme with termly workshops and learning-at-home guides.",
          "Comprehensive assessment through learner portfolios, observations, and competency-based reports.",
        ],
      }}
      gallery={[
        { src: prePrimaryImg, alt: "Pre-Primary outdoor play" },
        { src: studentsImg, alt: "Pre-Primary classroom activities" },
        { src: prePrimaryImg, alt: "Creative arts session" },
      ]}
    />
  );
};

export default PrePrimary;
