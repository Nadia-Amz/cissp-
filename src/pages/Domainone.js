import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector1 from "../images/vector1.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainone (){

    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector1} alt="" className="vector"></img>
            <h1>Security and Risk Management</h1>
            <h2>Domain 1 Review</h2>
            <article className="article-review">
                <p>This post serves as a review for domain 1 of the CISSP. This domain covers security and risk management.</p>

                <p>Before we start, here is a list that will help you navigate through the different sections of this domain review.</p>
                <ol>
                    <li>CIA Triad.</li>
                    <li>Security Governance.</li>
                    <li>Organizational Documents.</li>
                    <li>Security Risk Management.</li>
                    <li>Threat Modeling.</li>
                    <li>Personnel Security.</li>
                    <li>Awareness, Training, and Education.</li>
                    <li>Ethics.</li>
                    <li>Legal Systems.</li>
                    <li>Crimes.</li>
                    <li>Intellectual Property.</li>
                    <li>Privacy Laws.</li>
                    <li>Business Continuity and Disaster Recovery.</li>
                </ol>
                <h3>CIA Triad</h3>
                <p>The CIA Triad is a combination of three pillars that form the end goals of cybersecurity: Confidentiality, Integrity, and Availability.</p>
                <ul>
                    <li>Confidentiality: It involves preventing unauthorized access to data. One way to help achieve this is by implementing proper access control measures and enforcing encryption when data is not in use.</li>
                    <li>Integrity: This ensures that data is not altered (intentionally or accidentally). You can use Hashing/Message digests mechanism to detect alteration of data and ensure integrity.</li>
                    <li>Availability: This means having the information accessible to authorized individuals when needed. To ensure this, you can use availability measures such as redundancy, backups, and fault tolerance.</li>
                </ul>
                <p>When learning about the CIA, you should also consider the opposite model: DAD (Disclosure, Alteration, and Denial). You, as a security professional, should always seek to prevent DAD and achieve CIA.</p>
                <h3>Security Governance</h3>
                <p>In its general meaning, governance is the process that defines how decisions are made within an organization.</p>
                <p>In the context of security, governance is the set of practices that management develops to guide and direct the security of an organization.</p>
                <p>By the means of effective security governance, a security manager should align security with the organization’s mission, goals, and objectives.</p>
                <p>Organizational roles:</p>
                <ul>
                    <li><strong>Governance Committee:</strong> They are a group of personnel who determine how decisions should be made within an organization.</li>
                    <li><strong>Senior Management (Also called C-level):</strong> These include the CEO, CFO, COO, CIO…</li>
                    <li><strong>Security Manager:</strong> Responsible for advising senior management on security matters.</li>
                </ul>
                <p>When exercising security governance practices, it is important for the security manager to consider, and distinguish between, two important concepts:</p>
                <ul>
                    <li><strong>Due Care:</strong> Address any risk as would a reasonable person do given the same set of facts. Do the right thing (The prudent man rule)</li>
                    <li><strong>Due Diligence:</strong> Making sure that the right thing was done. An example of this is performing audits and investigations.</li>
                </ul>
                <h3>Organizational Documents</h3>
                <p>The CISSP exam requires the candidate to be familiar with four important organizational documents: Policies, Standards, Procedures, and Guidelines. The properties and characteristics of each document are described below.</p>
                <ul>
                    <li>Policies: These are high-level documents. They do not get into technical details. However, they do need to include Scope, purpose, responsibilities, and compliance. There are 3 types of policies: Regulatory (Mandatory), advisory and Informative.</li>
                    <li>Standards: These documents should be tied directly to the organization’s policies. They contain requirements that are mandatory to follow.</li>
                    <li>Procedures: They contain Step by step instructions, and are Highly detailed as opposed to policies. Procedures can either be mandatory or optional.</li>
                    <li>Guidelines: These documents only contain recommendations and best practices, and so, they are not mandatory. You should produce guidelines instead of procedures whenever flexibility is necessary, and whenever multiple methods may exist to achieve a certain task.</li>
                </ul>
                <h3>Security Risk Management</h3>
                <p>Assets contain vulnerabilities, Threats exploit vulnerabilities, and Risk exists when both vulnerability and threat are present.</p>

                <p>Security Risk Management is the process of identifying, assessing, and treating these risks.</p>

                <p>To be able to identify and assess risk, you should first identify valuable assets and the degree of their exposure. A security professional should always aim to reduce exposure.</p>

                <p>There are 2 types of risk assessment methodologies:</p>
                <ol>
                    <li>Quantitative:
                        <ul>
                            <li>SLE (Single Loss Expectancy) = Asset Value x Exposure Factor</li>
                            <li>ALE (Annual Loss Expectancy) = SLE x ARO.</li>
                            <li>if ALE is less than the price of the mitigation control, then risk can be accepted.</li>
                        </ul>
                    </li>

                    <li>Qualitative:
                        <ul>
                            <li>In this type, we calculate the probability and impact of risks based on a defined scale (For example, from 1 to 5, or low, medium, and high)</li>
                            <li>When budget, time, and trained personnel are not available.</li>
                        </ul>
                    </li>
                </ol>
                <p>After the assessment phase, the next step would be to treat the resulted risk. There are 4 different types of risk treatment :</p>
                <ul>
                    <li><strong>Risk acceptance:</strong> Do nothing.</li>
                    <li><strong>Risk mitigation:</strong> Apply controls to reduce risk. These controls can be administrative, physical, or technical.</li>
                    <li><strong>Risk transfer:</strong> Transfer the risk to an external entity (Like insurance).</li>
                    <li><strong>Risk avoidance:</strong> Remove the thing that is creating the risk.</li>
                </ul>
                <p>After implementing the proper controls to treat risk, we generally end up with a reduced risk called Residual Risk. Business owners can then accept this risk, or ask for another round of risk treatment to further reduce it.</p>
                <p>There are many frameworks out there that can guide you in the information security risk management process. Here are some examples: ISO 31000 (This covers organization risk management, not just information security risk), ISO 27005, COSO, NIST SP 800-37, ISACA RiskIT…</p>
                <h3>Threat Modeling</h3>
                <p>Threat modeling is an approach for identifying potential threats to a system, application, or process, and then providing security controls to mitigate these identified threats.</p>
                <p>There are 3 types of methodologies for threat modeling.</p>
                <ul>
                    <li><strong>System-centric:</strong> This focuses on the system to protect. STRIDE is an example of a system-centric methodology. STRIDE is actually an acronym that stands for Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of privilege.</li>
                    <li><strong>Attacker-centric:</strong> As its name implies, this second type focuses on the attackers. A famous attacker-centric methodology is PASTA (Process for Attack Simulation and Threat Analysis).</li>
                    <li><strong>Data-centric:</strong> This type focuses on protecting data within systems. NIST SP 800-154 is a guide to data-centric threat modeling that organizations can use.</li>
                </ul>
                <h3>Personnel Security</h3>
                <p>Humans are the weakest link that might compromise the security of an organization. Therefore, personnel security should be considered and incorporated into HR processes: During hiring, on-boarding, employment, and termination.</p>
                <p>Domain 1 of CISSP presents some considerations during each of these processes.</p>
                <ul>
                    <li>During Candidate screening and hiring:
                        <ul>
                            <li>Scope what skills are needed</li>
                            <li>Background investigations: Financial info, social media, criminal history, driving records, drug testing, prior employment.</li>
                            <li>Employment agreement and policies: NDA, Acceptable use, conflict of interest (Actual or potential), gift handling, mandatory vacations.</li>
                            <li>Interviewing: Never interview a candidate alone.</li>
                        </ul>
                    </li>
                    <li>On-boarding: Orientation, tribal knowledge.</li>
                    <li>Employment: Periodic investigations and screening.</li>
                    <li>Termination: Voluntary or involuntary.</li>
                </ul>
                <p>In addition, to further reduce the risk of an insider threat, you should also consider the following security principles:</p>
                <ul>
                    <li>Separation of Duties: Ensure one person does not act alone.</li>
                    <li>Least Privilege: Only grant the necessary privileges for a person to perform their work, but no more.</li>
                    <li>Need-to-Know: Information is shared with a person only if it is needed to do the work.</li>
                </ul>
                <h3>Awareness, Training, and Education</h3>
                <p>The CISSP exam requires the candidate to know the difference between awareness, training, and education.</p>
                <ul>
                    <li>Awareness: Issue-specific. Generally for all employees. It helps them recognize security incidents.</li>
                    <li>Training: Teaching specific skills to address known circumstances.</li>
                    <li>Education: Developing a conceptual understanding of a Common Body of Knowledge.</li>
                </ul>
                <h3>Ethics</h3>
                <p>CISSP certification holders agree to follow the (ISC)² Code of Ethics. This code includes 2 preambles and 4 mandatory canons</p>
                <ol>
                    <li>Protect society, the common good, necessary public trust and confidence, and the infrastructure.</li>
                    <li>Act honorably, honestly, justly, responsibly, and legally.</li>
                    <li>Provide diligent and competent service to principals.</li>
                    <li>Advance and protect the profession.</li>
                </ol>
                <p>
                Other standards for ethical conduct include :
                </p>
                <ul>
                    <li>IAB (Internet Architecture Board) “Ethics and the Internet”.</li>
                    <li>CEI (Computer Ethics Institute) “The Ten Commandments of Computer Ethics”.</li>
                </ul>
                <h3>Legal Systems</h3>
                <p>There are multiple systems of law, and an understanding of the following laws is requireed if you intend to sit for the CISSP exam.</p>
                <ul>
                    <li>Common Law: This originated in England and is now used in the US, Canada, UK, and others. Common law relies on precedent and particular cases.</li>
                    <li>Civil Law: It relies on a legal code, and is the most p. This law provides impartial arbitration to civil cases such as contract disputes.</li>
                    <li>Religious Law: This system of law is based on religion. There are some countries that derive their law from a religious source, but the extent and degree of this vary widely.</li>
                    <li>Mixed Law: This system is a combination of all other legal systems.</li>
                </ul>
                <h3>Crimes</h3>
                <p>Computer systems can be involved in crimes. Depending on the degree and type of their involvement, computer crimes can be one of these 3 categories:</p>
                <ul>
                    <li>Computer-assisted crimes: This is when a computer is used as a tool or to facilitate a crime.</li>
                    <li>Computer as target: In this case, the crime is conducted against a computer system.</li>
                    <li>Computers incidental. Computers only play a minor role in this category of crime.</li>
                </ul>
                <h3>Intellectual Property</h3>
                <p>People often confuse between different types of intellectual property. However, it is important to distinguish between four main types: Copyright, Patent, Trademark, and Trade Secret.</p>
                <ul>
                    <li>Copyright: This intellectual property protects the artistic expression of an idea. The protection duration varies, but it generally extends for at least 50 years after the author’s death.</li>
                    <li>Patent: This protects the owner of an invention, process, or design, for a designated period (Generally extending to 20 years). However, the owner should register his invention in order to benefit from the patent.</li>
                    <li>Trademark: The trademark should also be registered, and it can be renewed indefinitely as long as the organization is in business.</li>
                    <li>Trade Secret: Contrary to other intellectual properties, trade secrets do not have to be registered, but they should be kept secret. Any disclosure of this might impact the business of the organization (e.g Coca-cola recipe…)</li>
                </ul>
                <p>
                Intellectual Property protection is enforced thanks to organizations and laws that exist both internationally and in the U.S. Examples of these are:
                </p>
                <ul>
                    <li>WIPO: World International Property Organization.</li>
                    <li>WTO: World Trade Organization.</li>
                    <li>DMCA: Digital Millennium Copyright Act.</li>
                </ul>
                <p>In addition to the above intellectual properties, it is important to differentiate between different types of software licenses: Freeware, Shareware (Trialware), Commercial Software, and Academic Software.</p>
                <h3>Privacy Laws</h3>
                <p>One important law that the CISSP candidate should be familiar with is the GDPR or General Data Protection Regulation. This law protects EU citizens outside the boundaries of the EU.</p>
                <p>The GDPR defines three roles in relation to data : Data Controller, Data Processor, and Supervisory Authority.</p>
                <ul>
                    <li>Data controller.</li>
                    <li>Data processor.</li>
                    <li>Supervisory authority.</li>
                </ul>
                <p>The GDPR relies on a set of 6 privacy principles:</p>
                <ol>
                    <li>Lawfulness, fairness, and transparency.</li>
                    <li>Purpose limitation.</li>
                    <li>Data minimization.</li>
                    <li>Accuracy.</li>
                    <li>Storage limitation.</li>
                    <li>Integrity and confidentiality.</li>
                </ol>
                <p>If an orgnazitation fails to comply with the GDPR regulation, it may incur fines which may vary within the below range.</p>
                <ul>
                    <li>Lower level: Up to 10 Million euros or 2 percent of the worldwide annual revenue of the prior financial year, whichever is higher.</li>
                    <li>Upper level: Up to 20 Million euros or 4 percent of the worldwide annual revenue of the prior financial year, whichever is higher.</li>
                </ul>
                <p>The OECD is the Organization for Economic Cooperation and Development, and it also presents a set of privacy principles.</p>
                <ol>
                    <li>Collection Limitation.</li>
                    <li>Data Quality.</li>
                    <li>Purpose Specification.</li>
                    <li>Use Limitation.</li>
                    <li>Security Safeguards.</li>
                    <li>Openness.</li>
                    <li>Individual Participation.</li>
                    <li>Accountability.</li>
                </ol>
                <p>
                In the US, there are multiple sector-specific privacy laws, but there is no general law as is the case in the EU.
                </p>
                <ul>
                    <li>Federal Privacy Act: Applies to federal institutions.</li>
                    <li>FTC Act: The Federal Trade Commission Act.</li>
                    <li>GLBA: For Financial Institutions.</li>
                    <li>FCRA: The Fair Credit Reporting Act.</li>
                    <li>HIPAA: For medical and healthcare information.</li>
                    <li>ECPA: The Electronica Communications Privacy Act (It details how the government may access electronic communications).</li>
                    <li>GINA: Genetic Information Non-discrimination Act.</li>
                </ul>
                <h3>Business Continuity and Disaster Recovery</h3>
                <p>NIST SP 800-34 defines the process of planning for Business Continuity. This process consists of the following steps:</p>
                <ol>
                    <li>Contingency planning.</li>
                    <li>Business Impact Analysis.
                        <ul>
                            <li>Define CBFs: Critical Business Functions.</li>
                            <li>Measures of impact: MTD, RPO, RTO. (RTO &lt; MTD).</li>
                            <li>Identify dependencies.</li>
                        </ul>
                    </li>
                    <li>Identify preventive controls.</li>
                    <li>Create contingency strategies.</li>
                    <li>Develop information systems contingency plan.</li>
                    <li>Plan testing, training and exercises.</li>
                    <li>Plan maintenance.</li>
                </ol>
            </article>
            </div>
            <NextandPrevious
                    next = "/Domain-2-review" 
                    />
                    
            <TopIcon />
            <Footer />
        </>
    )
}export default Domainone;