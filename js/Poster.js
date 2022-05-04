AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.posterContainer = this.el;   
    this.posters();
  },

  posters: function () {
    const postersRef = [
      {
        id: "superman",
        title: "SUPERMAN",
        url: "./assets/thumbnails/superman.jpg",
      },
      {
        id: "spider_man",
        title: "SPIDER MAN",
        url: "./assets/thumbnails/spider_man.jpg",
      },

      {
        id: "aero",
        title: "CAPTAIN AREO",
        url: "./assets/thumbnails/areo.jpg",
      },
      {
        id: "outer_space",
        title: "OUTER SPACE",
        url: "./assets/thumbnails/outer_space.jpg",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.posterContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 30
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "purple" });
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y:0, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 80,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -30;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});