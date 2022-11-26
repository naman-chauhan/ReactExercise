let arr = [];
temp = getElementByID("txt").value;
let old = localStorage.getItem("posts");
let oldpost = JSON.parse(old);
let newarr = [temp, ...oldpost];
localstorage.setItem("posts", JSON.stringify(newarr));

//homepage
let home = localstorage.getItem("posts");
let homeArr = JSON.parse(home);

homeArr.map((post, index) => {
  <post post={post} index={index} key={index} removePost={removePost} />;
});
