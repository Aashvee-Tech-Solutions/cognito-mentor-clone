import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="prose prose-invert max-w-none space-y-8 animate-slide-up">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by CognitoInsights Solutions Pvt. Ltd., you agree to be 
                  bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CognitoInsights Solutions Pvt. Ltd. provides technology-driven training programs, corporate upskilling 
                  solutions, hiring services, and software platforms designed to bridge the gap between learning and employment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information when registering</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any activity that interferes with our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, trademarks, and intellectual property on our platform are owned by CognitoInsights 
                  Solutions Pvt. Ltd. or its licensors. You may not reproduce, distribute, or create derivative works 
                  without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For paid services, payment terms will be specified at the time of purchase. All fees are 
                  non-refundable unless otherwise stated in the specific service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CognitoInsights Solutions Pvt. Ltd. shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services at any time, without 
                  prior notice, for conduct that we believe violates these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Andhra Pradesh, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us:
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
