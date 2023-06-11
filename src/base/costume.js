class Costume {
    constructor(name, source) {
        this.name = name;
        this.source = `/assets/${source}`;
        this.width = 0;
        this.height = 0;
        this.loaded = false;

        this.img = new Image();
        this.img.src = this.source;

        GameData.images.push(this);

        this.img.onload = () => {
            this.width = this.img.width;
            this.height = this.img.height;

            GameData.images.remove(this);
            GameData.loaded();
        };
    }
}