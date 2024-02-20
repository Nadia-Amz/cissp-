import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector7 from "../images/vector7.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainseven (){
   
    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector7} alt="" className="vector"></img>
            <h1>Security Operations</h1>
            <h2>Domain 7 Review</h2>
            <article className="article-review">
            <p>This post serves as a review for the domain 7 of the CISSP. This domain covers security operations.</p>



<p>Before we start, here is a list that will help you navigate through the different sections of this domain review :</p>



<ul><li><a href="#investigations">Investigations</a>.</li><li><a href="#logging-and-monitoring">Logging and Monitoring</a>.</li><li><a href="#information-security-practices">Information Security Practices</a>.</li><li><a href="#securely-provision-resources">Securely Provision Resources</a>.</li><li><a href="#detective-and-preventive-measures">Detective and Preventive Measures</a>.</li><li><a href="#incident-management">Incident Management</a>.</li><li><a href="#recovery-strategies">Recovery Strategies</a>.</li><li><a href="#disaster-recovery-processes">Disaster Recovery Processes</a>.</li><li><a href="#disaster-recovery-plan-testing">Disaster Recovery Plan Testing</a>.</li><li><a href="#personnel-safety">Personnel Safety</a>.</li></ul>



<h2 id="investigations">Investigations</h2>



<h3>Investigation types</h3>



<p>There are four different investigation types:</p>



<ol><li>Administrative :<ul><li>Lower burden of proof.</li><li>Conducted inside an organization.</li><li>Violation of organizational policies.</li></ul></li><li>Criminal :<ul><li>Evidence needs to be beyond a reasonable doubt.</li><li>Prosecution under criminal laws.</li></ul></li><li>Civil :<ul><li>Preponderance of evidence.</li><li>Between private entities.</li><li>Determines if an entity is liable or not.</li></ul></li><li>Regulatory : <ul><li>Preponderance of evidence.</li><li>Can be either criminal or civil.</li><li>Determines if an organization is compliant with a regulation.</li></ul></li></ol>



<h3>Evidence</h3>



<p>There are three main types of evidence:</p>



<ol><li>Real evidence : This is a tangible evidence. Things that can be brought to court and can be physically touched and inspected.</li><li>Documentary : It consists of a written or a digital evidence.<ul><li>Authentication rule : The evidence can be backed up by a testimony. (For example, a cybersecurity expert can provide an expert opinion about logs that are introduced as evidence).</li><li>Best evidence rule : A copy of an evidence is not admissible if the original document exists.</li><li>Parol evidence rule : If a written contract exists between two parties, any other evidence that contradicts it will be excluded. </li></ul></li><li>Testimonial : There are three types of testimonial evidence:<ul><li>Direct evidence : For example, an eyewitness who has actually observed the incident.</li><li>Expert opinion.</li><li>Hearsay evidence : Indirect or secondhand testimony.</li></ul></li></ol>



<p>There are multiple techniques that we can use to gather evidence:</p>



<ul><li>Automatic capture (e.g. logging).</li><li>Manual capture</li><li>Interviews : In a private, non threatening place, and more than one interviewer. <ul><li>Not to be confounded with interrogation. An interrogation is when trying to extract a confession, and should be conducted by law enforcement agents.</li></ul></li><li>External capture : Requested from external sources (e.g. ISP)</li></ul>



<p>No matter the the technique used, evidence should always be relevant, material and competent.</p>



<p>Not less importantly, the chain of custody should also be maintained to prove that the evidence has properly been handled.</p>



<p>Finally, it is important to know about the Electronic Discovery process: Identification, preservation, collection, processing, reviewing and production.</p>



<h3>Digital forensics</h3>



<p>There are three many types of digital forensics. The three most common ones are :</p>



<ul><li>Disk forensics</li><li>Software forensics.<ul><li>To detect malware origins.</li><li>To prove intellectual property.</li></ul></li><li>Network forensics</li></ul>



<p>Digital forensics requires special tools.</p>



<ul><li>Write blockers / Forensic disk controller</li><li>Debuggers and decompilers.</li><li>Drive imaging tools.</li><li>Packet analyzers (Sniffers)</li></ul>



<p>When conducting forensics, you should consider the following good practices:</p>



<ul><li>Priority: By order of volatility. Always collect the most volatile memories first (Network traffic, CPU registers, memory cache, RAM).</li><li>Only people with proper training should perform digital forensics.</li><li>Capture time details.</li><li>Preserve and verify file integrity.</li><li>Always maintain the chain of custody.</li></ul>



<p>One last note before we move on to the next section. You should keep in mind that virtualization can provide a sandbox environment that can help in forensics. One other advantage of virtualization is that it is easy to snapshot virtual machines.</p>



<h2 id="logging-and-monitoring">Logging and Monitoring</h2>



<p>There are multiple ways of logging and monitoring security events:</p>



<h3>Intrusion detection and prevention systems.</h3>



<ul><li>Deployment location :<ul><li>Host-based.</li><li>Network-based.</li><li>Perimeter placement</li><li>Combination of multiple locations.</li></ul></li><li>Detection types :<ul><li>Signature-based : Compares traffic with a database of signatures. It only detects known attacks, and does not detect zero-day attacks. Continuous update of the database is required.</li><li>Deviation : Compares traffic with a baseline of traffic patterns, and sends an alert if a deviation from the baseline has occurred.</li><li>Heuristic : Apply machine learning algorithms, and learns how the environment operates. This is also called behavior-based.</li></ul></li></ul>



<h3>Security information and event management.</h3>



<p>A Security Information and Event Management (SIEM) system performs the following functions :</p>



<ul><li>Aggregation : Gathers security log information from multiple sources.</li><li>Normalization : Present the collected data in a meaningful, understandable way.</li><li>Correlation : Compare between the different logs, and provide a global view of the security status.</li><li>Reporting. </li></ul>



<h3>Ingress monitoring</h3>



<p>Ingress monitoring can be performed using tools such as firewalls, IDS/IPS, SIEM, tap/Span. It monitors for data originating from outside the trusted network.</p>



<h3>Egress monitoring</h3>



<p>Egress monitoring is about data that is leaving the trusted network.</p>



<p>Data Leak Prevention (DLP) is a common tool that is used in egress monitoring. It compares data that is leaving the organization against a predefined rule set.</p>



<p>Upon detecting a violation, the DLP can do one of the following :</p>



<ul><li>Only reminds the user that they&#8217;re trying to send sensitive information.</li><li>Asks for a confirmation from the user before proceeding.</li><li>Stops the operation, and notifies management. </li></ul>



<h2 id="information-security-practices">Information Security Practices</h2>



<p>Domain 7 covers some security practices that you should know about when preparing for the CISSP exam:</p>



<ul><li>Need to Know.</li><li>Least privilege.</li><li>Separation of duties.</li><li>Dual Control : When two persons are required to execute a task.</li><li>Two-man rule, Two-person integrity : When the presence of two authorized persons is required for an action to be performed.</li><li>Job rotation : <ul><li>Prevents collusion, as two people won&#8217;t have time to develop a trust relationship.</li><li>Higher resiliency during disaster recovery.</li></ul></li><li>Mandatory vacation : Provide an opportunity for audit.</li><li>Privileged account management.<ul><li>Unique identifiable accounts to maintain accountability.</li><li>Stronger authentication : Multi-factor, challenge-response, stronger password restrictions&#8230;</li><li>Reviewing and monitoring on a continuous basis.</li></ul></li></ul>



<h2 id="securely-provision-resources">Securely Provision Resources</h2>



<h3>Asset inventory</h3>



<p>Asset inventory should Include both physical and virtual assets. For each asset, the following should be identified:</p>



<ul><li>Owner.</li><li>Value</li><li>Cost of maintenance.</li><li>Location.</li><li>Lifespan.</li><li>Security classification.</li><li>Dependencies.</li></ul>



<p>Automated tools can be used for asset inventory, like for example asset management agents installed on each host.</p>



<h3>Configuration management</h3>



<p>Some important concepts related to configuration management that you should know about:</p>



<ul><li>Configuration Item (CI) : Any item that needs to be managed.</li><li>Baseline Configuration (BC) : A reference configurations that systems can be compared to in order to ensure that they are configured correctly.</li><li>Configuration Management (CM) <ul><li>Managed by a Configuration Control Board (CCB), Change Advisory Board (CAB), or a Configuration/Change Management Board (CMB).</li><li>The CMB should include representatives from all stakeholders.</li></ul></li><li>Change Management process:<ul><li>Request control.</li><li>Change control.</li><li>Release control.</li></ul></li><li>Patch management<ul><li>They can be routine or emergency patches.</li></ul><ul><li>Considerations :<ul><li>Timing and planning for the potential downtime.</li><li>Testing the patch in a safe environment.</li><li>Always perform backups before applying the patch.</li><li>Document, always document.</li></ul></li><li>Potential problems<ul><li>The patch may cause interoperability issues if dependencies exist between the system that needs to be patched and other systems.</li><li>Possibility to introduce new vulnerabilities if the patch was not well developed.</li></ul></li></ul></li></ul>



<h2 id="detective-and-preventive-measures">Detective and Preventive Measures</h2>



<h3>Third-party</h3>



<p>The following services can be managed by an external third-party organization:</p>



<ul><li>Threat intelligence.</li><li>Physical security.</li><li>Audit.</li><li>Network monitoring.</li></ul>



<p>When contracting a third-party organization, you should keep in mind the following considerations:</p>



<ul><li>Strong contract language.</li><li>Mutual review of security governance.</li><li>NDA (Non-Disclosure Agreement)</li><li>Contractors to provide error/omission insurance.</li><li>Regular audit and review.</li><li>Approval from regulators.</li></ul>



<h3>Sandboxing</h3>



<p>There are two types of sandboxing environments:</p>



<ul><li>Hardware : A hardware environment that mimics the production environment. Much smaller in size, and contains only the necessary machines.</li><li>Software : A software environment where running processes do not affect other processes.</li></ul>



<h3>Honeypots</h3>



<p>A honeypot is a host that does not contain any sensitive data. In the event of an attack, the honeypot serves as a distraction for attackers, while at the same time it provides a chance to gather data about them.</p>



<p>A honeynet is similar, but instead of one host, it consists of an entire network.</p>



<h3>Anti-malware</h3>



<p>An anti-malware can be hardware or software-based. It can operate on endpoints or on network devices.</p>



<h2 id="incident-management">Incident Management</h2>



<p>Incident management follows the following steps:</p>



<ol><li>Detection<ul><li>Using ogs, SIEM&#8230;.</li><li>People also can sense if an incident is happening.</li><li>Goal of first responder : Contain damage.</li></ul></li><li>Response<ul><li>Confirm the incident.</li><li>Triage based on impact (Low, moderate, high).</li></ul></li><li>Mitigation<ul><li>Isolate and contain the incident.</li><li>Mitigation ends with stability.</li></ul></li><li>Reporting <ul><li>Internal reporting : Employees.</li><li>External reporting : Public, law enforcement, vendors, regulators.</li></ul></li><li>Recovery<ul><li>Remove effects of incident.</li><li>Return to normal operations.</li></ul></li><li>Remediation<ul><li>Address the cause of the incident.</li><li>Patching&#8230;</li></ul></li><li>Lessons learned<ul><li>Reviewing and documenting how the incident was handled for future use.</li></ul></li></ol>



<p>Documentation should be present in all stages of the process.</p>



<p>One more term to remember : CIRT means Cyber Incident Response Team.</p>



<h2 id="recovery-strategies">Recovery Strategies</h2>



<h3>Backup storage</h3>



<p>There are three ways you can use to backup storage:</p>



<ul><li>Full : Backup all data.</li><li>Differential : Backup only data that has changed from the last full back-up.</li><li>Incremental : Backup only data that has changed from the last full, differential or incremental backup.</li></ul>



<h3>Recovery site</h3>



<p><mark>Consider the proper distance for the alternate site : Not too close to be impacted by the disaster, and not too far f</mark>or it <mark>t</mark>o be inaccessible for employees.</p>



<p>These are the most common types of recovery sites:</p>



<ul><li>Hot : Contains all hardware, software, and data necessary for operation. The most expensive, but can operate immediately.</li><li>Warm : Contains most of the necessary elements needed for operation. It generally does not have the current data. Less expensive than a hot site, and can take some time to operate.</li><li>Cold : This is the least expensive solution, and it takes a lot of time to be in operation. It is an empty facilities with no hardware.</li><li>Mobile : A mobile facility that can support only a limited number of employees.</li><li>Cloud : Data is always backed up on the cloud. The organization can operate from anywhere with an Internet connection. Cost-saving and fast recovery.</li></ul>



<h3>System resilience</h3>



<h4>Power</h4>



<p>A UPS provides immediate power supply in case of a power interruption. It can only provide power for a short duration. If the interruption is longer than what can be handled by the UPS, then a generator should be available to take over.</p>



<p>The generator runs on fuel. So, it takes time to start. We use the UPS to provide enough time for the generator to start.</p>



<p>An automatic switch should be installed to transit to the generator when the power is interrupted.</p>



<h4>RAID</h4>



<p>RAID are redundancy mechanisms used to provide resiliency in case of a disk failure. These are the most common RAID types:</p>



<ul><li>RAID 0 : Striping, requires two disks. If one disk fails, then half the data is lost. It does not provide a redundancy, and only improves performance.</li><li>RAID 1 : Mirroring. Requires two disks. If one disk fails, then data will not be lost. But it is not efficient, as only half the space will be used.</li><li>RAID 5 : Striping with parity bits. Requires at least three disks. If one disk fails, then data will not be lost.</li><li>Others : RAID 3, RAID 4, RAID 6, RAID 1+0, RAID 0+1.</li></ul>



<h4>Clustering</h4>



<p>Clustering is when multiple machines are combined to perform one activity. If one goes down, then the activity will still be performed by the other machines. (Example of clusters: Server, storage, network&#8230;)</p>



<h2 id="disaster-recovery-processes">Disaster Recovery Processes</h2>



<p>In order to know when to launch a disaster recovery response, the following points should be determined:</p>



<ul><li>People authorized to initiate the response.</li><li>Criteria for initiating the response.</li><li>Information and decision streams.</li></ul>



<p>In addition, key personnel should be identified.</p>



<ul><li>Responders:<ul><li>Each response role should be assigned a specific person and also an alternate. They both should be trained.</li><li>Representatives from different parts of the organization.</li></ul></li><li>Critical path personnel:<ul><li>The personnel that have critical functions. They should continue their production activities during the response.</li></ul></li></ul>



<p>How communication will be made with external and internal stakeholders should also be decided. There should be only one single voice for communication.</p>



<p>After recovery, assess the impact. It can help in civil action, criminal prosecution and informing regulators and investors.</p>



<p>Restoration is the return to normal. It is not the same as recovery. Recovery means returning to critical business functions.</p>



<p>Timing : Restoration should not be too soon, nor too late.</p>



<h2 id="disaster-recovery-plan-testing">Disaster Recovery Plan Testing</h2>



<p>There are five types of DRP testing:</p>



<ul><li>Read-through : The most basic. Each person has to go through the plan. Also called checklist.</li><li>Walk-through : Simulation of response activities at actual locations. Also called tabletop.</li><li>Simulation : Like for example a fire drill.</li><li>Parallel : Tests are conducted in parallel in an alternate site without impacting the operations. But it requires mobilizing of employees that are needed to perform the test. So, it is more expensive.</li><li>Full-Interruption: Interrupting the operations, and test the plan. This is the most expensive test.</li></ul>



<h2 id="personnel-safety">Personnel Safety</h2>



<h3>Travel</h3>



<p>The traveling employee should be aware of local risks, and local emergency contacts. The organization should consider the insurance coverage and Secure remote access.</p>



<p>In addition, the employee may be in a different jurisdiction. It is therefore necessary to consider how this might impact his work (For example, in relation to data flow across borders).</p>



<h3>Duress</h3>



<p>A duress code is a code word in case an employee is being threatened. The duress code should be changed regularly. It should also be easy to remember, and subtle as to not create suspicion.</p>

<p>We have now gone through all items that are covered in the domain 7 of the CISSP. If you notice that there is some important concept that I have forgotten to mention in this review, please let me know in the comments below.</p>
 
            </article>
            </div>
            <NextandPrevious 
                previous = "/Domain-6-review"
                next = "/Domain-8-review"/>
            <TopIcon />
            <Footer />
        </>
    )
}export default Domainseven;