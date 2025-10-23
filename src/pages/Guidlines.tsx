import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Guidlines: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <Navbar />
      </section>

      <section className="w-11/12 md:w-5/6 flex flex-col gap-6 lg:gap-10 mx-auto pt-40 pb-30">
        {/* heading */}
        <div className="text-center">
          <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
            How to conduct
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
            Funeral Guidelines
          </h1>
        </div>

        <p className="text-ternary text-base lg:text-lg font-light leading-7 lg:leading-8 text-justify">
          At a person’s death, the church shares the grief of those who mourn
          and remembers the brevity of life on earth. At the funeral we give
          voice to sorrow, thank God for our loved one, and entrust this
          companion of ours into the hands of God. Trusting in God’s promise in
          baptism that we are claimed by Christ forever, we rest in the sure
          hope of the resurrection. When the church gathers to mark the end of
          life, Christ crucified and risen is the witness of worship, the
          strength of mutual consolation, and then hope of healing. [Evangelical
          Lutheran Worship, p. 279]
          <br />
          <br />
          Good Shepherd Lutheran Church is an assembly of baptized children of
          God. The most essential thing that we do is gathering to worship our
          Lord Jesus Christ. In worship, Christians are reminded again and again
          that they are the baptized people of God and that their Baptism is not
          just for this time and this world but forever.
          <br />
          <br />
          We understand the funeral to be a service of worship to God through
          Jesus Christ in the power of the Holy Spirit. The death of a baptized
          Christian, one who has lived in the communion of the church, is an
          occasion for thanksgiving and the proclamation of the resurrection of
          Jesus Christ. Every activity surrounding such a death and burial
          should point to the good news of the gospel.
          <br />
          <br />
          The guidelines provided here were approved by the congregational
          council of Good Shepherd Lutheran Church on June 12, 2007.
        </p>
      </section>

      <section className="w-full mt-20 lg:mt-30">
        <Footer />
      </section>
    </>
  );
};

export default Guidlines;
