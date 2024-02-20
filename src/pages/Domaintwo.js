import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector2 from "../images/vector2.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";


function Domaintwo (){

    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector2} alt="" className="vector"></img>
            <h1>Asset Security</h1>
            <h2>Domain 2 Review</h2>
            <article className="article-review">
            <p>This post serves as a review for the domain 2 of the CISSP. This domain covers asset security.</p>
            <p>Before we start, here is a list that will help you navigate through the different sections of this domain review:</p>
            <ul>
                <li>Data Security Concepts.</li>
                <li>Classify Assets.</li>
                <li>Data Lifecycle.</li>
                <li>Privacy.</li>
                <li>Data Retention.</li>
                <li>Data States.</li>
                <li>Security Controls.</li>
                <li>Asset Handling Requirements.</li>
                <li>Data Remanence.</li>
            </ul>
            <h3>Data Security Concepts</h3>
            <p>A <strong>Data policy</strong> should be part of the overall risk management program.</p>
            <p><strong>Data governance</strong> oversees the development of common data definitions, standards, requirements, and processes.</p>
            <p><strong>Data quality</strong> reflects the integrity and reliability of data. Quality control and assurance can ensure good data quality. Improving data quality aims to reduce errors of commission (Mistakes, or inacurrate transcription) and errors of omission (Something that had been left out).</p>
            <p><strong>Data documentation</strong> allows longevity and reuse of data. Through documentation, users can understand, content, context, and limits of data.It also facilitates the exchange of data and enables easier discovery and interoperability of data. Data documentation can be through metadata, readme files, file contents (file names, header area…)…</p>
            <h3>Data organization</h3>
            <p>There are 2 types of data:</p>
            <ul>
                <li><strong>Unstructured:</strong> It lacks any formal data model.</li>
                <li><strong>Structured:</strong> When data is organized (Example: In a relational database)</li>
            </ul>
            <p><strong>Data Schema</strong> is a blueprint of how a database is constructed.</p>
            <p><strong>Data classification</strong> is based on sensitivity. (Ex: Confidential, Sensitive, Private, Public). It allows you to know the value that a piece of data holds to your organization.</p>
            <p><strong>Data categorization</strong> is based on the potential impact on the organization (FIPS 199: Standards for Security Categorization of Federal Information and Information Systems).</p>
            <h3>Classify Assets</h3>
            <p>Assets should be classified based on their level of sensitivity. Classification criterias include the classification of data the asset handles, and the processes that the asset accomplishes.</p>
            <p>A data classification policy should specify who can access the data, how to secure it, for how long (Retention), and how to dispose of it.</p>
            <p>An example of classification, which is an inspiration from the military, is: Top Secret, Secret, Confidential, Unclassified.</p>
            <h3>Data Lifecycle</h3>
            <p>It is important to understand the six stages that data goes through during its lifecycle : Create, store, use, share, archive, destroy.</p>
            <h3>Privacy</h3>
            <h4>Privacy Laws</h4>
            <p>Many countries around the world enforce privacy through law. The most well-known of these is the EU GDPR which I covered in my review of domain 1. It is also important to be familiar with the EU-US Privacy Shield, which allows US companies to meet the requirements of GDPR.</p>
            <p>In addition to the EU, other countries have also adopted privacy laws:</p>
            <ul>
                <li>APEC CBPR</li>
                <li>Canada PIPEDA</li>
                <li>US : There is no overarching privacy law in the US. Only laws that apply to specific sectors :
                    <ul>
                        <li>Privacy Act : Applicable only to US federal government agencies.</li>
                        <li>GLBA : Gramm-Leach-Bliley Act (For financial institutions).</li>
                        <li>COPPA : Children’s Online Privacy Protection Act (For online services directed to children under 13 years of age).</li>
                        <li>FERPA : Family Educational Rights and Privacy Act (Protect the privacy of student education records).</li>
                        <li>HIPPA : Health Insurance Portability and Accountability Act (For protecting sensitive patient health information).</li>
                    </ul>
                </li>
            </ul>
            <h4>Data roles</h4>
            <p>Handling data involves many entities, with varying responsibilities. Below are some of the important data roles :</p>
            <ul>
                <li>Data Owner: They are the person who is accountable. Most often, they are from senior management. They can grant or deny access to data, and are responsible for its classification.</li>
                <li>Data Steward : They are responsible for data content and context. Their main goal is data quality.</li>
                <li>Data Custodian : They maintain data, secure it and make sure its available for authorized users.</li>
                <li>Data Subject : For personal data, they are the person to which this data relates. You can encounter this role, most often, in the context of privacy. (For example, they are the person that the PII identifies).</li>
                <li>Data User : They are the person who is accessing the data as part of their day-to-day job.</li>
                <li>Data Controller : A person or a business who determines how to process data. They are accountable for it.</li>
                <li>Data Processor : They process data on behalf of a data controller (Example: Cloud service providers).</li>
            </ul>
            <h3>Data Retention</h3>
            <p>The concept of data retention describes how long data should be stored. Retention requirements should be expressed in a retention policy.</p>
            <p>It is important to evaluate Legal and compliance requirements first before defining the duration for data retention.</p>
            <h3>Data States</h3>
            <p>Data can be in either one of the following 3 states:</p>
            <ul>
                <li>At rest : When data is stored (e.g. Databases, data warehouses, files in a hard drive…).</li>
                <li>In motion : When data is in transmission through a network.</li>
                <li>In use : When data is being accessed by a user or a service account. Generally, data in use is located in the Computer RAM, CPU cache or CPU registers).</li>
            </ul>
            <h3>Security Controls</h3>
            <p>For identifying security controls to implement for data in your organization, you can refer to well-known frameworks: ISO 27001, ISO 27002, NIST SP 800-53, CSIS 20 Critical Security Controls, COBIT, COSO, FISMA, FedRAMP (For Cloud Service Providers), DoD Instruction 8510.01.</p>
            <p>When implementing the above frameworks, there might be some controls that are not applicable to the context of your organization. This is why you should consider scoping, tailoring, and supplementation.</p>
            <ul>
                <li>Scoping : Choose only the security controls that are applicable.</li>
                <li>Tailoring : Modify the applicable controls to meet the specific needs.</li>
                <li>Supplementation : When additional security controls are needed.</li>
            </ul>
            <p>It is important to document scoping and tailoring decisiong, and their justification.</p>
            <p>There are 3 types of controls :</p>
            <ul>
                <li>Technical : Using computer capabilities and automation to implement safeguards.</li>
                <li>Administrative : Policies, procedures, standards and guidelines…</li>
                <li>Physical : CCTV, Intrusion Detection, security guard…</li>
            </ul>
            <p>Controls can be deterrent, preventative, detective, corrective, compensating or recovery. Controls can also be common, system-specific or hybrid.</p>
            <p>It is important to establishing a security control baseline. Examples of standards and references that can help you with this include : Cisco Validated Design Program, Microsoft Security Compliance Toolkit 1.0, CIS Benchmarks,…</p>
            <h3>Asset Handling Requirements</h3>
            <p>Asset Handling should also cover access, transfer and storage of sensitive data.</p>
            <p>Good practices in asset and data handling include :</p>
            <ul>
                <li>Marking and Labeling</li>
                <li>De-identification</li>
                <li>Obfuscation</li>
                <li>Data Tokenization</li>
                <li>Anonymization</li>
            </ul>
            <h3>Data Remanence</h3>
            <p>Data remanence occurs when data destruction efforts prove to be non-sufficient, and some remains of data may still be recoverable.</p>
            <p>There are 3 Techniques for media sanitization:</p>
            <ul>
                <li>Clearing : Media is formatted or overwritten once. This is the least effective method, and you can still recover data if you rely on this technique alone.</li>
                <li>Purging : Overwriting multiple time, degaussing (Only for magnetic media like HDD or tapes), crypto-shredding… By these techniques, you may never recover data.</li>
                <li>Destruction : This is the most effective method, but Media would be entirely destroyed. Examples include incineration and disk shredding. However, drilling a hole in the media is not a good way to destroy it. Data can still be recovered.</li>
            </ul>
            <p>Guidelines and standards for Media Sanitization include :</p>
            <ul>
                <li>NSA/CSS Policy Manual 9-12</li>
                <li>NIST SP 800-88 “Guidelines for Media Sanitization”.</li>
            </ul>
            <p>We have now gone through all items that domain 2 of the CISSP covers. If you notice that there is some important concept that I have forgotten to mention in this review, please let me know in the comments below.</p>

            </article>
            </div>
            <NextandPrevious 
                previous = "/Domain-1-review"
                next = "/Domain-3-review"/>
            <TopIcon />
            <Footer />
        </>
    )
}export default Domaintwo;