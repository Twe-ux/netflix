const Section = (props) => {
  //   console.log("Section=>", props.img);
  const img = props.img;
  //   console.log("img=>", img);

  return (
    <section>
      <div className="container">
        <div className="category">{props.data}</div>
        {/* <img src={props.img[0]} alt="" /> */}
        <div className="list-movie">
          {img.map((film, index) => {
            // console.log(film)
            return (
              <div key={index} className="movie">
                <img src={film} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
