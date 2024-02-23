import React from "react";
import "../css/Style.css";
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector5 from "../images/vector5.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";

function Domainfive() {
  return (
    <>
      <DomainHeader />
      <div className="Domain-page">
        <img src={vector5} alt="" className="vector"></img>
        <h1>Identity and Access Managementt</h1>
        <h2>Domain 5 Review</h2>
        <article className="article-review">
          <p>
            This post serves as a review for the domain 5 of the CISSP. This
            domain covers identity and access .
          </p>

          <p>
            Before we start, here is a list that will help you navigate through
            the different sections of this domain review.
          </p>

          <ul>
            <li>
              <a href="#identification-and-authentication">
                Identification and Authentication
              </a>
              .
            </li>
            <li>
              <a href="#federated-identity-management">
                Federated Identity Management
              </a>
              .
            </li>
            <li>
              <a href="#authorization">Authorization</a>.
            </li>
            <li>
              <a href="#accountability">Accountability</a>.
            </li>
            <li>
              <a href="#identity-and-access-provisioning-lifecycle">
                Identity and Access Provisioning Lifecycle
              </a>
              .
            </li>
          </ul>

          <h2 id="identification-and-authentication">
            Identification and Authentication
          </h2>

          <p>There are three types of authentication factors :</p>

          <ul>
            <li>
              Type 1 : Something you know.
              <ul>
                <li>
                  Passwords.
                  <ul>
                    <li>This is the weakest type 1 form.</li>
                    <li>
                      You should never store passwords in plain-text. Only their
                      hash is stored, and preferably it should be salted (In
                      combination with a secret string).
                    </li>
                  </ul>
                </li>
                <li>
                  Security questions
                  <ul>
                    <li>Also weak.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Type 2 : Something you have.
              <ul>
                <li>Keys </li>
                <li>Badges and smartcards</li>
                <li>
                  Tokens : Displaying One-Time Passwords.
                  <ul>
                    <li>Synchronous</li>
                    <li>Asynchronous</li>
                  </ul>
                </li>
                <li>Soft Tokens : Mobile phone applications.</li>
                <li>
                  Risk of loss and theft.
                  <ul>
                    <li>Revocation procedures should be in place.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Type 3 : Something you are.
              <ul>
                <li>
                  Biometrics:
                  <ul>
                    <li>Body weight</li>
                    <li>Hand geometry</li>
                    <li>Palm vein recognition</li>
                    <li>Fingerprints</li>
                    <li>Voice recognition.</li>
                    <li>Iris</li>
                    <li>Retina : Can reveal info about medical conditions.</li>
                    <li>Facial recognition</li>
                    <li>Signature dynamics</li>
                    <li>Keystroke dynamics</li>
                  </ul>
                </li>
                <li>
                  Failures:
                  <ul>
                    <li>Type I &#8211; FRR : False rejection rate.</li>
                    <li>
                      Type II &#8211; FAR : False acceptance rate. (This is
                      worst than FRR)
                    </li>
                    <li>
                      CER (Crossover Error Rate), also EER (Equal Error Rate) :
                      When FRR=FAR.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <p>
            You can either have one of the three factors. In this case, you are
            using a single factor authentication.{" "}
          </p>

          <p>
            If you are using more than one factor, then this is called
            multi-factor authentication.
          </p>

          <p>
            Remember that a username only ensures identification, and not
            authentication.
          </p>

          <p>
            NIST 800-63 defines three assurance levels for registration and
            identity proofing :
          </p>

          <ul>
            <li>IAL 1: Identity is self-asserted.</li>
            <li>IAL 2 : Remote or in-person identity proofing.</li>
            <li>
              IAL 3 : In-person Identity proofing. Verification by a Credential
              Service Provider (CSP).
            </li>
          </ul>

          <h2 id="federated-identity-management">
            Federated Identity Management
          </h2>

          <p>
            When talking about federated identity management, there are three
            solutions that are used{" "}
          </p>

          <ol>
            <li>
              SAML
              <ul>
                <li>
                  Three roles :
                  <ul>
                    <li>Identity Provider.</li>
                    <li>Service Provider.</li>
                    <li>User / Principal.</li>
                  </ul>
                </li>
                <li>
                  Components :
                  <ul>
                    <li>Assertions.</li>
                    <li>Bindings.</li>
                    <li>Protocols.</li>
                    <li>Profiles.</li>
                  </ul>
                </li>
                <li>SAML do not provide authentication.</li>
              </ul>
            </li>
            <li>
              OAuth 2.0
              <ul>
                <li>Provide only authorization, and not authentication.</li>
                <li>
                  Components :
                  <ul>
                    <li>Authorization server.</li>
                    <li>Client application</li>
                    <li>Resource owner.</li>
                    <li>Resource server.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              OpenID
              <ul>
                <li>Provide authentication and authorization/</li>
              </ul>
            </li>
          </ol>

          <p>
            IDaaS is when identity is managed as a service by a third-party, to
            allow single sign-on between different applications.
          </p>

          <p>
            The most common way for implementing Single Sign-On (SSO) within an
            organization is using Kerberos.
          </p>

          <p>These are the key components of Kerberos:</p>

          <ul>
            <li>
              KDC (Key Distribution Center). Include two services:
              <ul>
                <li>AS (Authentication Server)</li>
              </ul>
              <ul>
                <li>TGS (Ticket Granting Server).</li>
              </ul>
            </li>
            <li>
              TGT (Ticket Granting Ticket) is a ticket issued by the AS to the
              client. The client canuse it to request a ticket from the TGS.
            </li>
            <li>
              SS (Service Server) : The service that the client wants to access.
            </li>
          </ul>

          <p>
            Sesame is another solution comparable to Kerberos, but it is not
            used as often.
          </p>

          <h2 id="authorization">Authorization</h2>

          <p>
            Here are some access control models that define how authorization is
            granted to subjects:
          </p>

          <ul>
            <li>
              DAC (Discretionary Access Control)
              <ul>
                <li>
                  The rights to access a resource is under the discretion of the
                  owner.
                </li>
              </ul>
            </li>
            <li>
              MAC (Mandatory Access Control)
              <ul>
                <li>Strict and follows the security policies.</li>
                <li>NDAC (Non-Discretionary Access Control)</li>
                <li>
                  Example : Lattice-Based Models (Bell-LaPadula and Biba) are
                  MAC methods.
                </li>
              </ul>
            </li>
            <li>
              Role-BAC
              <ul>
                <li>
                  The rights to access a resource are based on the roles within
                  the organization.
                </li>
                <li>Rights are assigned to roles, not users.</li>
              </ul>
            </li>
            <li>
              Rule-BAC
              <ul>
                <li>
                  The rights to access a resource are based on a list of rules.
                </li>
                <li>Example : Firewall rules.</li>
              </ul>
            </li>
            <li>
              ABAC
              <ul>
                <li>
                  The rights to access a resource are based on policies that
                  combine attributes.
                </li>
                <li>More flexible.</li>
                <li>XACML.</li>
              </ul>
            </li>
          </ul>

          <h2 id="accountability">Accountability</h2>

          <p>
            Logging can enforce accountability. Logs should therefore always be
            protected by separate credentials.
          </p>

          <p>
            To ensure their integrity, you should apply WORM controls : Write
            Once Read Many.
          </p>

          <h2 id="identity-and-access-provisioning-lifecycle">
            Identity and Access Provisioning Lifecycle
          </h2>

          <p>
            Access provisioning lifecycle goes through the following process:
          </p>

          <ul>
            <li>Provision an account.</li>
            <li>Apply permissions.</li>
            <li>Modify permission.</li>
            <li>De-provision the account.</li>
          </ul>

          <p>
            Reviews should be conducted for both user and system accounts.
            Reviews should be conducted more often for privileged accounts.
          </p>

          <p>
            When privileges are accumulated as a result of an employee changing
            positions during the years. Rights are granted, but when they are
            not needed anymore, they do not get revoked. This is called{" "}
            <strong>Privilege creep</strong>.
          </p>

          <p>
            We have now gone through all items that are covered in the domain 5
            of the CISSP. If you notice that there is some important concept
            that I have forgotten to mention in this review, please let me know
            in the comments below.
          </p>
        </article>
      </div>
      <NextandPrevious previous="/Domain-4-review" next="/Domain-6-review" />
      <TopIcon />
      <Footer />
    </>
  );
}
export default Domainfive;
