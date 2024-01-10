import '../assets/Heading.css'

interface HeadingOptions{
  title : string;
  desc : string;
}

function Heading(props : HeadingOptions) {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <span className="desc">{props.desc}</span>
    </>
  );
}

export default Heading;
