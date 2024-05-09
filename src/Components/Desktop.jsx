import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import Accordionn from "./Accordionn";


const Desktop = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <div className="logo">
          <img
            className="h-8"
            loading="lazy"
            alt=""
            src="/component-40@2x.png"
          />
        </div>
        <nav className="flex gap-">

        <ul className="flex gap-12 relative left-3/4 cursor-pointer">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        </nav>
        <button className="py-2 px-6 bg-gradient-to-b from-blue-900 to-blue-500 rounded-full text-white">
        Login
        </button>

      </header>
      <main className="py-8">
        <div className="flex gap-4">
          <div className="flex items-center">
            <img
              className="h-4 w-4 mr-1"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <img
              className="h-3 w-3 mr-1"
              alt=""
              src="/frame-1.svg"
            />
            <div>Flashcard</div>
          </div>
          <div className="flex items-center">
            <img
              className="h-3 w-3 mr-1"
              alt=""
              src="/frame-1.svg"
            />
            <div>Mathematics</div>
            <div className="flex items-center ml-2 text-darkslateblue">
              <img
                className="h-3 w-3 mr-1"
                alt=""
                src="/frame-1.svg"
              />
              <div>Relation and Function</div>
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <FrameComponent />
        <section className="py-4">
          <h1 className="text-2xl font-bold">FAQ</h1>
          <Accordionn summary="Can education flashcards be used for all age groups?" details="Yes, Education flashcards can be tailored to differentage groupsand leraning levels There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners."/>

          <Accordionn summary="How do education flashcards work?" details="Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition."/>

          <Accordionn summary="Can education flashcards be used for test preparation?" details="Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams."/>
          
        </section>
      </main>
    </div>
  );
};

export default Desktop;
