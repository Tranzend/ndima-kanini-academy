import SectionPage from "@/components/SectionPage";
import prePrimaryImg from "@/assets/pre-primary.jpg";
import studentsImg from "@/assets/students-classroom.jpg";
import culturalImg from "@/assets/cultural.jpg";
import graduationImg from "@/assets/graduation.jpg";

const PrePrimary = () => {
  return (
    <SectionPage
      title="Pre-Primary Section"
      subtitle="PP1 & PP2 — Where learning begins with wonder, play and discovery."
      breadcrumb="Academics"
      heroImage={prePrimaryImg}
      overview={{
        description: [
          "Our Pre-Primary section provides a warm, nurturing environment for children aged 4-6 years. Through Kenya's CBC framework, we focus on play-based learning that stimulates curiosity, creativity and foundational competencies.",
          "Each classroom is designed with learning corners that encourage exploration in language, mathematics, environmental activities, creative arts and psychomotor skills. Our trained early childhood educators use child-centred approaches to ensure every learner thrives.",
          "We maintain small class sizes to provide individualised attention, with safe outdoor play areas designed to promote physical development and social interaction among our youngest learners.",
        ],
        highlights: [
          { label: "Age Group", value: "4-6 years" },
          { label: "Classes", value: "PP1 & PP2" },
          { label: "Class Size", value: "Small groups" },
          { label: "Approach", value: "Play-Based" },
          { label: "Day & Boarding", value: "Available" },
        ],
      }}
      curriculum={{
        description:
          "Our Pre-Primary curriculum is aligned with the KICD CBC guidelines for early years education, focusing on developing foundational competencies through integrated learning activities.",
        subjects: [
          { name: "Language Activities", description: "Building literacy through stories, songs, rhymes and conversation in English and Kiswahili." },
          { name: "Mathematical Activities", description: "Number concepts, sorting, patterns and basic problem-solving through hands-on materials." },
          { name: "Environmental Activities", description: "Exploring the natural and social environment through observation and simple experiments." },
          { name: "Creative Activities", description: "Art, music, dance and drama to develop self-expression and fine motor skills." },
          { name: "Psychomotor Activities", description: "Physical exercises, games and movement to build coordination and gross motor skills." },
          { name: "Religious Education", description: "Moral values, spiritual growth and character development through age-appropriate activities." },
        ],
      }}
      excellence={{
        description: "Our Pre-Primary learners consistently demonstrate strong readiness for Lower Primary, thanks to our comprehensive and engaging early years programme.",
        achievements: [
          "Strong transition to Grade 1 with confident literacy and numeracy foundations.",
          "Annual Pre-Primary exhibition showcasing creative projects and learning portfolios.",
          "Lively participation in music, dance and storytelling competitions.",
          "Integration of age-appropriate digital and play-based learning resources.",
          "Active parent engagement through termly meetings and learning-at-home guides.",
          "Holistic assessment through learner portfolios, observations and competency-based reports.",
        ],
      }}
      gallery={[
        { src: prePrimaryImg, alt: "Pre-Primary play-based learning" },
        { src: studentsImg, alt: "Pre-Primary classroom" },
        { src: culturalImg, alt: "Pre-Primary cultural performance" },
        { src: graduationImg, alt: "Pre-Primary graduation day" },
      ]}
    />
  );
};

export default PrePrimary;
