import { motion } from "framer-motion";
import { Code, Shield, Target, Eye, Zap, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto space-y-6 md:space-y-12">
        <SectionHeading title="About Our Clubs" subtitle="Learn about the vision, mission, and purpose behind CSE's elite clubs." />
      
      {/* Cyber Knights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card neon-border-green rounded-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-secondary/10">
              <Shield className="text-secondary" size={32} />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary">Cyber Knights</h3>
              <p className="text-muted-foreground font-mono text-xs tracking-wider">SECURITY • HACKING • DEFENSE</p>
            </div>
          </div>

          <p className="text-foreground font-body text-lg leading-relaxed mb-8">
            Cyber Knights is the cybersecurity club dedicated to protecting the digital frontier. We train students in ethical hacking, penetration testing, cryptography, and digital forensics to build the next generation of cybersecurity professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Target className="text-secondary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-secondary mb-1">MISSION</h4>
                <p className="text-muted-foreground text-sm font-body">To equip students with practical cybersecurity knowledge and hands-on learning experiences.
To encourage innovation in defending modern digital systems..</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="text-secondary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-secondary mb-1">VISION</h4>
                <p className="text-muted-foreground text-sm font-body">To develop skilled cyber enthusiasts who can protect and secure the digital world.
To build a strong culture of cybersecurity awareness and ethical practice..</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-secondary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-secondary mb-1">MOTTO</h4>
                <p className="text-muted-foreground text-sm font-body italic">"Protect. Secure. Lead."</p>
              </div>
            </div>
          </div>
        </motion.div>


       {/* Script Soldiers */}
        <motion.div
          id="script-soldiers"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card neon-border rounded-xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Code className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary">Script Soldiers</h3>
              <p className="text-muted-foreground font-mono text-xs tracking-wider">CODING • DEVELOPMENT • INNOVATION</p>
            </div>
          </div>

          <p className="text-foreground font-body text-lg leading-relaxed mb-8">
            Script Soldiers is the premier coding club of the CSE department, dedicated to fostering a culture of programming excellence and software innovation. We believe in learning by building — from competitive programming to full-stack development.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Target className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-primary mb-1">MISSION</h4>
                <p className="text-muted-foreground text-sm font-body">To strengthen coding and problem-solving skills through training, workshops, and competitions.
To prepare students for real-world technical challenges and career opportunities..</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-primary mb-1">VISION</h4>
                <p className="text-muted-foreground text-sm font-body">To nurture passionate programmers capable of building impactful digital solutions.
To inspire innovation and excellence in the world of coding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-heading text-sm font-bold text-primary mb-1">MOTTO</h4>
                <p className="text-muted-foreground text-sm font-body italic">"Code. Innovate. Excel."</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};


export default About;
