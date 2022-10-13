
class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }

       
    start() {
            this.intervalId = setInterval(this.update, 1000 / 60);
        }
        
    clear() {
            this.ctx.clearRect( 0, 0, this.width, this.height)
        }
        
    update = () => {
            this.frames++;
            this.clear();
            this.player.newPosition()
            this.player.draw();
            this.updateObstacles();
            this.checkGameOver();
            this.score();
        };

        stop(){
            clearInterval(this.intervalId);
        }

  checkGameOver(){
    const crash = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle)
    })

    if(crash){
        this.stop();
    }
   }
    
   updateObstacles(){
    for(let i=0; i<this.obstacles.length; i++){
        this.obstacles[i].y +=1;
        this.obstacles[i].draw();
   }


    if(this.frames % 180 === 0){

        let y = 0

        let minWidth = 75;
        let maxWidth = 300;

        let width = Math.floor(Math.random() * (maxWidth - minWidth +1) + minWidth)

        let minGap = 100;
        let maxGap = 300;

        //this creates the gap
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

   this.obstacles.push(new Component(0 + gap, 0, width, 50, 'red', this.ctx)
   )

         }
     }
}

/*     window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  };
 */