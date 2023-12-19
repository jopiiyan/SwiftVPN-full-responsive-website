import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="w-full h-full py-4 px-4 bg-black">
      <Accordion
        title={"Is SwiftVPN a reliable VPN?"}
        answer={`Yes,  SwiftVPN is reliable. It has received rave reviews from leading experts in the field. Techradar, PCMag, and CNET are just a few of the many names that have recognized SwiftVPN as one of the top VPN services.         
   `}
      ></Accordion>
      <Accordion
        title={"What is SwiftVPN?"}
        answer={`SwiftVPN is a cybersecurity company focused on developing humanized privacy and security solutions. Our products include a VPN, Antivirus, Alert (a data leak detection system), Search (a private search tool), Incogni (an automated personal data removal system), and Alternative ID (your online person & email alias).        
   `}
      ></Accordion>
      <Accordion
        title={"Is using a VPN legal?"}
        answer={`Yes, using a VPN is legal in most countries. However, the legality of VPN usage can vary, and it's essential to review the laws of your specific location to ensure compliance.         
   `}
      ></Accordion>
      <Accordion
        title={"Why do I need a VPN?"}
        answer={`A VPN is essential for maintaining online privacy and security. It protects your data from hackers, encrypts your internet connection, and allows you to access geo-restricted content. It is particularly useful when using public Wi-Fi networks.        
   `}
      ></Accordion>
    </div>
  );
};

export default FAQ;
