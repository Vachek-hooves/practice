Team = ['  Olivia  ', 1111, 'Lily', 'Oscar', true, null];
// Team = ['Peter', ' Adam', ' Gary', ' Bobby', 'Philip', 'Andrea', ' Evelyn', 'Evelyn', 'Kimberly', 'Denise'];
// Team=['Matt', 'Ann', 'Dmitry', 'Max'];



function dreamTeam(){
    string=[];
    crew=[];

    console.log(Team)
    for (let i = 0; i < Team.length; i++) {
        
        Hero=Team[i]
        // console.log(Hero)
        if(typeof(Hero)=='string'){
            Hero=Hero.trim()
            string.push((Hero[0]).toUpperCase())

            console.log(Hero[0])
        }
    }
    console.log(string)

    crew=string.map(letter=>letter[0]).sort().join(' ');
    // console.log(crew.length)
    console.log(crew)
    // console.log(typeof(crew))
    
}
dreamTeam();
