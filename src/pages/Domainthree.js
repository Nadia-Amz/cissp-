import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector3 from "../images/vector3.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainthree (){
  
    return (
      <>
        <DomainHeader />
        <div className="Domain-page">
          <img src={vector3} alt="" className="vector"></img>
          <h1>Security Architecture and Engineering</h1>
          <h2>Domain 3 Review</h2>
          <article className="article-review">
            <p>
              This post serves as a review for the domain 3 of the CISSP. This
              domain covers security architecture and engineering.
            </p>
            <p>
              Before we start, here is a list that will help you navigate
              through the different sections of this domain review.
            </p>
            <ul>
              <li>
                <a href="#security-architecture">Security Architecture</a>.
              </li>
              <li>
                <a href="#security-models">Security Models</a>.
              </li>
              <li>
                <a href="#security-capabilities">Security Capabilities</a>.
              </li>
              <li>
                <a href="#evaluation-criteria">Evaluation Criteria</a>.
              </li>
              <li>
                <a href="#vulnerabilities-in-web-based-systems">
                  Vulnerabilities in web-based systems
                </a>
                .
              </li>
              <li>
                <a href="#cryptography">Cryptography</a>.
              </li>
              <li>
                <a href="#physical-security">Physical Security</a>.
              </li>
            </ul>
            <h2 id="security-architecture">Security Architecture</h2>
            <p>
              This section addresses the three most common enterprise
              architectures:{" "}
            </p>
            <ol>
              <li>
                TOGAF
                <ul>
                  <li>The Open Group Architecture Framework</li>
                  <li>It is the most used enterprise architecture.</li>
                  <li>
                    An approach to developing and governing an enterprise
                    information technology architecture.
                  </li>
                  <li>High-level.</li>
                </ul>
              </li>
              <li>
                Zachmann :
                <ul>
                  <li>Two-dimensional.</li>
                  <li>
                    On the first dimension, there are 5 questions : Why, How,
                    What, Who, Where, and When.
                  </li>
                  <li>
                    On the second dimension, there are 6 perspectives :
                    Executive, Business Management, Architect, Engineer,
                    Technician, and User.
                  </li>
                </ul>
              </li>
              <li>
                SABSA
                <ul>
                  <li>Sherwood Applied Business Security Architecture</li>
                  <li>
                    An approach to developing risk-driven enterprise information
                    security architecture.
                  </li>
                  <li>Chain of traceability</li>
                </ul>
              </li>
            </ol>
            <h2 id="security-models">Security Models</h2>
            <ol>
              <li>
                Bell LaPadula Model
                <ul>
                  <li>Confidentiality </li>
                  <li>Simple security property : No read up</li>
                  <li>Star security property : No write down</li>
                  <li>The model does not deal with covert channels</li>
                </ul>
              </li>
              <li>
                Biba Model
                <ul>
                  <li>Integrity</li>
                  <li>Simple integrity property : No read down</li>
                  <li>Star integrity property : No write up</li>
                  <li>
                    Invocation property : A subject cannot invoke another
                    subject at a higher level.
                  </li>
                </ul>
              </li>
              <li>
                Clark Wilson Model
                <ul>
                  <li>Improvement of Biba model.</li>
                  <li>
                    Allows well-formed transactions, separation of duties.
                  </li>
                </ul>
              </li>
              <li>
                Lipner Model
                <ul>
                  <li>A combination of Bell LaPadula and Biba models.</li>
                  <li>Covers both confidentiality and integrity</li>
                </ul>
              </li>
              <li>
                Brewer Nash Model
                <ul>
                  <li>Also called: The Chinese Wall</li>
                </ul>
                <ul>
                  <li>Prevent conflict of interests.</li>
                </ul>
              </li>
              <li>
                Graham Dening Model
                <ul>
                  <li>
                    Deals with how objects ans subjects are created, and how
                    rights are assigned.
                  </li>
                </ul>
              </li>
            </ol>
            <h2 id="security-capabilities">Security Capabilities</h2>
            <ol>
              <li>Security Kernel : Implementation of the reference model.</li>
              <li>
                Processor modes
                <ul>
                  <li>Privileged Mode (Kernel Mode)</li>
                  <li>Unprivileged Mode (Problem Mode)</li>
                </ul>
              </li>
              <li>
                Secondary memory
                <ul>
                  <li>
                    Hard drive, solid state drive, CDs, USB drives,&#8230;.
                  </li>
                  <li>
                    It is called secondary because it is not directly accessible
                    by the CPU.
                  </li>
                </ul>
              </li>
              <li>
                Memory Paging
                <ul>
                  <li>
                    Operating systems can store and retrieve data from secondary
                    memory in same-size blocks called pages. This additional
                    memory is called Virtual memory.
                  </li>
                  <li>Good if the primary memory space is limited. </li>
                </ul>
              </li>
              <li>
                Memory protection key
                <ul>
                  <li>Associate a process with a memory block</li>
                </ul>
              </li>
              <li>
                ASLR (Address Space Layout Randomization)
                <ul>
                  <li>No more predictable memory address location.</li>
                  <li>Prevent buffer overflow attacks.</li>
                </ul>
              </li>
              <li>
                DEP : Data Execution Prevention
                <ul>
                  <li>
                    Prevent execution of code from certain memory locations.
                  </li>
                </ul>
              </li>
              <li>
                Protection rings
                <ul>
                  <li>4 rings : from 0 to 4.</li>
                </ul>
                <ul>
                  <li>Ring 0 : Kernel (Runswith the highest privileges)</li>
                  <li>
                    Ring 3 : User applications (Run with the least privileges)
                  </li>
                </ul>
              </li>
            </ol>
            <h2 id="evaluation-criteria">Evaluation Criteria</h2>
            <ol>
              <li>
                TCSEC
                <ul>
                  <li>The Orange Book.</li>
                  <li>Focuses on Confidentiality.</li>
                  <li>
                    Levels (From Lowest to highest) :
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
              <li>
                ITSEC
                <ul>
                  <li>Cover Confidentiality, Integrity and Availability</li>
                  <li>Target of Evaluation : Product that is evaluated.</li>
                  <li>
                    Two ratings :
                    <ul>
                      <li>
                        Functional levels :
                        <ul>
                          <li>
                            F-C1, F-C2, F-B1, F-B2, F-B3 : Requirements for
                            confidentiality.
                          </li>
                          <li>F-IN : Requirements for integrity</li>
                          <li>F-AV : Requirements for availability</li>
                          <li>
                            F-DI : For data integrity during data communication.
                          </li>
                          <li>
                            F-DX : For integrity and confidentiality during data
                            communication.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Assurance levels :
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
              <li>
                Common Criteria
                <ul>
                  <li>ISO 15408</li>
                  <li>
                    Protection Profile : Reference document used in evaluation.
                    It specifies security evaluation criteria.
                  </li>
                  <li>
                    Target of Evaluation : Product that is being evaluated.
                  </li>
                  <li>
                    Security Target : Document provided by the vendor of the
                    product. It defines the security details that the product is
                    supposed to have.
                  </li>
                  <li>
                    Levels :
                    <ul>
                      <li>EAL1 : Functionally tested.</li>
                      <li>EAL2 : Structurally tested.</li>
                      <li>EAL3 : Methodically tested and checked.</li>
                      <li>
                        EAL4 : Methodically designed, tested and reviewed.
                      </li>
                      <li>EAL5 : Semi-formally designed and tested.</li>
                      <li>EAL6 : Semi-formally verified design and tested.</li>
                      <li>EAL7 : Formally verified design and tested.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            <h2 id="vulnerabilities-in-web-based-systems">
              Vulnerabilities in web-based systems
            </h2>
            <p>OWASP Top Ten :</p>
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
            <h2 id="cryptography">Cryptography</h2>
            <ol>
              <li>
                Symmetric
                <ul>
                  <li>
                    The sender and receiver must both have the same secret key.
                  </li>
                  <li>
                    Block ciphers:
                    <ul>
                      <li>Generally used for data at rest.</li>
                      <li>Fixed-size blocks.</li>
                    </ul>
                    <ul>
                      <li>
                        DES
                        <ul>
                          <li>Vulnerable</li>
                          <li>56-bit key + 8 bits for parity.</li>
                          <li>64-bit blocks</li>
                        </ul>
                      </li>
                      <li>
                        2DES
                        <ul>
                          <li>Vulnerable to Meet-In-The-Middle attack.</li>
                        </ul>
                      </li>
                      <li>
                        3DES
                        <ul>
                          <li>2 keys : DES-EEE2, DES-EDE2.</li>
                          <li>3 keys : DES-EEE3, DES-EDE3.</li>
                        </ul>
                      </li>
                      <li>
                        AES
                        <ul>
                          <li>Secure algorithm.</li>
                          <li>Blocks of 128-bits.</li>
                          <li>AES-128 : 128-bit key.</li>
                          <li>AES-192 : 192-bit key.</li>
                          <li>AES-256 : 256-bit key.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Blowfish</strong>: Vulnerable, replaced by{" "}
                        <strong>Two-fish</strong>
                      </li>
                      <li>IDEA</li>
                      <li>RC5 and RC6 : parameterized ciphers.</li>
                      <li>
                        Block ciphers use S-Boxes (Substitution) and P-Box
                        (Permutation).
                      </li>
                      <li>
                        Padding is added for messages that have a length not a
                        multiple of the block length.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Stream ciphers:
                    <ul>
                      <li>1 bit at a time</li>
                      <li>
                        Use XOR operator, and keystream generator (Random bits).
                      </li>
                    </ul>
                    <ul>
                      <li>RC4</li>
                    </ul>
                  </li>
                  <li>
                    Operating modes :
                    <ul>
                      <li>ECB : Easier, but less secure.</li>
                      <li>
                        CBC : The first block of data is XORed with the IV
                        (Initialization Vector). Every subsequent block is XORed
                        with the previous ciphertext block.
                      </li>
                      <li>For stream ciphers : CFB, OFB</li>
                      <li>
                        CTR: Allows for parallel processing of the blocks using
                        a counter value (Nonce).
                      </li>
                    </ul>
                  </li>
                  <li>
                    The number of secret keys needed for n people is n(n-1)/2.
                    <ul>
                      <li>Creates a problem of scalability.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Asymmetric
                <ul>
                  <li>
                    Used for secret key exchange, and not for bulk
                    communication.
                  </li>
                  <li>
                    Algorithms
                    <ul>
                      <li>Trapdoor functions</li>
                    </ul>
                    <ul>
                      <li>
                        Based on factoring problem{" "}
                        <ul>
                          <li>RSA</li>
                        </ul>
                      </li>
                      <li>
                        Based on discrete logarithm problem
                        <ul>
                          <li>Diffie Hellman : Used for key exchange.</li>
                          <li>
                            El Gamal : Based on Diffie Hellman, but adds message
                            confidentiality and digital signatures.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Based on elliptic curves
                        <ul>
                          <li>ECC : Used in smart cards and wireless.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assymetric algorithms are vulnerable to quantum computers.
                  </li>
                  <li>
                    Post-quantum cryptography are cryptographic algorithms that
                    are secure against a quantum computer attack.
                  </li>
                </ul>
              </li>
              <li>
                Key Management
                <ul>
                  <li>
                    Secure key generation
                    <ul>
                      <li>
                        Using hardware-based random number generators. For
                        example embedded in a TPM (Trusted Platform Module).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Secure key storage and use
                    <ul>
                      <li>
                        KEKs
                        <ul>
                          <li>Key Encryption Keys.</li>
                          <li>
                            KEKs can be generated and stored securely in an HSM.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Key rotation and key change</li>
                  <li>Key escrow</li>
                  <li>Key destruction</li>
                </ul>
              </li>
              <li>
                Hashing
                <ul>
                  <li>MD-5 : The least secure.</li>
                  <li>SHA-1 : Also not secure.</li>
                  <li>
                    SHA-2 : 4 types
                    <ul>
                      <li>SHA-224 : 224-bit output.</li>
                      <li>SHA-256 : 256-bit output.</li>
                      <li>SHA-512 : 512-bit output.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Digital signatures
                <ul>
                  <li>
                    When sending : The sender encrypts the hash of the message
                    with their private key to create the digital signature, and
                    appends it to the message
                  </li>
                  <li>
                    When receiving : The receiver decrypts the digital signature
                    with the public key of the sender to retrieve the hash of
                    the message, and then compares it with the hash of the
                    message that they received.
                  </li>
                  <li>Ensures integrity, authenticity and non-repudiation.</li>
                </ul>
              </li>
              <li>
                Public Key infrastructure
                <ul>
                  <li>
                    Certificate Authority (CA) : Digitally signs a public key on
                    a certificate using X.509 standard.
                  </li>
                  <li>
                    Registration authority (RA) : Verify a request for the
                    digital certificate on behalf of the certificate authority.
                  </li>
                  <li>
                    Validation authority (VA) : Verify the validity of a digital
                    certificate.
                  </li>
                  <li>
                    CRL : Certificate Revocation List, contains all certificates
                    that are no longer valid.
                  </li>
                  <li>
                    OCSP : A protocol for confirming if a given digital
                    certificate has not been revoked.
                  </li>
                </ul>
              </li>
              <li>
                Cryptographic attacks
                <ul>
                  <li>
                    Known plaintext : The attacker has access to both a
                    plaintext and its ciphertext.
                  </li>
                  <li>Ciphertext-only : The most difficult.</li>
                  <li>
                    Chosen plaintext : The attacker can choose a plaintext and
                    obtain its encryption.
                  </li>
                  <li>
                    Chosen ciphertext : The attacker can choose a ciphertext and
                    obtain its corresponding plaintext.
                  </li>
                  <li>Rainbow table : Table of pre-calculated hashes.</li>
                  <li>
                    Hash Collision : When two texts generate the same hash.
                  </li>
                  <li>
                    Birthday Attack : Aims at finding two messages that have the
                    same hash.
                  </li>
                  <li>
                    Frequency analysis : Used when the language of the plaintext
                    is known.
                  </li>
                  <li>Factoring attack : Used against RSA algorithm</li>
                  <li>Attack against the random number generator.</li>
                </ul>
              </li>
            </ol>

            <h2 id="physical-security">Physical security</h2>

            <ol>
              <li>Safety of people always comes first.</li>
              <li>
                Server rooms and data centers
                <ul>
                  <li>Secure the physical access.</li>
                  <li>HVAC.</li>
                  <li>Secure against environmental risks.</li>
                  <li>Fire safety.</li>
                </ul>
              </li>
              <li>
                Wiring Closets and intermediate distribution facilities
                <ul>
                  <li>
                    They should also be secured, but in reality they are often
                    neglected.
                  </li>
                </ul>
              </li>
              <li>
                Media storage facilities
                <ul>
                  <li>Ensure that media will not be degraded over time</li>
                  <li>Controlled temperature and humidity.</li>
                  <li>Air filtration.</li>
                </ul>
              </li>
              <li>
                Evidence storage
                <ul>
                  <li>Log book to maintain chain of custody.</li>
                  <li>CCTV</li>
                  <li>Locks</li>
                </ul>
              </li>
              <li>
                Fire safety
                <ul>
                  <li>
                    Classes
                    <ul>
                      <li>
                        A : Solid materials (Ex: paper, wood&#8230;).
                        <ul>
                          <li>Extinguisher : Water, dry powder, halon.</li>
                        </ul>
                      </li>
                      <li>
                        B : Flammable liquids (Ex: diesel,&#8230;).
                        <ul>
                          <li>Extinguisher : CO², dry powder, halon.</li>
                        </ul>
                      </li>
                      <li>
                        C : Electrical equipment.
                        <ul>
                          <li>Extinguisher : CO², dry powder, halon.</li>
                        </ul>
                      </li>
                      <li>
                        D : Combustible metal.
                        <ul>
                          <li>Extinguisher : Dry powder.</li>
                        </ul>
                      </li>
                      <li>
                        K : Cooking equipment (Ex: Oil, animal fats&#8230;)
                        <ul>
                          <li>Extinguisher : Wet chemical.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Water sprinkler
                    <ul>
                      <li>
                        Wet pipe : Water is always in the pipes. When a
                        sprinkler head is activated, it operates instantly and
                        independently.
                      </li>
                      <li>
                        Dry pipe : Pressurized gas is in the pipes. When a
                        sprinkler head is activated, the water fills the pipes
                        and the sprinkler head operates independently.
                      </li>
                      <li>
                        Deluge : When a sensor detects a fire, the water fills
                        the pipes and all sprinkler heads operate
                        simultaneously.
                      </li>
                      <li>
                        Pre-action : When a sensor detects a fire, the water
                        fills the pipes but then every sprinkler head operates
                        independently.
                        <ul>
                          <li>This is generally the preferred option.</li>
                        </ul>
                      </li>
                      <li>
                        Remember : Water sprinkler are not to be used for
                        electrical fires.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              We have now gone through all items that are covered in the domain
              3 of the CISSP. If you notice that there is some important concept
              that I have forgotten to mention in this review, please let me
              know in the comments below.
            </p>
          </article>
        </div>
        <NextandPrevious previous="/Domain-2-review" next="/Domain-4-review" />
        <TopIcon />
        <Footer />
      </>
    );
}export default Domainthree;