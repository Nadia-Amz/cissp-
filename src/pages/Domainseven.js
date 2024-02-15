import React from "react";
import '../css/Style.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import vector7 from "../images/vector7.png";
import TopIcon from "../components/TopIcon";
import NextandPrevious from "../components/NextandPrevious";



function Domainseven (){
   
    return(
        <>
            <Header />
            <div className="Domain-page">
            <img src={vector7} alt="" className="vector"></img>
            <h1>Security Operations</h1>
            <h2>Domain 7 Review</h2>
            <article className="article-review">
                <p>« Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
                    adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
                    Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                    non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
                    scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                    Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                    Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed
                    dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed
                    pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                    Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa
                    suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, 
                    nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque
                    rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam.
                    Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula.
                    Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, 
                    congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, 
                    augue non elementum posuere, metus purus iaculis lectus, et tristique
                    ligula justo vitae magna.
                    Aliquam convallis sollicitudin purus. 
                    Praesent aliquam, enim at fermentum mollis, 
                    ligula massa adipiscing nisl, ac euismod nibh 
                    nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. 
                    Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. 
                    Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. 
                    Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, 
                    felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet. »
                </p>
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