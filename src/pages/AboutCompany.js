import Header from "../components/Header";
import {
  AboutTitle,
  AboutTitleDiv,
  AboutTitleIcon,
  ParagraphAbout,
  DivWrapper,
  Span,
  ParagraphWrapper,
} from "../components/StyledComponent";

const AboutCompany = () => {
  return (
    <>
      <Header margin={"0"} />
      <DivWrapper>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>კომპანიის შესახებ</AboutTitle>
        </AboutTitleDiv>
        <ParagraphWrapper>
          <ParagraphAbout>
            <Span>არქ-პოინტი</Span> უკვე 15 წელია საქართველოში ქმნის კომფორტული
            ცხოვრების ახალ, თანამედროვე სტანდარტს. კომპანიას მნიშვნელოვანი
            ადგილი უჭირავს ქვეყნის უძრავი ქონების ბაზარზე, რაც განპირობებულია
            მისი გუნდის მაღალი პროფესიონალიზმითა და ინოვაციური მიდგომებით.
          </ParagraphAbout>
          <ParagraphAbout>
            <Span>არქ-პოინტი</Span>-ის აქციების 100%-იანი წილის მფლობელია
            საინვესტიციო კომპანია "საქართველოს კაპიტალი". კომპანიის მიერ
            დასრულებულ 11 საცხოვრებელ კომპლექსში დღეს 3,000-ზე მეტი ოჯახი
            ცხოვრობს. ენერგო ეფექტურობა, მაღალი ხარისხის მშენებლობა, პროექტების
            თანამედროვე ინფრასტრუქტურა, სახლების ჩაბარების შემდგომი მომსახურება
            კომპლექსებში,
          </ParagraphAbout>
          <ParagraphAbout>
            <Span>არქ-პოინტი</Span>-ის სახლებს საქართველოს ბაზარზე გამორჩეულს
            ხდის. 2019 წლიდან კომპანიამ დაიწყო უბნის ტიპის პროექტების
            განხორციელება. სწორედ ასეთი პროექტია m³ საბურთალო, რომელიც 2000
            ოჯახზეა გათვლილი.
          </ParagraphAbout>
          <ParagraphAbout>
            <Span>არქ-პოინტი</Span>-ის დასრულებული საცხოვრებელი კომპლექსებია: m²
            ჩუბინაშვილზე, m² იპოდრომთან, m² ყაზბეგზე, m² ნუცუბიძეზე, m²
            თამარაშვილზე, ოპტიმა ისანი, სქაილაინ რეზიდენსი, m² იპოდრომთან 2, m²
            ყაზბეგზე 2, m² ჭავჭავაძეზე, m² მელიქიშვილზე. დღეისათვის კომპანია
            m²-ს აქვს შემდეგი მიმდინარე პროექტები: m² Highlight, m³ საბურთალო,
            m² მირცხულავაზე, m² ჭყონდიდელზე, m² ნუცუბიძეზე 2, m² მთაწმინდის
            პარკთან.
          </ParagraphAbout>
          <ParagraphAbout>
            <Span>არქ-პოინტი</Span> - იცხოვრე შენი ცხოვრებით!
          </ParagraphAbout>
        </ParagraphWrapper>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>ჩვენი მისია</AboutTitle>
        </AboutTitleDiv>
        <ParagraphAbout>
          ჩვენი მისიაა შევქმნათ და განვავითაროთ ისეთი თანამედროვე სივრცეები და
          ადგილები, რომლებიც ადამიანებს დააკავიშრებენ საკუთარ თავთან, ოჯახის
          წევრებთან, გარემოსთან, მისცემენ საშუალებას იცხოვრონ განსაკუთრებულად,
          საკუთარი ცხოვრებით.
        </ParagraphAbout>
        <AboutTitleDiv>
          <AboutTitleIcon />
          <AboutTitle>ჩვენი ფასეულობები</AboutTitle>
        </AboutTitleDiv>
        <ParagraphAbout>თავისუფლება</ParagraphAbout>
        <ParagraphAbout>ინოვაციურობა</ParagraphAbout>
        <ParagraphAbout>ზრუნვაზე ფოკუსი</ParagraphAbout>
        <ParagraphAbout>მუდმივი განვითარება</ParagraphAbout>
      </DivWrapper>
    </>
  );
};

export default AboutCompany;
