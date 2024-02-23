import React from "react";
import "../css/Style.css";
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector8 from "../images/vector8.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";

function Domaineight() {
  return (
    <>
      <DomainHeader />
      <div className="Domain-page">
        <img src={vector8} alt="" className="vector"></img>
        <h1>Software Development Security</h1>
        <h2>Domain 8 Review</h2>
        <article className="article-review">
          <p>
            This post serves as a review for the domain 8 of the CISSP. This
            domain covers the software development security.
          </p>

          <p>
            Before we start, here is a list that will help you navigate through
            the different sections of this domain review.
          </p>

          <ul>
            <li>
              <a href="#software-development-lifecycle">
                Software Development Lifecycle
              </a>
              .
            </li>
            <li>
              <a href="#security-controls-in-development-environments">
                Security Controls in Development Environments
              </a>
              .
            </li>
            <li>
              <a href="#secure-coding-standards-and-guidelines">
                Secure Coding Standards and Guidelines
              </a>
              .
            </li>
            <li>
              <a href="#the-effectiveness-of-software-security">
                The Effectiveness of Software Security
              </a>
              .
            </li>
          </ul>

          <h2 id="software-development-lifecycle">
            Software Development Lifecycle
          </h2>

          <p>
            The first section of domain 8 of the CISSP covers the software
            development lifecycle. It includes the following subjects:
          </p>

          <ul>
            <li>
              <a href="#software-development-phases">
                Software development phases
              </a>
              .
            </li>
            <li>
              <a href="#software-development-methodologies">
                Software development methodologies
              </a>
              .
            </li>
            <li>
              <a href="#maturity-models">Maturity models</a>.
            </li>
            <li>
              <a href="#change-management">Change management</a>.
            </li>
            <li>
              <a href="#integrated-teams">Integrated teams</a>.
            </li>
          </ul>

          <h3 id="software-development-phases">Software development phases</h3>

          <p>
            There are 6 main phases during the software development lifecycle :
          </p>

          <ol>
            <li>Initiation</li>
            <li>Requirements definition</li>
            <li>Architecture</li>
            <li>Design specification</li>
            <li>Development</li>
            <li>Testing and validation</li>
          </ol>

          <p>
            After development, and when talking about a system lifecycle, the
            following two phases are added after testing and validation:
          </p>

          <ul>
            <li>Operation and maintenance</li>
            <li>Disposal</li>
          </ul>

          <h3 id="software-development-methodologies">
            Software development methodologies
          </h3>

          <p>
            There are multiple methodologies used for software development. I
            tried to list here the most common ones:
          </p>

          <ul>
            <li>
              Waterfall:{" "}
              <ul>
                <li>Non-iterative.</li>
                <li>The next phase starts after the previous one is done</li>
                <li>Inability to incorporate change.</li>
              </ul>
            </li>
            <li>
              Spiral
              <ul>
                <li>Iterative.</li>
                <li>
                  It goes through planning, risk analysis, engineering and
                  evaluation in a repeated process.
                </li>
                <li>Good for risky and expensive projects.</li>
              </ul>
            </li>
            <li>
              Cleanroom
              <ul>
                <li>It aims to have no defect in the developed software.</li>
                <li>Not good when flexibility is required.</li>
              </ul>
            </li>
            <li>
              Agile
              <ul>
                <li>Small manageable increments.</li>
                <li>
                  It follows the principles of the Agile manifesto.
                  <ol>
                    <li>Early and continuous delivery of valuable software.</li>
                    <li>
                      Welcome changing requirements, even late in development.
                    </li>
                    <li>Deliver working software frequently.</li>
                    <li>
                      Business people and developers must work together daily.
                    </li>
                    <li>Build projects around motivated individuals.</li>
                    <li>
                      The most efficient and effective method of conveying
                      information is face-to-face conversation.
                    </li>
                    <li>
                      Working software is the primary measure of progress.
                    </li>
                    <li>Agile processes promote sustainable development.</li>
                    <li>
                      Continuous attention to technical excellence and good
                      design enhances agility.
                    </li>
                    <li>Maximizing the amount of work not done.</li>
                    <li>
                      The best architectures, requirements, and designs emerge
                      from self-organizing teams.
                    </li>
                    <li>
                      At regular intervals, the team reflects on how to become
                      more effective, then tunes and adjusts its behavior
                      accordingly.
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
          </ul>

          <h3 id="maturity-models">Maturity Models</h3>

          <p>
            Maturity models are tools that help in improving processes. The most
            common one is the Capability Maturity Model (CMM).
          </p>

          <p>CMM defines 5 maturity levels:</p>

          <ul>
            <li>Initial : Processes are ad-hoc and chaotic.</li>
            <li>Repeated : Processes are managed.</li>
            <li>
              Defined : Processes are understood and documented in procedures
              and standards.
            </li>
            <li>Quantitatively managed: Measured.</li>
            <li>Optimizing : Continuous process improvement.</li>
          </ul>

          <h3 id="change-management">Change Management</h3>

          <p>
            Changes should never be made directly in production. Backups need to
            be made available in case a change is not successful. And always
            make sure to document every step of the change process.
          </p>

          <p>The process is as follow :</p>

          <ul>
            <li>Request for Change</li>
            <li>Analyze the change (Feasibility, impact).</li>
            <li>Approve the change</li>
            <li>Implement and test the change</li>
            <li>Review the change</li>
            <li>Report to management.</li>
          </ul>

          <h3 id="integrated-teams">Integrated teams</h3>

          <p>
            People with different skills and from different environments can be
            combined to form an integrated team. Three examples of integrated
            teams are provided here:
          </p>

          <ul>
            <li>
              Integrated Product Team (IPT)
              <ul>
                <li>
                  A team with various skills that work together to deliver a
                  product.
                </li>
              </ul>
            </li>
            <li>
              Integrated Product and Process Development (IPPD)
              <ul>
                <li>Concurrent development of products and processes.</li>
              </ul>
            </li>
            <li>
              DevOps
              <ul>
                <li>
                  Integrates development, operations and quality assurance.
                </li>
                <li>Based on agile principles.</li>
              </ul>
            </li>
          </ul>

          <h2 id="security-controls-in-development-environments">
            Security controls in development environments
          </h2>

          <p>
            This second section covers security controls in development
            environments. It includes the following subjects.
          </p>

          <ul>
            <li>
              <a href="#databases-and-data-warehouses">
                Databases and data warehouses
              </a>
              .
            </li>
            <li>
              <a href="#web-applications">Web applications</a>.
            </li>
            <li>
              <a href="#malware">Malware</a>.
            </li>
            <li>
              <a href="#security-in-code-repositories">
                Security in code repositories
              </a>
              .
            </li>
          </ul>

          <h3 id="databases-and-data-warehouses">
            Databases and data warehouses
          </h3>

          <p>A database is based on four main components:</p>

          <ul>
            <li>Database engine.</li>
            <li>Hardware platform.</li>
            <li>Application.</li>
            <li>Users.</li>
          </ul>

          <h4>Database models</h4>

          <p>
            Databases are based on models, which define the way data should be
            represented in the database. The following are the most common
            database models:
          </p>

          <ul>
            <li>Hierarchical : The oldest.</li>
            <li>
              Network : Data is represented in the form of a network that
              includes nodes and arcs.
            </li>
            <li>
              Relational: The most common.{" "}
              <ul>
                <li>
                  Based on tables (Rows called tuples, and columns called
                  attributes).
                </li>
              </ul>
            </li>
            <li>
              Object-oriented : Data is stored as objects. Similar to OOP
              languages. A new model.
            </li>
            <li>Object-relational (Hybrid).</li>
            <li>NoSQL : Non Relational. Used when massive data is needed.</li>
          </ul>

          <p>Database models should have the following requirements:</p>

          <ul>
            <li>Transaction persistence.</li>
            <li>
              Fault tolerance and recovery.
              <ul>
                <li>Rollback.</li>
                <li>Shadow.</li>
              </ul>
            </li>
            <li>Multiple users at the same time.</li>
            <li>Security controls.</li>
          </ul>

          <h4>Organizing data in a database</h4>

          <p>
            Database normalization is how a DBMS organizes data in order to
            reduce redundancy (Referenced, non-duplicative&#8230;). A database
            can be in one of the following four normal forms:
          </p>

          <ul>
            <li>Unnormalized</li>
            <li>First normal form</li>
            <li>Second normal form</li>
            <li>Third normal form</li>
          </ul>

          <p>
            Integrity rules are important for a good dbms. For the CISSP, you
            should know two rules:
          </p>

          <ul>
            <li>
              Entity integrity : There should be unique, non-NULL values in the
              primary key.
            </li>
            <li>
              Referential integrity : For each referenced foreign key, a primary
              key should exist with that same value.
            </li>
          </ul>

          <h4>SQL</h4>

          <p>
            A database using SQL will contain the following three components:
          </p>

          <ul>
            <li>Schema</li>
            <li>Tables</li>
            <li>Views</li>
          </ul>

          <p>SQL has three sublanguages:</p>

          <ul>
            <li>
              Data Definition Language (DDL) : For database administrators. Does
              not deal with the actual data stored in the database.
            </li>
            <li>
              Data Manipulation Language (DML) : It deals with data stored in
              the database. Used for inserting, deleting and reading records,{" "}
            </li>
            <li>
              Data Control Language (DCL) : It deals with the security part of
              the database.
            </li>
          </ul>

          <h4>Database transactions</h4>

          <p>Database transactions should be ACID compliant:</p>

          <ul>
            <li>Atomicity : All or nothing.</li>
            <li>
              Consistency : Respects the integrity constraints of the database.
            </li>
            <li>
              Isolation : Transactions should not interfere with each other.
            </li>
            <li>Durability, also called transaction persistence.</li>
          </ul>

          <h4>Database interface languages</h4>

          <p>Three known database interface languages are :</p>

          <ul>
            <li>ODBC: By Microsoft. For relational databases.</li>
            <li>
              OLE DB : Also by Microsoft, but this time for all models of
              databases.
            </li>
            <li>JDBC : By Oracle. For all models of databases.</li>
          </ul>

          <p>
            For databases that need to be accessed from the Internet, it is good
            to have a three-tier model. This will separate the database from the
            user.
          </p>

          <p>The three-tier model has the following three layers:</p>

          <ul>
            <li>Presentation layer.</li>
            <li>Business logic layer.</li>
            <li>Data layer.</li>
          </ul>

          <h4>Data warehouses</h4>

          <p>
            Some concepts related to data warehouses that you should know about
            :
          </p>

          <ul>
            <li>Metadata : Data about data.</li>
            <li>
              OLAP (Online Analytical Processing) : For analyzing data
              warehouses.
            </li>
            <li>
              OLTP (Online Transaction Processing) : For allowing a high number
              of transactions at the same time.
            </li>
            <li>
              Knowledge Discovery in Databases (KDD) :
              <ul>
                <li>
                  Two approaches
                  <ul>
                    <li>Statistical</li>
                    <li>Probabilistic</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h4>Database weaknesses</h4>

          <p>
            Databases have many vulnerabilities and are exposed to different
            threats. This is a list of some of these :
          </p>

          <ul>
            <li>SQL injection : Use prepared statement to help prevent it. </li>
            <li>
              Inference : The ability to deduce sensitive information from
              public data.
            </li>
            <li>
              Aggregation : The ability to deduce sensitive information from
              combining multiple pieces of non-sensitive data.
            </li>
            <li>Access control bypass at the front-end.</li>
            <li>Compromising view-based access control.</li>
            <li>
              Concurrency problems:
              <ul>
                <li>Lost update.</li>
                <li>Dirty read (Temporary update).</li>
                <li>Incorrect summary.</li>
              </ul>
            </li>
            <li>
              Deadlocking (Deadly embrace) : When two transactions are trying to
              execute at the same time, but both are denied.
              <ul>
                <li>Solution : Using lock controls.</li>
              </ul>
            </li>
            <li>DoS attacks (e.g. SQL Slammer).</li>
            <li>TOCTOU (Time Of Check Time Of Use).</li>
          </ul>

          <h3 id="web-applications">Web Applications</h3>

          <p>
            The Open Web Application Security Project (OWASP) maintains many
            frameworks and guidelines, most of which are related to web
            application security :
          </p>

          <ul>
            <li>Development Guide.</li>
            <li>Testing Guide.</li>
            <li>Code Review Guide.</li>
            <li>Top Ten Web Application Security Vulnerabilities.</li>
          </ul>

          <p>
            This is a list of the top ten web application vulnerabilities as
            defined by OWASP:
          </p>

          <ol>
            <li>Injection.</li>
            <li>Broken authentication.</li>
            <li>Sensitive data exposure.</li>
            <li>XML external entities (XXE).</li>
            <li>Broken access control.</li>
            <li>Security misconfiguration.</li>
            <li>Cross-site scripting (XSS).</li>
            <li>Insecure deserialization.</li>
            <li>Using components with known vulnerabilities.</li>
            <li>Insufficient logging and monitoring.</li>
          </ol>

          <p>
            You should remember and understand each of these ten items as part
            of your preparation of the <mark>domain 8</mark> of the{" "}
            <mark>CISSP</mark>.
          </p>

          <h3 id="malware">Malware</h3>

          <p>
            There is a difference between a virus and a worm: A virus requires a
            human to propagate, and a worm can propagate by its own.
          </p>

          <p>Here is a list of the most common types of malware :</p>

          <ul>
            <li>Worm.</li>
            <li>Trojans.</li>
            <li>Remote Access Trojan (RAT)</li>
            <li>Logic Bomb.</li>
            <li>Botnet.</li>
            <li>Spyware.</li>
            <li>Hoaxes,</li>
            <li>Macro virus.</li>
            <li>Companion Virus.</li>
            <li>Boot sector infectors.</li>
            <li>File infectors.</li>
            <li>Multipartite.</li>
            <li>Polymorphic.</li>
          </ul>

          <p>There are three ways to detect malware :</p>

          <ul>
            <li>Signature-based.</li>
            <li>Activity monitoring.</li>
            <li>Heuristic.</li>
          </ul>

          <h3 id="security-in-code-repositories">
            Security in code repositories
          </h3>

          <p>
            This is a list of some best practices for securing code
            repositories:
          </p>

          <ul>
            <li>Defense in depth.</li>
            <li>Physical and logical access controls</li>
            <li>Integrity checks.</li>
            <li>
              Protection of source code
              <ul>
                <li>CVCS : Centalized Version Control System.</li>
                <li>DVCS : Distributed Version Control System.</li>
              </ul>
            </li>
            <li>Backups.</li>
            <li>Sensitive code segregation.</li>
          </ul>

          <h2 id="secure-coding-standards-and-guidelines">
            Secure coding standards and guidelines
          </h2>

          <p>
            This third section covers secure coding standards and guidelines. It
            includes the following subjects.
          </p>

          <ul>
            <li>
              <a href="#programming-languages">Programming languages</a>.
            </li>
            <li>
              <a href="#object-oriented-programming">
                Object-oriented programming
              </a>
              .
            </li>
            <li>
              <a href="#apis">APIs</a>.
            </li>
            <li>
              <a href="#security-weaknesses-at-the-code-level">
                Security weaknesses at the code level
              </a>
              .
            </li>
          </ul>

          <h3 id="programming-languages">Programming languages</h3>

          <p>There are 5 generations of programming languages:</p>

          <ul>
            <li>G1 : machine language (opcode).</li>
            <li>G2 : Assembly language.</li>
            <li>G3 : High-level languages (Java, C&#8230;)</li>
            <li>
              G4 : Very high-level languages, for specific programs (SQL,
              XML&#8230;)
            </li>
            <li>G5 : Require artificial intelligence.</li>
          </ul>

          <h3 id="object-oriented-programming">Object-oriented programming</h3>

          <p>Some concepts related to Object-Oriented Programming (OOP) :</p>

          <ul>
            <li>Data modeling : First step in OOP.</li>
            <li>
              Encapsulation : Data in an object is not accessible to the code.
              Also called data hiding.
            </li>
            <li>
              Inheritance : A class inherits the attributes and methods of its
              parent class.
            </li>
            <li>
              Polyinstantiation : A solution against inference. Multiple
              instances of an object can be created in different classification
              levels.
            </li>
            <li>
              Distributed object-oriented systems:
              <ul>
                <li>CORBA</li>
                <li>JRMI (Not used as often as before).</li>
                <li>DCOM (Microsoft proprietary).</li>
              </ul>
            </li>
          </ul>

          <h3 id="apis">APIs</h3>

          <p>Here are some good practices for API security:</p>

          <ul>
            <li>
              Authentication for RESTful APIs:
              <ul>
                <li>
                  Basic with TLS : the lowest security. Basic authentication
                  should never be used without TLS.
                </li>
                <li>OAuth 1.0a : The most secure, but complicated process.</li>
                <li>
                  OAuth 2.0. : Same as OAuth 1.0a, but without signature. This
                  makes it less complex.
                </li>
              </ul>
            </li>
            <li>A risk assessment should be conducted for all APIs.</li>
            <li>Security testing of APIs using fuzz testing.</li>
          </ul>

          <h3 id="security-weaknesses-at-the-code-level">
            Security weaknesses at the code level
          </h3>

          <ul>
            <li>Buffer overflow.</li>
            <li>Covert channel.</li>
            <li>Memory reuse.</li>
            <li>TOCTOU.</li>
            <li>Backdoors.</li>
          </ul>

          <h2 id="the-effectiveness-of-software-security">
            The effectiveness of software security
          </h2>

          <p>
            This last section of domain 8 of the CISSP covers the effectiveness
            of software security. It includes the following subjects:
          </p>

          <ul>
            <li>
              <a href="#certification-and-accreditation">
                Certification and accreditation
              </a>
              .
            </li>
            <li>
              <a href="#logging-and-auditing">Logging and auditing</a>.
            </li>
            <li>
              <a href="#security-of-acquired-software">
                Security of acquired software
              </a>
              .
            </li>
          </ul>

          <h3 id="certification-and-accreditation">
            Certification and accreditation.
          </h3>

          <p>
            There is an important distinction between certification and
            accreditation :
          </p>

          <ul>
            <li>
              Certification : Developers certify that the software has passed
              all the tests and is operating as expected.
            </li>
            <li>
              Accreditation : The software is granted authorization to operate
              by management. Risk accepted.{" "}
            </li>
          </ul>

          <h3 id="logging-and-auditing">Logging and auditing</h3>

          <p>
            Logging ensures accountability, non-repudiation and facilitates
            audits.
          </p>

          <p>
            Some guidelines and best practices include NIST SP 800-92 and OWASP
            Logging Cheat Sheet.
          </p>

          <h3 id="security-of-acquired-software">
            Security of acquired software
          </h3>

          <p>Software acquisition follows the below process:</p>

          <ul>
            <li>Planning</li>
            <li>Procurement and contracting</li>
            <li>Implementation and acceptance</li>
            <li>Follow-on</li>
          </ul>

          <p>A software assurance policy should be in place.</p>

          <p>
            We have now gone through all items that are covered in the domain 8
            of the CISSP. If you notice that there is some important concept
            that I have forgotten to mention in this review, please let me know
            in the comments below.
          </p>
        </article>
      </div>
      <NextandPrevious previous="/Domain-7-review" />
      <TopIcon />
      <Footer />
    </>
  );
}
export default Domaineight;
