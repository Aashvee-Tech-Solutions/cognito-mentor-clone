import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="prose prose-invert max-w-none space-y-8 animate-slide-up">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CognitoInsights Solutions Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in various ways:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and other contact details you provide.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website and services.</li>
                  <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Communicate with you about updates, promotions, and other information</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and requests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third-party service providers who perform services on our behalf, 
                  such as payment processing, data analysis, email delivery, and customer service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
                  <p className="text-foreground font-semibold">CognitoInsights Solutions Pvt. Ltd.</p>
                  <p className="text-muted-foreground">Rajahmundry, Andhra Pradesh, India</p>
                  <p className="text-muted-foreground">Email: contact@cognitoinsights.ai</p>
                  <p className="text-muted-foreground">Phone: (+91) 89782 70888</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
