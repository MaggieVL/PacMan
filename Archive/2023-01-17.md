# 17 January 2023

* 6th day of the project
* Article https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1 `ml`
* Mantra
  * Do everything yourself, do not search for ready code in the internet.
  * The goal is the skill, not the result. The result should demonstrate the skill.
  * Always begin by analysing the original game (eg. Google PacMan and play the Google doodle) and asking yourself "How can I do this w/ HTML, CSS and JavaScript."
  * Make small steps. Sometimes you will be overwhelmed by the possibilities. Do not get lost. Make small steps.
* Homework
  * Make a plan of coding the game by making some research beforehand (already watched some videos on sprite animations and saw I didn't handle the sprite sheet visualisation well, so i need to change it and write down my thoughts of the plan so far) `ml`
* Done
  * found some useful 2d game dev tutorials to watch (+ found out the right way to do sprite animations) 
  * Plan:
    * make pacman move straight without stopping until a wall is reached (set the coordinates for the walls in an array probably and check if they're reached)
    * make coins disappear after pacman has eaten them (maybe use the same patch of the sprite from the second board which is empty and just translate the coordinates with the needed numbers)
    * animate pacman (when he gets to a coin, its mouth should be open wide, after eating it - not that much)
    * animate the enemies
    * each enemy has its specific tactic for reaching pacman (way of moving towards him)
    * pacman gets eaten - 'explosion' animation -> lives--
    * power pellets - pacman eats it, enemies turn blue and start moving away from pacman, pacman can eat them 
      * each monster eaten - 200 points more
      * after eaten - gets back to 'cage' at the centre of the board