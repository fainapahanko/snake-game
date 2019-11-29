function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tale = [];

    this.draw = () => {
        for(var i = 0; i < this.tale.length; i++){
            ctx.fillStyle = "#ADD5FF"
            ctx.fillRect(this.tale[i].x, this.tale[i].y, scale, scale)
        }

        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.upDate = () => {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        for(var i = 0; i < this.tale.length-1; i++){
            this.tale[i] = this.tale[i+1]
        }

        this.tale[this.total-1] = {x : this.x, y : this.y}

        if(this.x > canvas.width) this.x = 0
        if(this.x < 0) this.x = canvas.width
        if(this.y > canvas.height) this.y = 0
        if(this.y < 0) this.y = canvas.height
    }

    this.changeDirection = (direction) => {
        switch (direction){
            case "Up":
                this.xSpeed = 0
                this.ySpeed = -scale * 1
                break;
            case "Down":
                this.xSpeed = 0
                this.ySpeed = scale * 1
                break;
            case "Left":
                this.xSpeed = -scale * 1
                this.ySpeed = 0
                break;
            case "Right":
                this.xSpeed = scale * 1
                this.ySpeed = 0
                break;
        }
    }

    this.eatFruit = (fruit) => {
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++
            console.log(this.total)
            return true
        } 
        return false
    }
}