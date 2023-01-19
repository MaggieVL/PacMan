# 18 January 2023

* 7th day of the project
* Article https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1 `ml`
* Mantra
  * Do everything yourself, do not search for ready code in the internet.
  * The goal is the skill, not the result. The result should demonstrate the skill.
  * Always begin by analysing the original game (eg. Google PacMan and play the Google doodle) and asking yourself "How can I do this w/ HTML, CSS and JavaScript."
  * Make small steps. Sometimes you will be overwhelmed by the possibilities. Do not get lost. Make small steps.
* Homework
  * do research and work on the plan again (game steps, architecture planning, etc) `ml` 
* Done
  * watched a full tutorial on 2d game dev, researched enemy movement rules in the game and in general
  * added more points to plan 
  * Plan:
    * make pacman move straight without stopping until a wall is reached (set the coordinates for the walls in an array probably and check if they're reached)
    * make coins disappear after pacman has eaten them (maybe use the same patch of the sprite from the second board which is empty and just translate the coordinates with the needed numbers)
    * animate pacman (when he gets to a coin, its mouth should be open wide, after eating it - not that much)
    * animate the enemies
    * each enemy has its specific tactic for reaching pacman (way of moving towards him)
    * pacman gets eaten - 'explosion' animation -> lives--
    * power pellets - pacman eats it, enemies turn blue and start moving away from pacman (in what way?), pacman can eat them 
      * each monster eaten - 200 points more
      * after eaten - gets back to 'cage' at the centre of the board
      * enemies get white when the effect of the pellet has almost reached its end
      * when an enemy gets eaten, it gets turned into eyes, gets back to the cage (on the shortest path or path reversed?) and gets back to the enemy it was and immediately gets out of it but the other enemeies not eaten yet will still stay blue/white (when do all of the enemies get out, what are the intervals of getting out of the cage for each enemy?)
      * enemies always moving up and down synchronously in cage
    * score - when does it go up and down, by what number
    * lives - do they ever go up or only down when pacman gets eaten
    * General conclusion:
      * (maybe animate all characters first or whenever (not the most important after all) - their main animations or all)
      * make pacman move around all the walls and make it eat coins (make score go up when a coin gets eaten) 
      * make each enemy move in its specific way towards pacman 
      * make the enemies eat pacman = explosion animation + lives go down
      * pacman eats a power pellet -> the enemies turn blue -> turn white when the effect reaches its end
        * an enemy gets eaten -> turn it into eyes, move it back to the cage in the shortest way possible (in general: save the cage position and pacman starting position in the coordinates array or sth like this) 
        * get it out of the cage and start its usual pacman-chasing movement
          * consider later - pacman can eat more than one power pellet 'at once'
      * win/lose cases:
        * no more lives - lose
        * eat all coins - game starts from the beginning having saved the points reached so far