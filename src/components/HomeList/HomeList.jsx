import "./HomeList.css";

export default function HomeList() {
  return (
    <div className="HomeList">
      <video controls autoPlay="true" loop="true">
        <source
          src="https://media.istockphoto.com/id/1078964184/video/woman-tying-shoelaces-on-running-shoes.mp4?s=mp4-640x640-is&k=20&c=QfQbzu8DxEA5zx2ilJQVAGazslVVwCnUnK1nsYZ1c7E="
          tupe='video/mp4;codecs="avc1.42E01E,mp4.40.2"'
        ></source>
      </video>

      <h2>Filter DIV Elements</h2>
      <div id="myBtnContainer">
        <button class="btn active" onclick="filterSelection('all')">
          {" "}
          Show all
        </button>

        <button class="btn" onclick="filterSelection('running shoes')">
          {" "}
          Running shoes
        </button>
        <button class="btn" onclick="filterSelection('basketball shoes')">
          {" "}
          Basketball shoes
        </button>
        <button class="btn" onclick="filterSelection('tennis shoes')">
          {" "}
          Tennis shoes
        </button>
        <button class="btn" onclick="filterSelection('fitnesssneakers')">
          {" "}
          Fitness sneakers
        </button>
      </div>

      <div class="container">
        <div class="filterDiv running shoes">Lungs</div>
        <div class="filterDiv basketball shoes">High.</div>
        <div class="filterDiv running shoes">Good ventilation</div>
        <div class="filterDiv basketball shoes">Medium</div>
        <div class="filterDiv running shoes"> Adequate cushioning</div>
        <div class="filterDiv tennis shoes">Low.</div>
        <div class="filterDiv basketball shoes">Hard</div>
        <div class="filterDiv basketball shoes">Grass</div>
        <div class="filterDiv fitness sneakers">Grunt</div>
        <div class="filterDiv fitness tennis shoes">Run</div>
        <div class="filterDiv fitness sneakers">Confort</div>
        <div class="filterDiv fitness sneakers">Block</div>
        <div class="filterDiv basketball shoes">CrossFit</div>
      </div>
    </div>

    // /  /<CategoryList />
  );
}
