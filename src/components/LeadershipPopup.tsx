import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, Award, Target, Lightbulb, Users } from "lucide-react";

interface LeaderBio {
  name: string;
  designation: string;
  phone: string;
  email: string;
  shortBio: string;
  fullBio: string;
  expertise?: string[];
  image?: string;
}

interface LeadershipPopupProps {
  isOpen: boolean;
  onClose: () => void;
  leader: LeaderBio | null;
}

export function LeadershipPopup({ isOpen, onClose, leader }: LeadershipPopupProps) {
  if (!leader) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{leader.name}</DialogTitle>
          <p className="text-muted-foreground font-medium">{leader.designation}</p>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:${leader.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {leader.phone}
            </a>
            <a 
              href={`mailto:${leader.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {leader.email}
            </a>
          </div>

          {/* Full Biography */}
          <div className="prose prose-invert max-w-none">
            <div 
              className="text-muted-foreground leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: leader.fullBio }}
            />
          </div>

          {/* Expertise */}
          {leader.expertise && leader.expertise.length > 0 && (
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {leader.expertise.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const leadershipData: LeaderBio[] = [
  {
    name: "Anitha Vaddi",
    designation: "Chief Executive Officer (CEO)",
    phone: "+91 87906 82929",
    email: "anitha.vaddi@cognitoinsights.ai",
    shortBio: "Strategic CEO with 21+ years in software architecture and cross-functional leadership, specializing in tech-led process redesign and multi-market expansions.",
    fullBio: `<strong>Chief Executive Officer | Enterprise Strategist | Digital Transformation Leader</strong>

Strategic CEO known for navigating the intersection of emerging technology and global business complexity. With a 21-year career rooted in software architecture and cross-functional leadership, I specialize in ruthlessly protecting margins through tech-led process redesign while spearheading multi-market expansions.

A veteran of highly regulated sectors (Insurance, Pharmacy, Wealth Management), I bridge the gap between technical feasibility and Profit & Loss reality. I am committed to human-centered leadership, ensuring that digital fluency and AI adoption are balanced with organizational trust and ethical governance to future-proof the enterprise against shifting global macro conditions.`,
    expertise: [
      "Strategic Talent Alignment: Mapping training curricula to Fortune 500 partners",
      "Curriculum Architecture: 21 years of IT and Cloud experience",
      "Operational Scaling: Managing P&L and growth strategy",
      "Stakeholder Ecosystem Management: Building deep relationships with HR Directors, CTOs",
      "Market Intelligence: Deep domain knowledge in Banking, Pharma sectors"
    ]
  },
  {
    name: "Dr. Venkat Yalla",
    designation: "Chief Technology Officer (CTO)",
    phone: "+91 99483 88000",
    email: "venkat.yalla@cognitoinsights.ai",
    shortBio: "With 28+ years in Computer Science Engineering and Research, Prof. Venkat drives innovation with purpose, bridging academic rigor with industrial problem-solving.",
    fullBio: `<strong>Director, Cognito Insights Solutions Pvt Ltd</strong>

<em>"Bridging the Gap Between Complex Theory and Real-World Solutions"</em>

With over 28 years of distinguished experience in Computer Science Engineering and Research, Prof. Yalla Venkat brings a unique depth of knowledge to the corporate leadership of Cognito Insights Solutions. A versatile senior technologist, he combines nearly three decades of academic rigor with a pragmatic approach to industrial problem-solving.

Transitioning from a tenure as a Senior Educationist and Researcher to the Director of this organization, Prof. Venkat drives a singular mission: <strong>Innovation with Purpose</strong>. He believes that technology must serve society, a philosophy that ensures Cognito Insights provides solutions that are logical, efficient, and socially relevant.

<strong>Strategic Vision & Leadership</strong>

As Director, Prof. Venkat spearheads the company's vision of integrating emerging technologies with practical business applications. His leadership style is rooted in self-motivation and dynamic mentorship, fostering a culture where intrapreneurship thrives.

Under his guidance, the company culture is defined by three pillars:
• <strong>Deep R&D:</strong> Leveraging doctoral-level research expertise for cutting-edge solutions
• <strong>Practical Application:</strong> Engineering software that resolves tangible, real-world issues
• <strong>Future-Readiness:</strong> Maintaining focus on emerging technologies`,
    expertise: [
      "Visionary Leadership in Computer Science",
      "R&D & Emerging Technology Direction",
      "Talent Development from undergraduate to Ph.D. levels",
      "Strategic Problem Solving with Practical Intelligence",
      "Entrepreneurial Mindset fostering agile thinking"
    ]
  },
  {
    name: "Dr. A. Swarna Latha Yalla",
    designation: "Chief Operating Officer (COO)",
    phone: "+91 94404 83339",
    email: "swarna.yalla@cognitoinsights.ai",
    shortBio: "With 14+ years in healthcare, specializing in Cardio-Pulmonary care and Simulation-Based Learning, awarded Gold Medal for excellence in medical education.",
    fullBio: `<strong>Director, Cognito Insights Pvt Ltd</strong>
<em>MPT (Cardio-Pulmonary), BPT | Simulation Education Specialist</em>

With over 14 years of diverse experience in the healthcare sector, Dr. Swarna Latha brings a robust combination of clinical expertise and administrative leadership to Cognito Insights Pvt Ltd. Holding a Master's degree in Physiotherapy specialized in Cardio-Pulmonary care, Dr. Swarna has transitioned from hands-on patient rehabilitation to pioneering advancements in medical education.

Prior to leading Cognito Insights, Dr. Swarna served as an Assistant Manager at the GSL SMART LAB, where they spearheaded initiatives in Simulation-Based Learning (SBL). A recognized expert in the field, Dr. Swarna was awarded a <strong>Gold Medal</strong> for their paper on Simulation-Based Medical Education and has successfully organized international conferences (Similcon 19) and large-scale public health workshops.

At Cognito Insights, Dr. Swarna leverages this deep understanding of healthcare dynamics, clinical management, and instructional design to drive value and innovation. Dr. Swarna is committed to bridging the gap between theoretical medical knowledge and practical application.`,
    expertise: [
      "Healthcare Management & Operations",
      "Simulation-Based Learning (SBL) Strategy",
      "Cardio-Pulmonary Rehabilitation",
      "Medical Conference & Event Orchestration"
    ]
  },
  {
    name: "Reddi Pratap Chowdary",
    designation: "Director of Operations",
    phone: "+91 87906 72929",
    email: "pratap.reddi@cognitoinsights.ai",
    shortBio: "Experienced operations leader driving efficiency and excellence in day-to-day business operations and strategic planning.",
    fullBio: `<strong>Director of Operations, Cognito Insights Solutions Pvt Ltd</strong>

Reddi Pratap Chowdary leads the operational framework of Cognito Insights Solutions, ensuring seamless execution of training programs, client engagements, and organizational processes.

With a strong background in operations management, Pratap focuses on optimizing workflows, enhancing service delivery, and maintaining the highest standards of quality across all company initiatives.

His leadership ensures that CognitoInsights delivers consistent value to students, professionals, and corporate clients through well-structured processes and efficient resource management.`,
    expertise: [
      "Operations Management",
      "Process Optimization",
      "Quality Assurance",
      "Client Engagement Strategy"
    ]
  },
  {
    name: "Dr. Suribabu B",
    designation: "Director of Relations",
    phone: "+91 94940 04610",
    email: "suribabu.b@cognitoinsights.ai",
    shortBio: "Building strategic partnerships and fostering relationships with academic institutions, corporate clients, and industry stakeholders.",
    fullBio: `<strong>Director of Relations, Cognito Insights Solutions Pvt Ltd</strong>

Dr. Suribabu B oversees the relationship management and partnership development initiatives at Cognito Insights Solutions. His role is pivotal in building and nurturing strategic alliances with academic institutions, corporate clients, government bodies, and industry stakeholders.

With extensive experience in stakeholder engagement, Dr. Suribabu ensures that CognitoInsights maintains strong, mutually beneficial relationships that drive growth and create value for all parties involved.

His expertise in relationship building has been instrumental in expanding the company's network and establishing CognitoInsights as a trusted partner in the education and technology space.`,
    expertise: [
      "Strategic Partnership Development",
      "Stakeholder Engagement",
      "Academic-Industry Collaboration",
      "Client Relationship Management"
    ]
  }
];
