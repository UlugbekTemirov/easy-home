import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ uz: "Bog'lanish", ru: "Контакт", en: "Contact" }}
        image="https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?s=612x612&w=0&k=20&c=HK-XWrrf6kuezCVb_hvSE1fWu-vpsqoCDb30En5H8y8="
      />
      <Container>
        <h1>Contact</h1>
      </Container>
    </div>
  );
};

export default Index;
