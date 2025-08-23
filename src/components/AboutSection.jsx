import { Highlighter } from "@/components/magicui/highlighter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Animation constants
    const animationConfig = {
      title: {
        y: isTablet ? 40 : 50,
        duration: isTablet ? 0.9 : 0.8,
        stagger: 0.1,
      },
      header: {
        y: isTablet ? 25 : 30,
        duration: isTablet ? 0.7 : 0.6,
        stagger: 0.02,
      },
      content: {
        y: 20,
        duration: 0.8,
      },
    };

    // Scroll trigger configuration
    const scrollTriggerOptions = {
      trigger: ".about-container",
      start: isTablet ? "top 80%" : "top top",
      end: isTablet ? "+=120%" : "+=200%",
      scrub: true,
      pin: !isTablet,
    };

    const mainTl = gsap.timeline({
      scrollTrigger: scrollTriggerOptions,
    });

    // Create split text instances
    const aboutTitle = SplitText.create(".about-header h1", {
      type: "words"
    });

    const aboutHeaderP = SplitText.create(".about-header p", {
      type: "words, lines",
    });

    // Title animation
    mainTl.fromTo(aboutTitle.words, {
      y: animationConfig.title.y,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      color: "var(--primary)",
      ease: "power2.out",
      stagger: animationConfig.title.stagger,
      duration: animationConfig.title.duration,
    }, 0);

    // Header animation
    mainTl.fromTo(aboutHeaderP.words, {
      y: animationConfig.header.y,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      color: "var(--muted-foreground)",
      ease: "power2.out",
      stagger: animationConfig.header.stagger,
      duration: animationConfig.header.duration,
    }, 0.15);

    // Content animation
    mainTl.fromTo(".about-main-content", {
      opacity: 0,
      y: animationConfig.content.y,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      duration: animationConfig.content.duration,
    }, 0.35);
  });

  return (
    <div className="about-container container mx-auto px-4 py-8 md:py-18 max-w-6xl font-sans overflow-hidden">
      <div className="about-header space-y-2 mb-12">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl text-foreground">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground">
          Turning data into insights, building solutions that matter
        </p>
      </div>

      <div className="about-main-content-container prose prose-slate dark:prose-invert max-w-none">
        <div className="about-main-content space-y-6 text-lg leading-7">
          <p className="text-foreground">
            I'm a{" "}
            <Highlighter action="highlight" color="#0ea5e9">
              Data Analyst
            </Highlighter>
            {" "}and aspiring{" "}
            <Highlighter action="underline" color="#8b5cf6">
              Data Scientist
            </Highlighter>
            {" "}with expertise in{" "}
            <Highlighter action="box" color="#10b981">
              Python, SQL, Excel, and data visualization
            </Highlighter>
            . I transform raw data into actionable insights through data cleaning and EDA.
          </p>

          <p className="text-foreground">
            Currently pursuing a{" "}
            <Highlighter action="highlight" color="#f59e0b">
              Master of Operational Research
            </Highlighter>
            {" "}at the{" "}
            <Highlighter action="underline" color="#06b6d4">
              Department of Operational Research,
            </Highlighter>
            {" "}
            <Highlighter action="underline" color="#06b6d4">
              University of Delhi (North Campus)
            </Highlighter>
            , focusing on data-driven decision-making and optimization.
          </p>

          <p className="text-foreground">
            I hold a{" "}
            <Highlighter action="box" color="#8b5cf6">
              Bachelor's degree in Computer Science
            </Highlighter>
            {" "}from Shivaji College, University of Delhi, providing a strong foundation in programming and Data Analytics.
          </p>

          <p className="text-foreground">
            <Highlighter action="bracket" color="#ef4444">
              I have hands-on experience in data cleaning and validation from my administrative internships at University of Delhi,
              {" "}as a Vice-Chancellor Intern and Administrative intern at Shivaji College.
            </Highlighter>
          </p>
          
          <p className="text-foreground">
            Beyond analytics, I build scalable web applications using{" "}
            <Highlighter action="underline" color="#ef4444">
              React, Next.js, and MongoDB
            </Highlighter>
            , combining data expertise with development skills to create impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;