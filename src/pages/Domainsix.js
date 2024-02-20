import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector6 from "../images/vector6.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainsix (){
   
    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector6} alt="" className="vector"></img>
            <h1>Security Testing</h1>
            <h2>Domain 6 Review</h2>
            <article className="article-review">
            <p>This post serves as a review for the domain 6 of the CISSP. This domain covers security testing.</p>



<p>Before we start, here is a list that will help you navigate through the different sections of this domain review.</p>



<ul><li><a href="#assessment-and-audit-perspectives">Assessment and Audit Perspectives</a>.</li><li><a href="#security-control-testing">Security Control Testing</a>.</li><li><a href="#metrics">Metrics</a>.</li><li><a href="#third-party-audits">Third-Party Audits</a>.</li></ul>



<h2 id="assessment-and-audit-perspectives">Assessment and Audit Perspectives</h2>



<p>Assessment and audit can be performed from three different perspectives. Each has its pros and cons :</p>



<ol><li>Internal<ul><li>Advantage : Familiarity with the environment.</li><li>Disadvantage : Bias.</li><li>It can be conducted before a required third-party audit.</li></ul></li><li>External<ul><li>Advantage : Experience, no bias.</li><li>Disadvantage : Expensive.</li><li>It is used for compliance audits.</li></ul></li><li>Third-party<ul><li>When an organization wants to understand the details of the security status of a third-party.</li></ul></li></ol>



<h2 id="security-control-testing">Security Control Testing</h2>



<h3>Vulnerability testing</h3>



<p>First, determine the goals of the testing, and identify the scope.</p>



<p>Vulnerability testing can generate a lot of traffic. So, this impact should be considered before.</p>



<p>Review for false positives, and document all the findings.</p>



<p>There are two types of scans :</p>



<ul><li>Credentialed : The scanner has access to an account on the tested system that allows it to access parts of the system that are normally hidden to external entities.</li><li>Uncredentialed : The scanner does not have access to an account on the tested system.</li></ul>



<p>The testing tools should conform to :</p>



<ul><li>SCAP : Security Content Automation Protocol (Developed by NIST)</li><li>OVAL : Open Vulnerability and Assessment Language.</li></ul>



<p>Interpreting and classifying results can be done using :</p>



<ul><li>CVE : Common Vulnerability Enumeration.</li><li>CVSS : Common Vulnerability Scoring System.</li></ul>



<h3>Penetration testing</h3>



<p>Penetration testing does not only test for vulnerabilities, but it also tries to exploit them.</p>



<p>According to NIST SP 800-115, the phases of penetration testing are :</p>



<ol><li>Planning.</li><li>Discovery.</li><li>Attack. (Includes : Gain access, escalate, system browsing and installing additional tools)</li><li>Reporting.</li></ol>



<p>There are two types of penetration testing :</p>



<ul><li>White Hat (Overt) : The IT team is aware of the test.</li><li>Black Hat (Covert) : The IT team is not aware of the test (But management is fully aware of course).</li></ul>



<h3>Log review</h3>



<p>Reviewing logs can be overwhelming. To help in this, a Security Information and Event Management (SIEM) solution can be used.</p>



<p>You should always check logs for integrity :</p>



<ul><li>You should have a secure copy.</li><li>Any changes on logs must be logged.</li><li>You should hash logs for integrity checks.</li></ul>



<h3>Synthetic transactions</h3>



<p>Synthetic transactions are actions run against a monitored system to see how it responds.</p>



<ul><li>RUM (Real-User Monitoring) : Monitors actual users.</li><li>Synthetic performance monitoring : Using scripts that mimic a typical user. It is also called proactive monitoring.</li></ul>



<h3>Code Review and testing</h3>



<p>There are a lot of ways and techniques to perform code review and testing. These are some of the common ones that you should know about:</p>



<ul><li>Manual : Conducted by a human.</li><li>Automatic : Using a software tool.</li><li>Black box : The tester does not have access to the code.</li><li>White box : The tester has access to the code.</li><li>Gray box : The tester has a certain level of knowledge about the inner workings of the system. (Between black box and white box).</li><li>Dynamic : Testing application while running.</li><li>Static : Testing the application without executing it. </li></ul>



<p>For reviewing code, the following methods can be used:</p>



<ul><li>Pair programming : the first person codes, the second person reviews, and then they switch.</li><li>Over-the-shoulder : One person codes, and another person only reviews.</li><li>Pass-around.</li><li>Tool-assisted.</li><li>Fagan inspection : Formal method of 6 steps : Planning, overview, preparation, meeting, rework and followup.</li></ul>



<h3>Use/Misuse case testing</h3>



<ul><li>Use case : Tests based on how the user uses the system.</li><li>Misuse : Tests from the perspective of a malicious user.</li><li>Negative testing<ul><li>Tests how the application would behave if there is an unexpected input.</li><li>Opposite : Positive testing.</li></ul></li></ul>



<p>A fuzzer, or fuzz testing, is a powerful way to test how an application reacts to various inputs. There are two types of fuzz testing: Generation-based and mutation-based.</p>



<h3>Test coverage analysis</h3>



<p>Test coverage analysis determines the percentage of the code that the testing has covered. There are multiple coverage types :</p>



<ul><li>Branch coverage</li><li>Condition coverage</li><li>Function coverage</li><li>Loop coverage</li><li>Statement coverage</li><li>Decision coverage</li></ul>



<p>For each type, the test coverage = Tested code / complete application structure.</p>



<p>Ideally, the test coverage should be equal to 100%.</p>



<h3>Interface Testing</h3>



<p>Interface testing tests if the different components of the application operate well with each other.</p>



<h2 id="metrics">Metrics</h2>



<ul><li>KPIs : Key Performance Indicators<ul><li>Insight about risks that have previously affected an organization</li></ul></li><li>KRIs : Key Risk Indicators<ul><li>Monitor potential shifts in risks so that management can proactively identify potential impacts on the organization.</li></ul></li></ul>



<h2 id="third-party-audits">Third-Party Audits</h2>



<ul><li>SOC 1: Related to financial reportings</li><li>SOC 2 : Cover one or more of the following trust services<ul><li>Trust services<ul><li>Security</li><li>Availability</li><li>Confidentiality</li><li>Processing integrity</li><li>Privacy</li></ul></li></ul></li><li>SOC 3 : Same as SOC 2, but released for public. And so, sensitive information is not included in the SOC 3 report.</li><li>SOC 1 and 2 reports can be one of the following types:<ul><li>Type I : Covers a specified date. It confirms the design.</li><li>Type II : Covers a period of time (Generally between 6 and 12 months). It addresses the effectiveness of controls.</li></ul></li></ul>


<p>We have now gone through all items that are covered in the domain 6 of the CISSP. If you notice that there is some important concept that I have forgotten to mention in this review, please let me know in the comments below.</p>
 
            </article>
            </div>
            <NextandPrevious 
            previous = "/Domain-5-review"
            next = "/Domain-7-review"/>
           <TopIcon />
            <Footer />
        </>
    )
}export default Domainsix;