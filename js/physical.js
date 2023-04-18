function physicalgame(){
if (globalvar === 1 && startofplaceX < 210 && startofplaceY > 180) {startofplaceY += 10;}
}

if (globalvar === 1 && startofplaceX > 0 && startofplaceX < 150 &&
     startofplaceY > 0 && startofplaceY < 220){upflag = 0} else {upflag = 1}

if(globalvar ===1 && startofplaceX === 190 && startofplaceY <= 120 && startofplaceY >= 190){
    leftflag = 0
} else {leftflag = 1}