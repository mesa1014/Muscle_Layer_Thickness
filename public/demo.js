window.onload = function() {
  var progressBar = document.getElementById("progress");
  var display = document.getElementById("display");

  function download(dataPath) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataPath, true);
    // xhr.open("GET", "/data/lm_2.json", true);
    xhr.responseType = "text";
    xhr.onprogress = function(e) {
      if (e.lengthComputable) {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
        display.innerText = 'Loading: ' + Math.floor((e.loaded / e.total) * 100) + '%';
        // console.log(progressBar.max,progressBar.value);
      }
    };
    xhr.onloadstart = function(e) {
      progressBar.value = 0;
      display.innerText = 'Loading: 0%';
    };
    xhr.onloadend = function(e) {
      progressBar.value = e.loaded;
      // progressBar.style.borderColor = "green";
      // progressBar.style.backgroundColor = "green";
    };
    xhr.send(null);
  }
  download("/data/cm_5.json");
  // download("/data/lm_2.json");


  // container = document.createElement( 'div' );
  var container = document.getElementById( 'LM' );
  document.body.appendChild( container );
  // container.style.width = "500px";
  // container.style.height = "500px";

  container2 = document.getElementById( 'CM' );
  document.body.appendChild( container2 );
  // container2.style.width = "50%";
  // container2.style.height = "50%";
  // container2.style.margin = "0%";
  var zincRenderer = new Zinc.Renderer(container, window);
  zincRenderer.initialiseVisualisation();
  var scene = zincRenderer.createScene("stomach");
  scene.loadViewURL("./data/stomachjs_view.json");
  scene.loadMetadataURL("./data/lm_1.json");
  // console.log(scene.id);
  // var geom2 = scene.getObjectById( 1001, true );
  // console.log(geom);

  // console.log(Zinc.Geometry.modelId);
  // Zinc.defaultOpacity = 0.1;
  // console.log(Zinc.defaultOpacity);
  // scene.setInteractiveControlEnable = true;
  // var camera = new THREE.PerspectiveCamera( 45, 3 / 2, 1, 1000 );
  // scene.add( camera );
  zincRenderer.setCurrentScene(scene);
  zincRenderer.animate();
  // console.log(scene);
  // console.log(scene.camera.position);
  // console.log(zincRenderer);
  var geom = scene.getZincGeometryByID(1001);

  var zincRenderer2 = new Zinc.Renderer(container2, window);
  zincRenderer2.initialiseVisualisation();
  var scene2 = zincRenderer2.createScene("stomach2");
  scene2.loadViewURL("./data/stomachjs_view.json");
  scene2.loadMetadataURL("./data/cm_1.json");
  // scene.setInteractiveControlEnable = true;

  zincRenderer2.setCurrentScene(scene2);
  zincRenderer2.animate();
  // console.log(scene2);



  function viewAll()
  {
    zincRenderer.viewAll();
    zincRenderer2.viewAll();
  }

  var gui = new dat.GUI( { autoPlace: false } );
  var obj = { add:function(){ viewAll(); }};
  gui.add(obj,'add').name("Reset View");

  // Put gui on top right
  var customContainer = document.getElementById('gui');
  customContainer.appendChild(gui.domElement);



}
