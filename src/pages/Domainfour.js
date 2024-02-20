import React from "react";
import '../css/Style.css';
import DomainHeader from "../components/DomainHeader";
import Footer from "../components/Footer";
import vector4 from "../images/vector4.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainfour (){

    return(
        <>
            <DomainHeader />
            <div className="Domain-page">
            <img src={vector4} alt="" className="vector"></img>
            <h1>Communication and Network Security</h1>
            <h2>Domain 4 Review</h2>
            <article className="article-review">
            <p>This post serves as a review for the domain 4 of the CISSP. This domain covers communication and network security.</p>



<p>Before we start, here is a list that will help you navigate through the different sections of this domain review:</p>



<ul><li><a href="#secure-design-principles">Secure Design Principles</a>.</li><li><a href="#secure-network-components">Secure Network Components</a>.</li><li><a href="#secure-communication-channels">Secure Communication Channels</a>.</li></ul>



<h2 id="secure-design-principles">Secure Design Principles</h2>



<h3>OSI Model </h3>



<p>The OSI Model is specified in ISO 7498. It defines 7 Layers : Physical, data-link, network, transport, session, presentation, and application.</p>



<p>A good mnemonic to remember these layers (From top down) : <strong>A</strong>ll <strong>P</strong>eople<strong> S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing.</p>



<p>TCP/IP Model is another model that defines 4 Layers : Network interface, Internet layer, Transport layer, and application layer.</p>



<h3>Physical Layer</h3>



<h4>Topologies</h4>



<p>There are four common topologies : Bus, ring, star and mesh.</p>



<p>Ethernet is an example of a logical bus topology, even though it is often deployed in a physical star topology.</p>



<p>FDDI is an example of a ring topology, but it uses two rings for redundancy.</p>



<p>Token ring uses a physical star topology, and a logical ring topology.</p>



<h4>CSMA</h4>



<p>CSMA/CD : Collision detection. It is used in Ethernet (IEEE 802.3)</p>



<p>CSMA/CA : Collision avoidance. It is used in wi-fi (IEEE 802.11)</p>



<h4>Media</h4>



<p>There are three types of media that are used in physical links:</p>



<ol><li>Twisted Pair: 4 pairs of wires twisted in pairs to reduce electromagnetic interference. Two types:<ul><li>UTP : Unshielded Twisted Pair<ul><li>It is not shielded, so it is susceptible to interference.</li><li>It costs less, and is more flexible</li></ul></li><li>STP : Shielded Twisted Pair<ul><li>It uses a shield that surrounds the wires, so it is less susceptible to interference.</li><li>It costs more, and is less flexible (So it is harder to bend than UTP) </li></ul></li></ul></li><li>Coaxial<ul><li>One thick wire protected by a non-conducting material. </li><li>It is expensive, and less flexible.</li><li>It is not used as often as the twisted pair cable.</li></ul></li><li>Fiber optic cable<ul><li>It is made of a very thin tube of glass that transmits data in the form of light.</li><li>Two types:<ul><li>Singlemode<ul><li>It can cover long distances. Less attenuation.</li><li>The glass core has smaller diameter, which reduces the number of light reflections.</li></ul></li><li>Multimode<ul><li>It can cover shorter distances than singlemode.</li><li>The glass core has a larger diameter, so the transmitted light will have to go through a higher number of reflections. This reduces the distance that it can cover.</li></ul></li></ul></li></ul></li></ol>



<h4>Internet access</h4>



<p>Three common ways are used to provide internet access :</p>



<ol><li>DSL (Digital Subscriber Line)<ul><li>ADSL : Asymmetric DSL</li><li>VDSL : Very-high DSL</li><li>HDSL : High-bit-rate DSL</li><li>SDSL : Symmetric DSL</li><li>RADSL : Rate-Adaptive DSL</li></ul></li><li>Cable Modem<ul><li>Most cable modems comply with DOCSIS<ul><li>DOCSIS 3.1 is the latest version. It can ensure up to 10 Gbps for both upload and download.</li></ul></li></ul></li><li>BPL : Broadband over Powerline<ul><li>Internet service delivery over electric power lines.</li><li>It can use existing electrical outlets.</li></ul></li></ol>



<h4>Wireless</h4>



<p>These are the most common wireless communication technologies:</p>



<ol><li>Wi-fi (IEEE 802.11)<ul><li>IEEE 802.11a/b/g/n/ac.</li><li>Use 2.4GHz or 5GHz frequency, or both.</li><li>The latest is IEEE 802.11ac.</li></ul></li><li>Bluetooth (IEEE 802.15)<ul><li>Known attacks<ul><li>Bluejacking</li><li>Bluesnarfing</li><li>Blueborne</li></ul></li></ul></li><li>WiMAX (IEEE 802.15)</li><li>Cellular<ul><li>1G : Analog</li><li>2G : GPRS, EDGE</li><li>3G : HSDPA</li><li>4G : LTE</li><li>5G : SDNs</li></ul></li><li>Satellite</li></ol>



<h3>Data-Link Layer</h3>



<p>The data-link layer can be further separated into two sublayers :</p>



<ul><li>MAC (Media Access Control)</li><li>LLC (Logical Link Control)</li></ul>



<h4>Protocols</h4>



<p>As for the protocols used in this layer, Ethernet is the most common one. Still, there are other protocols operating in this layer that you should know about:</p>



<ul><li>MPLS (Multiprotocol Label Switching)<ul><li>It assigns labels to packets indicating the entire path to facilitate routing, &#8220;Label switching&#8221;.</li><li>It operates at layer 2 and 3</li><li>Components :<ul><li>Edge Node</li><li>Label Switching Router</li><li>Label Switch Path.</li></ul></li></ul></li><li>PPP (Point-to-Point Protocol)<ul><li>LCP : Link Control Protocol, for establishing connections.</li><li>NCP : Network Control Protocol, For configuring network layer protocols.</li><li>Authentication using :<ul><li>PAP : Password Authentication Protocol. Simple, 2-way handshake. Not recommended.</li><li>CHAP : Challenge-Handshake Authentication Protocol. Better security than PAP.</li></ul></li></ul></li><li>ARP (Address Resolution Protocol)<ul><li>It is used for obtaining the MAC address of a given IP address.</li></ul></li></ul>



<h4>Devices</h4>



<p>These are the devices that operate in the layer 2.</p>



<ul><li>Switch<ul><li>Layer 2.</li></ul><ul><li>Security :<ul><li>Port Security</li><li>MAC filtering</li><li>Segmentation using VLANs</li></ul></li><li>Attacks<ul><li>MAC Flooding</li><li>VLAN hopping<ul><li>Switch spoofing.</li><li>Double tagging.</li></ul></li></ul></li></ul></li><li>Bridge<ul><li>A switch with only two ports.</li></ul></li></ul>



<h4>Network Layer</h4>



<p>These are the protocols that operate on layer 3 (Network Layer):</p>



<ul><li>IP<ul><li>IPv4 : The address space is insufficient</li><li>IPv6 : Larger address space, plus other additional features.<ul><li>IPSec can be included.</li><li>Better Quality of Service (QoS).</li></ul></li></ul></li><li>ICMP<ul><li>Used for diagnostic.</li><li>Example : ping and traceroute use ICMP</li><li>Attack<ul><li>Smurf</li><li>Ping of Death</li><li>Ping scanning</li></ul></li></ul></li><li>IGMP<ul><li>Manage multicast groups.</li><li>Managed by local agents</li></ul></li><li>Routing protocols<ul><li>RIP<ul><li>Type : Distance Vector</li><li>Count the number of hops to determine the best path.</li><li>Interior Gateway Protocol (IGP).</li></ul></li><li>OSPF<ul><li>Type : Link-State</li><li>Chooses the best path based on the state of the link : Availability, load, cost, bandwidth, so it is better than RIP.</li><li>Interior Gateway Protocol (IGP).</li></ul></li><li>BGP<ul><li>Type : Path-vector</li><li>The protocol used for routing in the Internet, and between ISP&#8217;s routers.</li><li>Exterior Gateway Protocol (EGP).</li></ul></li></ul></li></ul>



<p>The router is the main device used in layer 3. It routes packets between networks. Security in routers is often enforced using ACLs : Access Control Lists.</p>



<h3>Transport Layer</h3>



<p>There are two types of protocols operating on layer 4 (Transport layer) :</p>



<ul><li>TCP : Connection-oriented protocol.<ul><li>Most common attacks : <ul><li>SYN Flood</li><li>SYN Scan</li></ul></li></ul></li><li>UDP : Connectionless protocol.<ul><li>Most common attack : Fraggle.</li></ul></li></ul>



<p>Ports are the equivalent to addresses within a host for applications. There are 65535 ports in total. Ports from 0 to 1023 are well-known ports.</p>



<p>Examples:</p>



<ul><li>FTP 21</li><li>SSH 22</li><li>Telnet 23</li><li>SMTP 25</li><li>HTTP 80</li><li>HTTPS 443</li></ul>



<h3>Application Layer</h3>



<p>Here is a list of the most common protocols used at the application layer:</p>



<ol><li>SNMP<ul><li>It is used to manage network devices.</li><li>SNMP v1 and v2 are not secure, and should not be used.</li><li>SNMP v3 is the most secure version.</li><li>Community string : Password.</li></ul></li><li>DNS<ul><li>It resolves domain names to IP addresses.</li><li>It operates on port 53</li><li>DNSSEC : A more secure extension of DNS.<ul><li>It adds authenetication.</li></ul></li><li>Most common attacks :<ul><li>DNS Poisoning</li><li>DNS amplification</li></ul></li></ul></li><li>LDAP<ul><li>Lightweight Directory Access Protocol.</li><li>It operates on port 389.</li><li>LDAPS (LDAP over SSL) uses port 636.</li><li>Most common attack:<ul><li>LDAP injection</li></ul></li></ul></li><li>DHCP<ul><li>It is used to assign IP addresses to hosts.</li><li>APIPA address : 169.254.x.x. The computer self-assigns an IP address in this range when it cannot see the network.</li><li>It operates on ports 67 and 68.</li><li>Most common attack:<ul><li>DHCP Spoofing.</li></ul></li></ul></li></ol>



<h2 id="secure-network-components">Secure Network Components</h2>



<h3>Firewall</h3>



<p>There are four common types of firewalls:</p>



<ul><li>Static packet filtering firewall.<ul><li>The simplest, fastest, but it also provides the lowest protection.</li><li>It only checks the network header.</li></ul></li><li>Circuit level firewall.<ul><li>It ensures that the TCP handshake is complete.</li></ul></li><li>Stateful inspection firewall.<ul><li>It keeps track of the status of connections.</li></ul></li><li>Next-gen Firewall<ul><li>It adds new security features, such as IDS, IPS and malware prevention.</li></ul></li></ul>



<h3>NAT</h3>



<p>NAT (Network Address Translation) is used as a solution for the small IPv4 address space. It changes the source address of an outgoing packet to a different address. </p>



<p>NAT can be implemented in routers, proxies and firewalls. It also has another advantage of hiding internal IP addresses from external hosts.</p>



<h3>IDS/IPS</h3>



<p>IDS (Intrusion Detection System) detects suspicious activities, and sends an alert. It can be host-based (Monitors a host like a Server or a workstation), or it can be network-based (Monitors the traffic in a network).</p>



<p>IDS, do not prevent. They only detect. For prevention, IPS are used (Intrusion Prevention Systems).</p>



<h3>SIEM</h3>



<p>A SIEM centralizes logs from all security devices and applications. It provides intelligent inspection and analysis.</p>



<h3>UTM</h3>



<p>UTM (Unified Threat Management) integrates functions from multiple security devices into one solution.</p>



<h3>Proxies</h3>



<p>Proxies operate in between the internal network and the untrusted network, and establish connections with untrusted hosts on behalf of internal systems.</p>



<h3>VPN Concentrators</h3>



<p>VPN Concentrators are special devices that establish VPN connections between VPN nodes.</p>



<h3>Wireless</h3>



<p>Before we move on to the next section, let&#8217;s address a few concepts related to wireless communications.</p>



<p>There are multiple techniques of using the frequency spectrum:</p>



<ul><li>DSSS : Data is divided and transmitted across multiple frequencies.</li><li>FHSS : Frequency Hopping.</li><li>OFDM : Orthogonal Frequency. Carriers are overlapped, but this is not a problem, since they are orthogonal.</li></ul>



<p>These are some methods for securing wireless communications:</p>



<ul><li>WEP: The less secure.</li><li>WPA : It uses LEAP and TKIP. Still not secure.</li><li>WPA2 : Secure. <ul><li>It uses CCMP (CounterMode with Cipher Block Chaining Message Authentication Code Protocol)</li><li>Two-types : Personal and Enterprise.</li></ul></li></ul>



<p>EAP (Extensible authentication protocol) is an authentication framework. many methods are based on EAP (Ex: PEAP, LEAP, EAP-TLS,&#8230;).</p>



<p>LEAP is a Cisco Proprietary alternative to TKIP. But it is still not secure.</p>



<p>EAP-TLS is the most secure.</p>



<h2 id="secure-communication-channels">Secure Communication Channels</h2>



<h3>VoIP</h3>



<p>VoIP uses SIP (Session Initiation Protocol).</p>



<p>There are multiple attacks that target VoIP systems:</p>



<ul><li>Vishing : Voice Phishing.</li><li>SPIT : Spam over IP Telephony.</li><li>MITM : Man-In-The-Middle.</li></ul>



<p>Other problems related to VoIP include:</p>



<ul><li>Jitter: Packets arrive at various times.</li><li>Packet loss : It can be mitigated using PLC (Packet Loss Concealment). PLC can either use zero subtitution for portions that were lost; or it can interpolate the gaps. The latter provides better quality than the former.</li></ul>



<h3>Multimedia collaboration</h3>



<h4>Instant Messaging (IM)</h4>



<p>Problems related to IM include:</p>



<ul><li>SPIM (Spam over IM).</li><li>IM traffic is often not detectable by firewalls, since it is embedded within application protocols, like HTTP for example.</li></ul>



<h4>Email</h4>



<ul><li>Communication between mail servers is done using SMTP.</li><li>Communication between mail servers and clients is done using POP3 or IMAP.</li><li>Open mail relays are SMTP Servers that are used to forward spam.</li><li>Security solutions for email:<ul><li>S/MIME, PGP, MOSS, PEM, and DKIM.</li></ul></li></ul>



<h3>Remote access/VPN</h3>



<p>Remote access can be achieved using many protocols. The most common ones are:</p>



<ul><li>Telnet : Not secure, lack of encryption.</li><li>SSH: An alternative to Telnet. Better security.</li></ul>



<p>VPN can use software or hardware devices (VPN Concentrators). Examples of protocols used in VPN include:</p>



<ul><li>PPTP : Tunnel protocol. It is based on PPP.</li><li>L2TP : Tunnel protocol. It provides authentication, but not encryption. It relies on IPSec.</li><li>IPSec :<ul><li>The most common.</li><li>Not a protocol, but a suite of protocols :<ul><li>AH : Authentication Header.</li><li>ESP : Encapsulating Security Payload.</li><li>IKE : Internet Key Exchange.</li></ul></li><li>Two modes of operation :<ul><li>Tunnel mode.</li><li>Transport mode.</li></ul></li><li>NAT is incompatible with IPSec. For this, NAT-T is used.</li></ul></li><li>SSL/TLS are also used for VPN.<ul><li>SSL is becoming less and less secure. Use TLS instead.</li></ul></li></ul>



<h3>Virtualized networks</h3>



<h4>SDN</h4>



<p>Software-Defined Networks (SDN) separate the network functions from the hardware. It distinguish between three planes:</p>



<ul><li>Infrastructure plane (Data plane) : It includes switches and routers.</li><li>Control plane.</li><li>Application plane.</li></ul>



<h4>SD-WAN</h4>



<p>SD-WAN is th extension of SDN to the Internet.</p>



<h3>CDNs</h3>



<p>CDNs (Content Distribution Networks) consists of multiple servers deployed in multiple locations to deliver content to end-users rapidly, and with a high availability.</p>



<h3>Converged networks</h3>



<p>Examples of converged networks include :</p>



<ul><li>FCoE</li><li>iSCSI</li><li>MPLS</li></ul>


<p>We have now gone through all items that are covered in the domain 4 of the CISSP. If you notice that there is some important concept that I have forgotten to mention in this review, please let me know in the comments below.</p>
 
            </article>
            </div>
            <NextandPrevious 
                previous = "/Domain-3-review"
                next = "/Domain-5-review"/>
            <TopIcon />
            <Footer />
        </>
    )
}export default Domainfour;