class Level {
    constructor(width, height) {
        this.tiles = [];
        this.fadeTiles = [];
        this.enemies = [];
        this.checkpoints = [];
        this.map = [];
        this.ice = null;
        this.mapWidth = width;
        this.mapHeight = height;
        this.currCheckpoint = 1;
        this.config = Config.getInstance();
        this.tileWidth = this.config.mapWidth / this.mapWidth;
        this.tileHeight = this.config.mapHeight / this.mapHeight;
        this.isFinish = false;
    }
    
    getWidth() {
        return this.mapWidth;
    }
    
    getHeight() {
        return this.mapHeight;
    }
    
    init(ice) {};
    
    reset() {}
    
    reachCheckpoint(checkpoint) {}
};

