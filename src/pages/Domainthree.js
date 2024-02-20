import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector3 from "../images/vector3.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainthree (){
  
    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector3} alt="" className="vector"></img>
            <h1>Security Architecture and Engineering</h1>
            <h2>Domain 3 Review</h2>
            <article className="article-review">
                <p>This post serves as a review for the domain 3 of the CISSP. This domain covers security architecture and engineering.</p>
                <p>Before we start, here is a list that will help you navigate through the different sections of this domain review.</p>
                <ul>
                    <li>Security Architecture.</li>
                    <li>Security Models.</li>
                    <li>Security Capabilities.</li>
                    <li>Evaluation Criteria.</li>
                    <li>Vulnerabilities in web-based systems.</li>
                    <li>Cryptography.</li>
                    <li>Physical Security.</li>
                </ul>
                <h3>Security Architecture</h3>
                <p>This section addresses the three most common enterprise architectures:</p>
                <ol>
                <li>
                    TOGAF
                    <ul>
                        <li>The Open Group Architecture Framework</li>
                        <li>It is the most used enterprise architecture.</li>
                        <li>An approach to developing and governing an enterprise information technology architecture.</li>
                        <li>High-level.</li>
                    </ul>
                </li>
                <li>
                    Zachmann :
                    <ul>
                        <li>Two-dimensional.</li>
                        <li>On the first dimension, there are 5 questions : Why, How, What, Who, Where, and When.</li>
                        <li>On the second dimension, there are 6 perspectives : Executive, Business Management, Architect, Engineer, Technician, and User.</li>
                    </ul>
                </li>
                <li>
                    SABSA
                    <ul>
                        <li>Sherwood Applied Business Security Architecture</li>
                        <li>An approach to developing risk-driven enterprise information security architecture.</li>
                        <li>Chain of traceability</li>
                    </ul>
                </li>
                </ol>
                <h3>Security Models</h3>
                <ol>
                    <li>Bell LaPadula Model
                        <ul>
                        <li>Confidentiality</li>
                        <li>Simple security property : No read up</li>
                        <li>Star security property : No write down</li>
                        <li>The model does not deal with covert channels</li>
                        </ul>
                    </li>
                    <li>Biba Model
                        <ul>
                        <li>Integrity</li>
                        <li>Simple integrity property : No read down</li>
                        <li>Star integrity property : No write up</li>
                        <li>Invocation property : A subject cannot invoke another subject at a higher level.</li>
                        </ul>
                    </li>
                    <li>Clark Wilson Model
                        <ul>
                        <li>Improvement of Biba model.</li>
                        <li>Allows well-formed transactions, separation of duties.</li>
                        </ul>
                    </li>
                    <li>Lipner Model
                        <ul>
                        <li>A combination of Bell LaPadula and Biba models.</li>
                        <li>Covers both confidentiality and integrity</li>
                        </ul>
                    </li>
                    <li>Brewer Nash Model
                        <ul>
                        <li>Also called: The Chinese Wall</li>
                        <li>Prevent conflict of interests.</li>
                        </ul>
                    </li>
                    <li>Graham Dening Model
                        <ul>
                        <li>Deals with how objects ans subjects are created, and how rights are assigned.</li>
                        </ul>
                    </li>
                </ol>
                <h3>Security Capabilities</h3>
                <ol>
                    <li>Security Kernel : Implementation of the reference model.</li>
                    <li>Processor modes
                        <ul>
                            <li>Privileged Mode (Kernel Mode)</li>
                            <li>Unprivileged Mode (Problem Mode)</li>
                        </ul>
                    </li>
                    <li>Secondary memory
                        <ul>
                            <li>Hard drive, solid state drive, CDs, USB drives,….</li>
                            <li>It is called secondary because it is not directly accessible by the CPU.</li>
                        </ul>
                    </li>
                    <li>Memory Paging
                        <ul>
                        <li>Operating systems can store and retrieve data from secondary memory in same-size blocks called pages. This additional memory is called Virtual memory.</li>
                        <li>Good if the primary memory space is limited.</li>
                        </ul>
                    </li>
                    <li>Memory protection key
                        <ul>
                            <li>Associate a process with a memory block</li>
                        </ul>
                    </li>
                    <li>ASLR (Address Space Layout Randomization)
                        <ul>
                        <li>No more predictable memory address location.</li>
                        <li>Prevent buffer overflow attacks.</li>
                        </ul>
                    </li>
                    <li>DEP : Data Execution Prevention
                        <ul>
                            <li>Prevent execution of code from certain memory locations.</li>
                        </ul>
                    </li>
                    <li>Protection rings
                        <ul>
                        <li>4 rings : from 0 to 4.</li>
                        <li>Ring 0 : Kernel (Runswith the highest privileges)</li>
                        <li>Ring 3 : User applications (Run with the least privileges)</li>
                        </ul>
                    </li>
                </ol>
                <h3>Evaluation Criteria</h3>
                <ol>
                    <li>TCSEC
                        <ul>
                        <li>The Orange Book.</li>
                        <li>Focuses on Confidentiality.</li>
                        <li>Levels (From Lowest to highest) :
                            <ul>
                            <li>D : Minimal protection</li>
                            <li>C1 : Discretionary security protection (DAC)</li>
                            <li>C2 : Controlled access protection (DAC)</li>
                            <li>B1 : Labeled security protection (MAC)</li>
                            <li>B2 : Structured protection (MAC)</li>
                            <li>B3 : Security domains (MAC)</li>
                            <li>A1 : Verified design</li>
                            </ul>
                        </li>

                        </ul>            
                    </li>
                    <li>ITSEC
                        <ul>
                        <li>Cover Confidentiality, Integrity and Availability</li>
                        <li>Target of Evaluation : Product that is evaluated.</li>
                        <li>Two ratings :
                            <ul>
                                <li>Functional levels :
                                    <ul>
                                        <li>F-C1, F-C2, F-B1, F-B2, F-B3 : Requirements for confidentiality.</li>
                                        <li>F-IN : Requirements for integrity</li>
                                        <li>F-AV : Requirements for availability</li>
                                        <li>F-DI : For data integrity during data communication.</li>
                                        <li>F-DX : For integrity and confidentiality during data communication.</li>
                                    </ul>
                                </li>
                                <li>Assurance levels :
                                    <ul>
                                        <li>E0 : Equivalent to D(TCSEC)</li>
                                        <li>E1 : Equivalent to C1</li>
                                        <li>E2 : Equivalent to C2</li>
                                        <li>E3 : Equivalent to B1</li>
                                        <li>E4 : Equivalent to B2</li>
                                        <li>E5 : Equivalent to B3</li>
                                        <li>E6 : Equivalent to A1</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        </ul>            
                    </li>
                    <li>Common Criteria
                        <ul>
                        <li>ISO 15408</li>
                        <li>Protection Profile : Reference document used in evaluation. It specifies security evaluation criteria.</li>
                        <li>Target of Evaluation : Product that is being evaluated.</li>
                        <li>Security Target : Document provided by the vendor of the product. It defines the security details that the product is supposed to have.</li>
                        <li>Levels :

                        </li>

                        </ul>                                        
                    </li>
                </ol>
                <h3>Vulnerabilities in web-based systems</h3>
                <h3>Cryptography</h3>
                <h3>Physical Security</h3>
            </article>
            </div>
            <NextandPrevious
                previous = "/Domain-2-review"
                next = "/Domain-4-review" />
            <TopIcon />
            <Footer />
        </>
    )
}export default Domainthree;