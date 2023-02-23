const pointLines = [   { 
    startTop: 12.5, 
    startLeft: 12.5, 
    endTop: 12.5, 
    endLeft: 100.5 
}, // left up 1 - horizontal
{ 
    startTop: 12.5, 
    startLeft: 124.5, 
    endTop: 12.5, 
    endLeft: 212.5 },  // right up 1 - horizontal
{    
    startTop: 44.5, 
    startLeft: 12.5, 
    endTop: 44.5, 
    endLeft: 212.5 
}, // full line up 2 - horizontal 
{ 
    startTop: 68.5, 
    startLeft: 12.5, 
    endTop: 68.5, 
    endLeft: 52.5
}, // left line up 3 - horizontal
{   
    startTop: 68.5, 
    startLeft: 76.5, 
    endTop: 68.5, 
    endLeft: 100.5 
}, // middle left line up 3 - horizontal
{ 
    startTop: 68.5, 
    startLeft: 124.5, 
    endTop: 68.5, 
    endLeft: 148.5 
}, // middle right line up 3 - horizontal
{ 
    startTop: 68.5, 
    startLeft: 172.5, 
    endTop: 68.5, 
    endLeft:  212.5
}, // right line up 3 - horizontal
{
    startTop: 116.5, 
    startLeft: 8.5, 
    endTop: 116.5, 
    endLeft:  76.5
}, // middle line left 0 - horizontal
{
    startTop: 116.5, 
    startLeft: 148.5, 
    endTop: 116.5, 
    endLeft:  219.5
}, // middle line right 0 - horizontal
{   
    startTop: 164.5, 
    startLeft: 12.5, 
    endTop: 164.5, 
    endLeft: 100.5 
}, // left line down 1 - horizontal
{ 
    startTop: 164.5, 
    startLeft: 124.5, 
    endTop: 164.5, 
    endLeft: 212.5
}, // right line down 1 - horizontal
{ 
    startTop: 188.5, 
    startLeft: 12.5, 
    endTop: 188.5, 
    endLeft: 28.5  
}, // left line down 2 - horizontal
{ 
    startTop: 188.5, 
    startLeft: 52.5, 
    endTop: 188.5, 
    endLeft: 172.5
}, // middle line down 2 - horizontal
{ 
    startTop: 188.5, 
    startLeft: 196.5, 
    endTop: 188.5, 
    endLeft: 212.5
}, // right line down 2 - horizontal
{   startTop: 212.5, 
    startLeft: 12.5, 
    endTop: 212.5, 
    endLeft: 52.5
}, // right line down 3 - horizontal
{ 
    startTop: 212.5, 
    startLeft: 76.5, 
    endTop: 212.5, 
    endLeft: 100.5
}, // right middle line down 3 - horizontal
{ 
    startTop: 212.5, 
    startLeft: 124.5, 
    endTop: 212.5, 
    endLeft: 148.5
}, // left middle line down 3 - horizontal
{ 
    startTop: 212.5, 
    startLeft: 172.5, 
    endTop: 212.5, 
    endLeft: 212.5
}, // right line down 3 - horizontal
{ 
    startTop: 236.5, 
    startLeft: 12.5, 
    endTop: 236.5, 
    endLeft: 212.5
}, // full line down 4 - horizontal
// vertical lines
{ // vertical up - 1
    startTop: 12.5, 
    endTop: 68.5, 
    startLeft: 12.5, 
    endLeft: 12.5
}, 
{ // vertical down 1 - 1 
    startTop: 164.5, 
    endTop: 188.5,
    startLeft: 12.5,  
    endLeft: 12.5
},
{ // vertical down 2 - 1
    startTop: 212.5, 
    endTop: 236.5, 
    startLeft: 12.5, 
    endLeft: 12.5
},
{ // vertical almost full - 2
    startTop: 12.5,
    endTop: 212.5, 
    startLeft: 52.5,  
    endLeft: 52.5
},
{ // vertical 1 - 3
    startTop: 44.5,
    endTop: 68.5,
    startLeft: 76.5,
    endLeft: 76.5
},
{ // vertical 2 - 3
    startTop: 92.5,
    endTop: 164.5,
    startLeft: 76.5,
    endLeft: 76.5,
},
{ // vertical 3 - 3
    startTop: 188.5,
    endTop: 212.5,
    startLeft: 76.5,
    endLeft: 76.5,
},
{ // vertical 1 - 4
    startTop: 12.5,
    endTop: 44.5,
    startLeft: 100.5,
    endLeft: 100.5,
},
{ // vertical 2 - 4
    startTop: 68.5,
    endTop: 92.5,
    startLeft: 100.5,
    endLeft: 100.5,
},
{ // vertical 3 - 4
    startTop: 164.5,
    endTop: 188.5,
    startLeft: 100.5,
    endLeft: 100.5, 
},
{ // vertical 4 - 4
    startTop: 212.5,
    endTop: 236.5,
    startLeft: 100.5,
    endLeft: 100.5,
},
{ // vertical 5 - 1
    startTop: 12.5,
    endTop: 44.5,
    startLeft: 124.5,
    endLeft: 124.5,
},
{ // vertical 5 - 2
    startTop: 68.5,
    endTop: 92.5,
    startLeft: 124.5,
    endLeft: 124.5,
},
{ // vertical 5 - 3
    startTop: 164.5,
    endTop: 188.5,
    startLeft: 124.5,
    endLeft: 124.5,
},
{ // vertical 5 - 4
    startTop: 212.5,
    endTop: 236.5,
    startLeft: 124.5,
    endLeft: 124.5,
}, 
{ // vertical 6 - 1
    startTop: 44.5,
    endTop: 68.5,
    startLeft: 148.5,
    endLeft: 148.5,
}, 
{ // vertical 6 - 2
    startTop: 92.5,
    endTop: 164.5,
    startLeft: 148.5,
    endLeft: 148.5,
},
{ // vertical 6 - 3
    startTop: 188.5,
    endTop: 212.5,
    startLeft: 148.5,
    endLeft: 148.5,
}, 
{ // vertical 7 - full
    startTop: 12.5,
    endTop: 212.5,
    startLeft: 172.5,
    endLeft: 172.5, 
},
{ // vertical 8 - 1
    startTop: 12.5, 
    endTop: 68.5, 
    startLeft: 212.5,
    endLeft: 212.5,
}, 
{ // vertical 8 - 2
    startTop: 164.5, 
    endTop: 188.5,
    startLeft: 212.5,
    endLeft: 212.5,
}, 
{ // vertical 8 - 3
    startTop: 212.5, 
    endTop: 236.5, 
    startLeft: 212.5,
    endLeft: 212.5,
},
{ // vertical missed right
    startLeft: 196.5,
    endLeft: 196.5,
    startTop: 188.5,
    endTop: 212.5,
},
{ // vertical missed left
    startLeft: 28.5,
    endLeft: 28.5,
    startTop: 188.5,
    endTop: 212.5,
},
]

export default pointLines;