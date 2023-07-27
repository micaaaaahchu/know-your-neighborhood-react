import React from "react";
import { hero3 } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const TermsPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[35vh] w-full bg-cover bg-center relative flex justify-center px-6
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${hero3})` }}
      >
        <div className="max-w-[880px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-bold text-5xl text-color2 drop-shadow-lg text-center">
              Terms and Conditions
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="text-gray-600">
              <h3 className="mb-6 text-3xl font-bold text-center text-red-400 drop-shadow mb-2">
                Terms of Service
              </h3>
              <p className="mb-5 text-center text-black">
              These terms and conditions govern your use of the Know Your Neighborhood 
              website and any services provided therein. By accessing or using the Website, 
              you agree to be bound by these Terms. If you do not agree with any part of these Terms, 
              please refrain from using the Website.
              </p>
              <p className="mb-5 text-center text-black">
                By using the Know Your Neighborhood website, you agree to abide by the following terms and conditions. 
                The content provided on the website is for informational purposes only and should not be considered 
                professional advice or endorsement. Users must be at least 18 years old or possess the necessary legal 
                capacity to access the website. It is the user's responsibility to maintain the confidentiality of their 
                account credentials and refrain from sharing them with others. Any illegal or unauthorized use of the website 
                is strictly prohibited. The content, design, graphics, and logos on the website are protected by intellectual 
                property rights and owned by Know Your Neighborhood or its licensors. Copying, reproducing, modifying, or 
                distributing any part of the website's content without prior written consent is not allowed. User privacy is important, 
                and the privacy policy should be reviewed to understand how personal information is collected, used, and protected. 
              </p>
              <p className="mb-5 text-center text-black">
                The website may include links to third-party websites, but Know Your Neighborhood does not endorse or control the 
                content, accuracy, or availability of these external resources. Users access third-party websites at their own 
                risk and are subject to the respective terms and conditions. Know Your Neighborhood does not provide any warranties 
                or representations regarding the accuracy, reliability, or availability of the website. The company disclaims all 
                warranties, including merchantability, fitness for a particular purpose, and non-infringement. Know Your Neighborhood 
                and its affiliates, employees, agents, or partners shall not be liable for any damages arising from the use of the 
                website or its content. The company does not guarantee continuous or error-free operation of the website and is not 
                responsible for technical issues, viruses, or disruptions. Know Your Neighborhood reserves the right to modify, 
                suspend, or terminate the website or any services without prior notice. These terms may be updated or modified 
                periodically, and continued use of the website after such changes constitutes acceptance of the revised terms. 
                These terms are governed by the laws of Jurisdiction, and any dispute related to these terms or website usage 
                shall be subject to the exclusive jurisdiction of the courts in Jurisdiction.
              </p>
              <p className="mb-6 text-center text-black">
              Please read these Terms carefully. If you have any questions or concerns, please contact us at kyn@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default TermsPage;
