import InnerComponent from './InnerComponent.jsx';

function MainContainer(props) {
  const VerseList = [
    { id: 1, name: 'Proverbs 31:30 Charm is deceptive and beauty fleeting, but a woman who fears the Lord is to be praised.' },
    { id: 2, name: 'Joshua 1:9 I have commanded you to be brave and strong, havent I? Dont be alarmed or terrified, because the Lord your God is with you wherever you go.' },
    { id: 3, name: '1 Peter 3:3-4 Dont try to make yourselves beautiful on the outside, with stylish hair or by wearing gold jewelry or fine clothes. Instead, make yourselves beautiful on the inside, in your hearts, with the enduring quality of a gentle, peaceful spirit. This type of beauty is very precious in God’s eyes.' },
    { id: 4, name: 'Luke 1:45 Happy is she who believed that the Lord would fulfill the promises he made to her.' },
    { id: 5, name: 'Deuteronomy 31:6 Be strong! Be fearless! Dont be afraid and dont be scared by your enemies, because the Lord your God is the one who marches with you. He wont let you down, and he wont abandon you.' },
    { id: 6, name: 'Psalms 27:1 The Lord is my light and my salvation. Should I fear anyone? The Lord is a fortress protecting my life. Should I be frightened of anything?' },
  ];

  return (
    <div className="container my-4 bg-dark">
      <h1 className="display-4 bg-danger">{props.title}</h1>
      <InnerComponent title="List of Verses" showData data={VerseList} />
    </div>
  );
}

export default MainContainer;