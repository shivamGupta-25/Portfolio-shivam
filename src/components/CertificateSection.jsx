import CertificateSlider from "@/components/CertificateSlider";

const CertificationSection = () => {
  return (
    <section className="pt-12 pb-12 overflow-hidden font-sans">
      <div className="text-center sm:text-left mb-6 sm:mb-8 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-4xl lg:text-6xl xl:text-6xl font-extrabold tracking-tight leading-tight">
          Certifications
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0">
          Explore my certifications and professional activities, reflecting my dedication to continuous learning and growth.
        </p>
      </div>
      <div className="certificate-section min-h-dvh bg-background w-full flex lg:flex-row flex-col items-center">
        <CertificateSlider />
      </div>
    </section>
  );
};

export default CertificationSection;